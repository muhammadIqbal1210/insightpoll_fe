"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Search,
  Tag,
  TrendingUp,
  Flame,
  ArrowRight,
  Filter,
  Sparkles,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import { formatTimeAgo, formatDateTime } from "@/data/dateUtils";

interface TagItem {
  id: string;
  name: string;
  slug: string;
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
  views?: number;
  tags?: TagItem[];
  createdAt: string;
  author?: {
    name?: string;
    email?: string;
  };
}

export default function InsightNewsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Array<{ id: string; name: string }>>([]);
  const [tags, setTags] = useState<TagItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 12;

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setCurrentPage(1);
    }, 350);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Load categories and popular tags
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    fetch(`${apiUrl}/categories`)
      .then((res) => res.json())
      .then((json) => {
        if (json.data) setCategories(json.data);
      })
      .catch(() => {});

    fetch(`${apiUrl}/posts/tags?limit=15`)
      .then((res) => res.json())
      .then((json) => {
        if (json.data) setTags(json.data);
      })
      .catch(() => {});
  }, []);

  // Fetch articles (PUBLISHED only)
  const fetchPosts = async (page = 1) => {
    try {
      setIsLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const params = new URLSearchParams({
        page: page.toString(),
        limit: itemsPerPage.toString(),
        status: "PUBLISHED",
      });

      if (selectedCategory && selectedCategory !== "ALL") {
        params.set("category", selectedCategory);
      }
      if (selectedTag) {
        params.set("tag", selectedTag);
      }
      if (debouncedSearch.trim()) {
        params.set("search", debouncedSearch.trim());
      }

      const res = await fetch(`${apiUrl}/posts?${params.toString()}`);
      if (res.ok) {
        const json = await res.json();
        setPosts(json.data || []);
        if (json.pagination) {
          setCurrentPage(json.pagination.page);
          setTotalPages(json.pagination.totalPages);
          setTotalItems(json.pagination.total);
        } else {
          setTotalItems((json.data || []).length);
        }
      }
    } catch (err) {
      console.error("Error fetching insight posts:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [selectedCategory, selectedTag, debouncedSearch, currentPage]);

  // Split into Main Headline, Sub-headlines, and Feed
  const headlinePost = useMemo(() => {
    return posts.length > 0 ? posts[0] : null;
  }, [posts]);

  const secondaryHeadlines = useMemo(() => {
    return posts.length > 1 ? posts.slice(1, 5) : [];
  }, [posts]);

  const feedPosts = useMemo(() => {
    return posts.length > 5 ? posts.slice(5) : [];
  }, [posts]);

  const trendingSidebar = useMemo(() => {
    return [...posts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
  }, [posts]);

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSelectTag = (tagSlug: string) => {
    setSelectedTag((prev) => (prev === tagSlug ? "" : tagSlug));
    setCurrentPage(1);
  };

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const getImageUrl = (url?: string) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `${apiUrl}${url}`;
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 flex flex-col antialiased selection:bg-[#01F2D1]/40 selection:text-black">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-28 pb-20">
        {/* Ticker / Running Topic Bar (Portal Media Style) */}
        <section className="border-y border-slate-200/80 bg-white shadow-2xs">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-none py-0.5">
              <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-rose-600 shrink-0">
                <Flame className="w-4 h-4 fill-rose-600" />
                <span>Trending:</span>
              </span>

              {tags.slice(0, 8).map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleSelectTag(t.slug)}
                  className={`shrink-0 px-2.5 py-1 rounded-full transition-colors font-medium text-xs ${
                    selectedTag === t.slug
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  #{t.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Bar Kategori & Pencarian (Sticky / Media Portal Style) */}
        <section className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-16 md:top-20 z-40">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full md:w-auto pb-1 md:pb-0">
              <button
                onClick={() => handleSelectCategory("ALL")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === "ALL"
                    ? "bg-[#00d2b5] text-slate-950 shadow-xs"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                Semua Kategori
              </button>

              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSelectCategory(c.name)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === c.name
                      ? "bg-[#00d2b5] text-slate-950 shadow-xs"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari riset, isu, tokoh..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00d2b5]/30 focus:bg-white focus:border-[#00d2b5] transition"
              />
            </div>
          </div>
        </section>

        {/* CONTAINER BERITA UTAMA */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          {isLoading && posts.length === 0 ? (
            <div className="py-32 text-center text-slate-400">
              <div className="inline-block w-8 h-8 border-2 border-[#00d2b5] border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-sm font-medium">Memuat berita dan analisis intelijen terbaru...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="py-24 text-center bg-white rounded-3xl border border-dashed border-slate-300 p-8">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-normal text-slate-900">Belum Ada Artikel yang Sesuai</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Tidak ada artikel yang cocok dengan filter atau kata kunci &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("ALL");
                  setSelectedTag("");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-full hover:bg-slate-800 transition"
              >
                Reset Semua Filter
              </button>
            </div>
          ) : (
            <>
              {/* SECTION HEADLINE UTAMA (Koran / Portal Style Grid) */}
              {headlinePost && currentPage === 1 && !selectedTag && !debouncedSearch && (
                <section className="mb-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Big Hero Headline Article (Col 7) */}
                    <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group">
                      <Link href={`/insight/${headlinePost.slug}`} className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden block">
                        {headlinePost.coverImage ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={getImageUrl(headlinePost.coverImage)}
                            alt={headlinePost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center text-slate-500">
                            No Cover
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-[#00d2b5] text-slate-950 text-xs font-bold shadow-md uppercase tracking-wider">
                            {headlinePost.category}
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="flex items-center gap-3 text-xs text-slate-300 font-mono mb-2">
                            <span>{formatTimeAgo(headlinePost.createdAt)}</span>
                            <span>•</span>
                            <span>{headlinePost.author?.name || "Redaksi InsightPoll"}</span>
                          </div>
                          <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal tracking-[-0.03em] leading-tight text-white group-hover:text-[#00d2b5] transition-colors line-clamp-2">
                            {headlinePost.title}
                          </h2>
                        </div>
                      </Link>

                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal mb-4">
                          {headlinePost.summary || headlinePost.content.replace(/<[^>]*>?/gm, "").slice(0, 180) + "..."}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                          <div className="flex flex-wrap gap-1.5">
                            {headlinePost.tags?.slice(0, 3).map((t) => (
                              <span key={t.id} className="text-slate-500 hover:text-slate-900 font-mono">
                                #{t.name}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={`/insight/${headlinePost.slug}`}
                            className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#00a892] group-hover:translate-x-1 transition-all"
                          >
                            <span>Baca Lengkap</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Secondary 3 Headlines (Col 5) */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                      {secondaryHeadlines.map((post) => (
                        <Link
                          key={post.id}
                          href={`/insight/${post.slug}`}
                          className="group bg-white rounded-2xl border border-slate-200/90 p-4 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex gap-4 items-center"
                        >
                          <div className="relative w-28 h-24 sm:w-32 sm:h-24 rounded-xl bg-slate-900 overflow-hidden shrink-0">
                            {post.coverImage ? (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img
                                src={getImageUrl(post.coverImage)}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-500">
                                Insight
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col justify-between space-y-1.5 flex-grow min-w-0">
                            <div className="flex items-center gap-2 text-[11px]">
                              <span className="font-bold text-[#00a892] uppercase">
                                {post.category}
                              </span>
                              <span className="text-slate-300">•</span>
                              <span className="text-slate-400 font-mono">
                                {formatTimeAgo(post.createdAt)}
                              </span>
                            </div>

                            <h3 className="text-sm sm:text-base font-normal tracking-[-0.02em] text-slate-900 leading-snug line-clamp-2 group-hover:text-[#00a892] transition-colors">
                              {post.title}
                            </h3>

                            <div className="text-[11px] text-slate-500 font-mono">
                              Oleh {post.author?.name || "Redaksi"}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* FEED BERITA UTAMA + SIDEBAR POPULER */}
              <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Feed Berita Berkala (Col 8) */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-200 pb-3">
                    <h3 className="text-base sm:text-xl font-normal tracking-[-0.03em] text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#00d2b5] shrink-0" />
                      <span>Semua Berita &amp; Riset Terkini</span>
                    </h3>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-mono">
                      Menampilkan {(currentPage === 1 && !selectedTag && !debouncedSearch ? feedPosts : posts).length} dari {totalItems} artikel
                    </span>
                  </div>

                  {/* News Cards Grid 2 Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {(currentPage === 1 && !selectedTag && !debouncedSearch ? feedPosts : posts).map((post) => (
                      <Link
                        key={post.id}
                        href={`/insight/${post.slug}`}
                        className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:border-[#00d2b5] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                            {post.coverImage ? (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img
                                src={getImageUrl(post.coverImage)}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center text-slate-500 text-xs">
                                InsightPoll
                              </div>
                            )}
                            <div className="absolute top-3 left-3">
                              <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider">
                                {post.category}
                              </span>
                            </div>
                          </div>

                          <div className="p-5">
                            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-2">
                              <span>{formatTimeAgo(post.createdAt)}</span>
                              <span>•</span>
                              <span>{post.author?.name || "Redaksi"}</span>
                            </div>

                            <h4 className="text-base font-normal tracking-[-0.02em] text-slate-900 leading-snug line-clamp-2 group-hover:text-[#00a892] transition-colors mb-2">
                              {post.title}
                            </h4>

                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                              {post.summary || post.content.replace(/<[^>]*>?/gm, "").slice(0, 110) + "..."}
                            </p>
                          </div>
                        </div>

                        <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="text-slate-400 font-mono text-[11px]">
                            {post.tags?.[0] ? `#${post.tags[0].name}` : "#Riset"}
                          </span>

                          <span className="font-semibold text-slate-900 group-hover:text-[#00a892] inline-flex items-center gap-1 transition-colors">
                            <span>Baca</span>
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="pt-6">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      totalItems={totalItems}
                      itemsPerPage={itemsPerPage}
                      onPageChange={(page) => setCurrentPage(page)}
                    />
                  </div>
                </div>

                {/* Right: Sidebar Terpopuler & Widget (Col 4) */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Widget Berita Terpopuler */}
                  <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#00d2b5]" />
                        <span>Paling Banyak Dibaca</span>
                      </h4>
                      <span className="text-[10px] font-mono text-slate-400">TOP 5</span>
                    </div>

                    <div className="space-y-4 divide-y divide-slate-100">
                      {trendingSidebar.map((post, idx) => (
                        <Link
                          key={post.id}
                          href={`/insight/${post.slug}`}
                          className={`group pt-4 first:pt-0 flex items-start gap-3.5 block`}
                        >
                          <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-900 font-mono font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-[#00d2b5] transition-colors">
                            0{idx + 1}
                          </span>

                          <div className="min-w-0">
                            <span className="text-[10px] font-bold text-slate-500 uppercase block mb-0.5">
                              {post.category}
                            </span>
                            <h5 className="text-xs sm:text-sm font-normal text-slate-900 leading-snug line-clamp-2 group-hover:text-[#00a892] transition-colors">
                              {post.title}
                            </h5>
                            <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                              {formatTimeAgo(post.createdAt)}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Widget Eksplorasi Tagar */}
                  <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                        <Tag className="w-4 h-4 text-[#00d2b5]" />
                        <span>Topik &amp; Tagar Hangat</span>
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => handleSelectTag(t.slug)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                            selectedTag === t.slug
                              ? "bg-slate-900 text-white shadow-xs"
                              : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                          }`}
                        >
                          #{t.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Banner Mini Ajakan Riset */}
                  <div className="rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 p-6 text-white border border-slate-800 shadow-md">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#00d2b5] text-slate-950 text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">
                      Enterprise Polling
                    </span>
                    <h5 className="text-base font-normal tracking-tight text-white mb-2">
                      Ingin Mengukur Isu Publik untuk Wilayah Anda?
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      Gunakan infrastruktur survei digital berakurasi tinggi dengan ribuan enumerator GPS InsightPoll.
                    </p>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#00d2b5] hover:bg-[#00be9f] py-2.5 text-xs font-bold text-slate-950 transition"
                    >
                      <span>Jadwalkan Survei</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
