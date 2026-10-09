"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Tag,
  ArrowLeft,
  Share2,
  Sparkles,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Clock,
  Eye,
} from "lucide-react";
import { formatDateTime, formatTimeAgo } from "@/data/dateUtils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TagItem {
  id: string;
  name: string;
  slug: string;
}

interface PostDetail {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  content: string;
  category: string;
  coverImage?: string;
  views?: number;
  tags?: TagItem[];
  createdAt: string;
  author?: {
    name?: string;
    email?: string;
  };
}

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [resolvedSlug, setResolvedSlug] = useState<string>("");
  const [post, setPost] = useState<PostDetail | null>(null);
  const [suggestedPosts, setSuggestedPosts] = useState<PostDetail[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    params.then((p) => setResolvedSlug(p.slug));
  }, [params]);

  useEffect(() => {
    if (!resolvedSlug) return;

    const fetchPostAndSuggestions = async () => {
      try {
        setIsLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${apiUrl}/posts?status=PUBLISHED`);
        if (!res.ok) throw new Error("Gagal memuat artikel");
        const json = await res.json();
        const allPosts: PostDetail[] = json.data || [];

        const found = allPosts.find((item) => item.slug === resolvedSlug);

        if (found) {
          setPost(found);
          // Berita yang disarankan: kecualikan artikel yang sedang dibaca saat ini
          const others = allPosts.filter((item) => item.slug !== resolvedSlug);
          setSuggestedPosts(others.slice(0, 5));

          // Catat view pembaca ke backend (cegah spam dengan sessionStorage)
          const viewedKey = `viewed_post_${found.id}`;
          if (typeof window !== "undefined" && !sessionStorage.getItem(viewedKey)) {
            fetch(`${apiUrl}/posts/${found.id}/view`, { method: "POST" })
              .then((viewRes) => {
                if (viewRes.ok) {
                  sessionStorage.setItem(viewedKey, "true");
                  setPost((prev) => (prev ? { ...prev, views: (prev.views || 0) + 1 } : null));
                }
              })
              .catch(() => {});
          }
        } else {
          setErrorMsg("Artikel atau opini riset tidak ditemukan.");
        }
      } catch (err) {
        setErrorMsg((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostAndSuggestions();
  }, [resolvedSlug]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 flex flex-col font-sans selection:bg-[#00d2b5]/30">
      <Navbar />

      {/* Main Container dengan ukuran layar lebih lebar (max-w-7xl) */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-6">
          <Link
            href="/#insight"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-900 transition group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Opini Riset &amp; Beranda</span>
          </Link>
        </div>

        {isLoading ? (
          <div className="py-28 text-center text-slate-400 text-sm">
            <div className="inline-block w-8 h-8 border-2 border-slate-300 border-t-slate-800 rounded-full animate-spin mb-4" />
            <p>Memuat rilis riset dan artikel analisis...</p>
          </div>
        ) : errorMsg || !post ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-xs max-w-xl mx-auto my-12">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Artikel Tidak Ditemukan</h2>
            <p className="text-sm text-slate-500 mb-6">{errorMsg || "Artikel yang Anda tuju tidak tersedia."}</p>
            <Link
              href="/#insight"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
            >
              Lihat Opini Riset Lainnya
            </Link>
          </div>
        ) : (
          /* Grid 2 Kolom: Kolom Utama Artikel (Lebar) + Kolom Sidebar Berita Disarankan */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Kolom Kiri: Detail Artikel Utama (Span 8 dari 12) */}
            <article className="lg:col-span-8 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
              {/* Header Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
                  <Tag className="w-3.5 h-3.5 text-teal-600" />
                  {post.category}
                </span>

                <span
                  className="text-xs text-slate-500 font-mono flex items-center gap-1.5"
                  title="Waktu Publikasi"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  <span>{formatDateTime(post.createdAt)}</span>
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-medium text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                  <Clock className="w-3 h-3" />
                  <span>{formatTimeAgo(post.createdAt)}</span>
                </span>

                {post.author?.name && (
                  <span className="text-xs text-slate-500 font-medium">
                    Oleh: <strong className="text-slate-700">{post.author.name}</strong>
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.25] mb-6">
                {post.title}
              </h1>

              {/* Cover Image Display */}
              {post.coverImage && (
                <div className="mb-8 rounded-2xl overflow-hidden border border-slate-100 max-h-[520px] bg-slate-100 shadow-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      post.coverImage.startsWith("http")
                        ? post.coverImage
                        : `${apiUrl}${post.coverImage}`
                    }
                    alt={post.title}
                    className="w-full h-full object-cover max-h-[520px]"
                  />
                </div>
              )}

              {/* Summary Highlight Box */}
              {post.summary && (
                <div className="p-5 rounded-2xl bg-slate-50/80 border-l-4 border-[#00d2b5] text-slate-700 text-sm sm:text-base leading-relaxed mb-8 italic">
                  &ldquo;{post.summary}&rdquo;
                </div>
              )}

              {/* Isi Konten Lengkap (Format HTML dari Rich Text Editor) */}
              <div
                className="article-content prose prose-slate max-w-none text-slate-800 leading-relaxed text-sm sm:text-base space-y-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags Section */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-3.5 h-3.5 text-teal-600" />
                    <span className="text-xs font-semibold text-slate-700">Topik &amp; Tag Terkait:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t.id}
                        className="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-100 hover:bg-teal-50 hover:text-teal-800 hover:border-teal-300 border border-slate-200/80 px-3 py-1 rounded-xl transition cursor-pointer"
                      >
                        #{t.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Section Artikel */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Dipublikasikan oleh Tim Riset &amp; Intelligence InsightPoll.id
                </span>
                <Link
                  href="/#insight"
                  className="text-xs font-semibold text-teal-700 hover:text-teal-900 transition flex items-center gap-1"
                >
                  <span>Eksplorasi Opini Lain</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>

            {/* Kolom Kanan (Sidebar Berita Disarankan / Span 4 dari 12) */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Box Berita Disarankan */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#00d2b5]" />
                    <h2 className="text-base font-bold text-slate-900 tracking-tight">
                      Berita Disarankan
                    </h2>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 font-mono">
                    Terkait
                  </span>
                </div>

                {suggestedPosts.length === 0 ? (
                  <p className="text-xs text-slate-400 py-4 text-center">
                    Belum ada rekomendasi artikel lainnya.
                  </p>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {suggestedPosts.map((sug) => (
                      <Link
                        key={sug.id}
                        href={`/insight/${sug.slug}`}
                        className="group py-3.5 first:pt-0 last:pb-0 flex gap-3.5 items-start hover:bg-slate-50/80 p-2 rounded-xl transition"
                      >
                        {/* Thumbnail Kotak */}
                        <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200/70 shrink-0 overflow-hidden relative flex items-center justify-center">
                          {sug.coverImage ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={
                                sug.coverImage.startsWith("http")
                                  ? sug.coverImage
                                  : `${apiUrl}${sug.coverImage}`
                              }
                              alt={sug.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition"
                            />
                          ) : (
                            <Sparkles className="w-4 h-4 text-teal-600" />
                          )}
                        </div>

                        {/* Judul & Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="inline-block text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                              {sug.category}
                            </span>
                            <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-full">
                              {formatTimeAgo(sug.createdAt)}
                            </span>
                          </div>
                          <h3 className="text-xs font-semibold text-slate-900 group-hover:text-teal-700 transition leading-snug line-clamp-2">
                            {sug.title}
                          </h3>
                          <span
                            className="text-[10px] text-slate-400 font-mono mt-1 block"
                            title={formatDateTime(sug.createdAt)}
                          >
                            {formatDateTime(sug.createdAt)}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Call to Action Box / Layanan Riset */}
              <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-[#0a233a] to-teal-950 text-white p-6 shadow-sm border border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-[#00d2b5]/20 border border-[#00d2b5]/40 flex items-center justify-center mb-4">
                  <BookOpen className="w-4 h-4 text-[#00d2b5]" />
                </div>
                <h3 className="text-sm font-bold leading-snug mb-1">
                  Butuh Survei &amp; Spatial Intelligence Kustom?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Konsultasikan kebutuhan riset elektoral, survei kepuasan publik, atau analisis sentimen bersama tim ahli kami.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#00d2b5] hover:text-[#76fee9] transition"
                >
                  <span>Hubungi Tim Analis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
