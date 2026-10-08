"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter, notFound } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  FolderTree,
  Tag,
  Settings,
  ChevronDown,
} from "lucide-react";
import DashboardNavbar from "@/components/DashboardNavbar";

interface UserProfile {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isUnauthenticated, setIsUnauthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("insightpoll_token");
    const userStr = localStorage.getItem("insightpoll_user");

    if (!token) {
      setIsCheckingAuth(false);
      setIsUnauthenticated(true);
      return;
    }

    if (userStr) {
      try {
        const parsed = JSON.parse(userStr);
        setCurrentUser(parsed);
      } catch {
        // ignore
      }
    }
    setIsCheckingAuth(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("insightpoll_token");
    localStorage.removeItem("insightpoll_user");
    router.push("/");
  };

  const isDashboardActive = pathname === "/dashboard";
  const isUsersActive = pathname.startsWith("/dashboard/users");
  const isCategoriesActive = pathname.startsWith("/dashboard/categories");
  const isTagsActive = pathname.startsWith("/dashboard/tags");
  const isBlogActive = pathname.startsWith("/dashboard/blog");
  const isSettingsActive = pathname.startsWith("/dashboard/settings");

  // Cegah flash of content: jangan render layout/konten apapun jika auth belum terverifikasi
  if (isCheckingAuth) {
    return (
      <div className="h-screen w-screen bg-[#fafbfc] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-slate-300 border-t-slate-800 rounded-full animate-spin" />
      </div>
    );
  }

  // Jika tidak memiliki token (belum login), samarkan rute menjadi 404 Not Found
  if (isUnauthenticated) {
    notFound();
  }

  return (
    <div className="flex flex-col h-screen bg-[#fafbfc] text-slate-800 antialiased overflow-hidden font-sans">
      {/* Navbar Atas */}
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
        {/* Sidebar Navigasi */}
        <aside
          className={`${
            sidebarOpen ? "w-60" : "w-0 -translate-x-full md:w-16 md:translate-x-0"
          } transition-all duration-300 ease-in-out bg-white border-r border-slate-200/80 flex flex-col shrink-0 overflow-y-auto select-none`}
        >
          <nav className="p-3 space-y-1.5">
            {/* Menu Dashboard Overview */}
            <Link
              href="/dashboard"
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                isDashboardActive
                  ? "bg-slate-100 text-slate-900 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <LayoutDashboard className="w-4 h-4 shrink-0 text-slate-600" />
              {sidebarOpen && <span>Dashboard</span>}
            </Link>

            {/* Menu User (Hanya ADMIN yang bisa melihat dan mengakses) */}
            {currentUser?.role === "ADMIN" && (
              <div>
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isUsersActive
                      ? "bg-slate-100/80 text-slate-900 font-semibold"
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
                    <Link
                      href="/dashboard/users"
                      className={`block w-full text-left py-1.5 px-2 rounded-lg text-xs font-medium transition ${
                        isUsersActive
                          ? "text-slate-900 font-semibold bg-slate-100/80"
                          : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      User Management
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Menu Kategori (Admin Only) */}
            <Link
              href="/dashboard/categories"
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                isCategoriesActive
                  ? "bg-slate-100 text-slate-900 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <FolderTree className="w-4 h-4 shrink-0 text-slate-600" />
              {sidebarOpen && <span>Kategori</span>}
            </Link>

            {/* Menu Tags (Semua Role - Hanya Lihat) */}
            <Link
              href="/dashboard/tags"
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                isTagsActive
                  ? "bg-slate-100 text-slate-900 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Tag className="w-4 h-4 shrink-0 text-slate-600" />
              {sidebarOpen && <span>Tags</span>}
            </Link>

            {/* Menu Blog */}
            <Link
              href="/dashboard/blog"
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                isBlogActive
                  ? "bg-slate-100 text-slate-900 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <FileText className="w-4 h-4 shrink-0 text-slate-600" />
              {sidebarOpen && <span>Blog</span>}
            </Link>

            {/* Menu Settings */}
            <Link
              href="/dashboard/settings"
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                isSettingsActive
                  ? "bg-slate-100 text-slate-900 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Settings className="w-4 h-4 shrink-0 text-slate-600" />
              {sidebarOpen && <span>Settings</span>}
            </Link>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#fafbfc]">
          <div className="max-w-7xl mx-auto space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
