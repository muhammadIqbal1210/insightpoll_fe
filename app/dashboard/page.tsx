"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  ClipboardList,
  UserCheck,
  MapPin,
  TrendingUp,
  ChevronDown,
  RefreshCw,
  Plus,
  Calendar,
  Tag,
  Eye,
  Trash2,
} from "lucide-react";
import DashboardNavbar from "@/components/DashboardNavbar";
import AddBlogModal from "@/components/AddBlogModal";

interface UserProfile {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
}

interface MetricItem {
  label: string;
  value: string;
  change: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  content: string;
  category: string;
  coverImage?: string;
  status: string;
  createdAt: string;
  author?: {
    name?: string;
    email?: string;
  };
}

interface DashboardData {
  stats: {
    totalSurveys: MetricItem;
    verifiedRespondents: MetricItem;
    spatialCoverage: MetricItem;
    publicSentiment: MetricItem;
  };
  weeklyOverview: Array<{
    day: string;
    value: number;
    respondents?: string;
    color: string;
  }>;
  recentActivities: Array<{
    id: string;
    title: string;
    action: string;
    timestamp: string;
  }>;
}

export default function DashboardPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // State Blog
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);

  // Ambil user dan data dinamis dari API backend
  const fetchDashboardData = async (token: string) => {
    try {
      setIsLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/dashboard/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("insightpoll_token");
          localStorage.removeItem("insightpoll_user");
          router.push("/");
          return;
        }
        throw new Error("Gagal mengambil data dashboard");
      }

      const json = await res.json();
      setDashboardData(json.data);
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Ambil data blog dari backend
  const fetchPosts = async () => {
    try {
      setIsFetchingPosts(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/posts`);
      if (res.ok) {
        const json = await res.json();
        setPosts(json.data || []);
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setIsFetchingPosts(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus artikel ini?")) return;
    const token = localStorage.getItem("insightpoll_token");
    if (!token) return;

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        fetchPosts();
      }
    } catch (err) {
      console.error("Gagal menghapus post:", err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("insightpoll_token");
    const userStr = localStorage.getItem("insightpoll_user");

    if (!token) {
      router.push("/");
      return;
    }

    if (userStr) {
      try {
        setCurrentUser(JSON.parse(userStr));
      } catch {
        // ignore
      }
    }

    fetchDashboardData(token);
    fetchPosts();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("insightpoll_token");
    localStorage.removeItem("insightpoll_user");
    router.push("/");
  };

  const stats = dashboardData?.stats || {
    totalSurveys: {
      label: "Total Survei Aktif",
      value: "142",
      change: "+14 survei bulan ini",
    },
    verifiedRespondents: {
      label: "Responden Terverifikasi",
      value: "48,250",
      change: "+12.5% validasi geolokasi",
    },
    spatialCoverage: {
      label: "Cakupan Wilayah (Dapil / Kab)",
      value: "514 Kab/Kota",
      change: "98.2% sebaran presisi",
    },
    publicSentiment: {
      label: "Indeks Sentimen Positif",
      value: "72.8%",
      change: "+4.3% dari pekan lalu",
    },
  };

  const weeklyOverview = dashboardData?.weeklyOverview || [
    { day: "Sen", value: 65, color: "from-slate-700 to-slate-500" },
    { day: "Sel", value: 85, color: "from-emerald-600 to-teal-400" },
    { day: "Rab", value: 70, color: "from-cyan-600 to-blue-400" },
    { day: "Kam", value: 95, color: "from-indigo-600 to-violet-400" },
    { day: "Jum", value: 55, color: "from-amber-500 to-orange-400" },
  ];

  const recentActivities = dashboardData?.recentActivities || [];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 flex flex-col font-sans">
      {/* Reusable Dashboard Navbar */}
      <DashboardNavbar
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        user={currentUser}
        onLogout={handleLogout}
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar buka-tutup */}
        <aside
          className={`${
            sidebarOpen ? "w-60" : "w-0 -translate-x-full md:w-16 md:translate-x-0"
          } transition-all duration-300 ease-in-out bg-white border-r border-slate-200/80 flex flex-col shrink-0 overflow-y-auto select-none`}
        >
          <nav className="p-3 space-y-1.5">
            {/* Menu Dashboard */}
            <button
              onClick={() => setActiveMenu("dashboard")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeMenu === "dashboard"
                  ? "bg-slate-100 text-slate-900 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <LayoutDashboard className="w-4 h-4 shrink-0 text-slate-600" />
              {sidebarOpen && <span>Dashboard</span>}
            </button>

            {/* Menu User (Accordion / Submenu) */}
            <div>
              <button
                onClick={() => {
                  setUserDropdownOpen(!userDropdownOpen);
                  setActiveMenu("users");
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeMenu.startsWith("user")
                    ? "bg-slate-100/60 text-slate-900 font-medium"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 shrink-0 text-slate-600" />
                  {sidebarOpen && <span>User</span>}
                </div>
                {sidebarOpen && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      userDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Sub-menu User */}
              {sidebarOpen && userDropdownOpen && (
                <div className="mt-1 pl-9 pr-2 space-y-1">
                  <button
                    onClick={() => setActiveMenu("users-active")}
                    className={`w-full text-left py-1.5 px-2 rounded-lg text-xs font-medium transition ${
                      activeMenu === "users-active"
                        ? "text-slate-900 font-semibold bg-slate-100/80"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    Active Users
                  </button>
                  <button
                    onClick={() => setActiveMenu("users-management")}
                    className={`w-full text-left py-1.5 px-2 rounded-lg text-xs font-medium transition ${
                      activeMenu === "users-management"
                        ? "text-slate-900 font-semibold bg-slate-100/80"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    User Management
                  </button>
                </div>
              )}
            </div>

            {/* Menu Blog */}
            <button
              onClick={() => {
                setActiveMenu("blog");
                fetchPosts();
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeMenu === "blog"
                  ? "bg-slate-100 text-slate-900 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <FileText className="w-4 h-4 shrink-0 text-slate-600" />
              {sidebarOpen && <span>Blog</span>}
            </button>

            {/* Menu Settings */}
            <button
              onClick={() => setActiveMenu("settings")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeMenu === "settings"
                  ? "bg-slate-100 text-slate-900 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Settings className="w-4 h-4 shrink-0 text-slate-600" />
              {sidebarOpen && <span>Settings</span>}
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#fafbfc]">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                  {activeMenu === "dashboard"
                    ? "Executive Polling & Spatial Analytics"
                    : activeMenu === "blog"
                    ? "Manajemen Berita & Publikasi Riset"
                    : activeMenu.startsWith("user")
                    ? "Manajemen Pengguna"
                    : "Pengaturan Sistem"}
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  {activeMenu === "blog"
                    ? "Kelola berita, press release survei politik, dan rilis analisis kebijakan publik."
                    : "Monitoring data survei, validasi geospasial GIS, dan sentimen publik real-time."}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {activeMenu === "blog" ? (
                  <button
                    onClick={() => setIsBlogModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.99] rounded-xl shadow-xs transition"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Berita / Artikel</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      const token = localStorage.getItem("insightpoll_token");
                      if (token) fetchDashboardData(token);
                    }}
                    disabled={isLoading}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition disabled:opacity-50 shadow-xs"
                    title="Refresh Data"
                  >
                    <RefreshCw
                      className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`}
                    />
                    <span>Refresh Data</span>
                  </button>
                )}
              </div>
            </div>

            {/* TAB CONTENT: BLOG / BERITA */}
            {activeMenu === "blog" ? (
              <div className="space-y-4">
                {isFetchingPosts ? (
                  <div className="py-16 text-center text-slate-400 text-sm">
                    Memuat daftar artikel...
                  </div>
                ) : posts.length === 0 ? (
                  <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-12 text-center">
                    <FileText className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                    <h3 className="text-base font-semibold text-slate-800">Belum ada berita atau artikel</h3>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                      Mulai publikasikan temuan riset opini publik atau rilis survei perdana Anda.
                    </p>
                    <button
                      onClick={() => setIsBlogModalOpen(true)}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Buat Artikel Pertama</span>
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {posts.map((post) => (
                      <div
                        key={post.id}
                        className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition group"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                              <Tag className="w-3 h-3" />
                              {post.category}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                post.status === "PUBLISHED"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {post.status}
                            </span>
                          </div>

                          {post.coverImage && (
                            <div className="mb-3 rounded-xl overflow-hidden h-36 bg-slate-100">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={
                                  post.coverImage.startsWith("http")
                                    ? post.coverImage
                                    : `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}${post.coverImage}`
                                }
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                              />
                            </div>
                          )}

                          <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 group-hover:text-slate-700 transition">
                            {post.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                            {post.summary || post.content.replace(/<[^>]*>?/gm, "")}
                          </p>
                        </div>

                        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                          <div className="flex items-center gap-1.5 text-[11px]">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>
                              {new Date(post.createdAt).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>

                          <button
                            onClick={() => handleDeletePost(post.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                            title="Hapus Artikel"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* TAB CONTENT: DASHBOARD STATS */
              <>
                {/* Top Stat Cards (4 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                  {/* Card 1 */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between text-slate-600 mb-3">
                      <span className="text-sm font-medium">{stats.totalSurveys.label}</span>
                      <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center">
                        <ClipboardList className="w-4 h-4 text-slate-600" />
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">
                        {stats.totalSurveys.value}
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {stats.totalSurveys.change}
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between text-slate-600 mb-3">
                      <span className="text-sm font-medium">{stats.verifiedRespondents.label}</span>
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center">
                        <UserCheck className="w-4 h-4 text-emerald-600" />
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">
                        {stats.verifiedRespondents.value}
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {stats.verifiedRespondents.change}
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between text-slate-600 mb-3">
                      <span className="text-sm font-medium">{stats.spatialCoverage.label}</span>
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200/60 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-indigo-600" />
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">
                        {stats.spatialCoverage.value}
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {stats.spatialCoverage.change}
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between text-slate-600 mb-3">
                      <span className="text-sm font-medium">{stats.publicSentiment.label}</span>
                      <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200/60 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-teal-600" />
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">
                        {stats.publicSentiment.value}
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {stats.publicSentiment.change}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom 2 Columns: Weekly Overview Chart & Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  {/* Weekly Overview */}
                  <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-base font-semibold text-slate-900">
                          Survei & Entri Respon Mingguan
                        </h2>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Distribusi volume kuesioner dan validasi data responden per hari
                        </p>
                      </div>
                      <span className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                        7 Hari Terakhir
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col justify-end pt-4 pb-2">
                      <div className="relative h-64 w-full flex items-end justify-between px-6 border-b border-l border-slate-200">
                        <div className="absolute inset-x-0 top-0 border-t border-slate-100 flex items-center">
                          <span className="text-[10px] text-slate-400 -ml-7">100</span>
                        </div>
                        <div className="absolute inset-x-0 top-1/4 border-t border-slate-100 flex items-center">
                          <span className="text-[10px] text-slate-400 -ml-6">75</span>
                        </div>
                        <div className="absolute inset-x-0 top-2/4 border-t border-slate-100 flex items-center">
                          <span className="text-[10px] text-slate-400 -ml-6">50</span>
                        </div>
                        <div className="absolute inset-x-0 top-3/4 border-t border-slate-100 flex items-center">
                          <span className="text-[10px] text-slate-400 -ml-6">25</span>
                        </div>

                        {/* SVG Trendline */}
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                        >
                          <polyline
                            fill="none"
                            stroke="#0284c7"
                            strokeWidth="2"
                            points="10,35 30,15 50,30 70,5 90,45"
                          />
                        </svg>

                        {/* Bar chart */}
                        {weeklyOverview.map((item, idx) => {
                          const barHeight = `${(item.value / 100) * 220}px`;
                          return (
                            <div
                              key={idx}
                              className="flex flex-col items-center gap-2 z-10 w-12 group"
                            >
                              <span className="text-xs font-bold text-slate-800">
                                {item.value}%
                              </span>
                              <div
                                className={`w-full rounded-t-xl bg-gradient-to-t ${item.color} shadow-sm transition-transform group-hover:scale-105`}
                                style={{ height: barHeight }}
                              />
                              <span className="text-xs text-slate-500 font-medium">
                                {item.day}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <h2 className="text-base font-semibold text-slate-900">
                          Aktivitas Riset & Feed
                        </h2>
                        <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live Feed
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Log verifikasi responden, analisis GIS, dan pergerakan opini
                      </p>
                    </div>

                    <div className="divide-y divide-slate-100 mt-4">
                      {recentActivities.length > 0 ? (
                        recentActivities.map((act) => (
                          <div
                            key={act.id}
                            className="py-3 flex items-start justify-between text-xs gap-3"
                          >
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-slate-800 truncate">
                                {act.title}
                              </p>
                              <p className="text-slate-500 capitalize">{act.action}</p>
                            </div>
                            <span className="text-[10px] text-slate-400 font-mono whitespace-nowrap shrink-0">
                              {act.timestamp.includes("T")
                                ? new Date(act.timestamp).toLocaleTimeString("id-ID", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })
                                : act.timestamp}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="py-6 text-center text-slate-400 text-xs">
                          Belum ada aktivitas tercatat
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>

      {/* Modal Tambah Berita / Blog */}
      <AddBlogModal
        isOpen={isBlogModalOpen}
        onClose={() => setIsBlogModalOpen(false)}
        onSuccess={() => {
          fetchPosts();
        }}
      />
    </div>
  );
}
