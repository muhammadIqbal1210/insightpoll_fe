"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles, Clock } from "lucide-react";
import { formatDateTime, formatTimeAgo } from "@/data/dateUtils";

interface PostItem {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  content: string;
  category: string;
  coverImage?: string;
  createdAt: string;
}

export default function InsightsSection() {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPublishedPosts = async () => {
      try {
        setIsLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${apiUrl}/posts?status=PUBLISHED`);
        if (res.ok) {
          const json = await res.json();
          if (Array.isArray(json.data)) {
            setPosts(json.data);
          }
        }
      } catch (err) {
        console.error("Gagal memuat berita/opini riset:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPublishedPosts();
  }, []);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Pembagian data asli murni dari database:
  // Kartu Utama (Index 0)
  const mainFeature = posts.length > 0 ? posts[0] : null;
  // 2 Kartu Sub-Fitur di bawahnya (Index 1 & 2)
  const subFeatures = posts.slice(1, 3);
  // Kolom Informasi Terkini di kanan (Index 3 ke atas)
  const sideArticles = posts.slice(3, 9);

  const cleanSnippet = (post: PostItem) => {
    if (post.summary && post.summary.trim()) return post.summary;
    return post.content.replace(/<[^>]*>?/gm, "").substring(0, 160) + "...";
  };

  return (
    <section id="insight" className="py-20 md:py-28 bg-[#fafcff] relative overflow-hidden border-b border-[#ded5f8]/70">
      {/* Background Vertical Column Lines */}
      <div className="absolute inset-0 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 pointer-events-none -z-0">
        <div className="grid grid-cols-6 h-full w-full">
          <div className="border-r border-[#e5ddfc]/35 h-full" />
          <div className="border-r border-[#e5ddfc]/35 h-full" />
          <div className="border-r border-[#e5ddfc]/35 h-full" />
          <div className="border-r border-[#e5ddfc]/35 h-full" />
          <div className="border-r border-[#e5ddfc]/35 h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.12]">
            Informasi &amp; Opini Riset Terbaru
          </h2>
          <div className="w-16 h-1 bg-[#00d2b5] mx-auto my-3 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.6]">
            Ikuti temuan riset, analisis elektoral, dan rilis kebijakan strategis dari tim analis data serta konsultan InsightPoll.
          </p>
        </div>

        {/* Tetap Pertahankan Layout Asli 2 Kolom (Kiri Span 7, Kanan Span 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Span 7): 1 Big Main Card + 2 Horizontal Cards underneath */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Big Feature Hero Card */}
            {mainFeature ? (
              <div className="group relative rounded-3xl overflow-hidden border border-[#ded5f8] shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-950 flex flex-col justify-end min-h-[380px] sm:min-h-[420px]">
                {mainFeature.coverImage ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        mainFeature.coverImage.startsWith("http")
                          ? mainFeature.coverImage
                          : `${apiUrl}${mainFeature.coverImage}`
                      }
                      alt={mainFeature.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a233a] via-[#113a52] to-[#0d5959] opacity-90 group-hover:scale-105 transition-transform duration-700" />
                )}

                <div className="absolute inset-0 bg-grid-light opacity-10 pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#00d2b5]/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end text-white">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="rounded-full bg-[#00d2b5] text-slate-950 px-3 py-1 text-xs font-semibold shadow-xs">
                      {mainFeature.category || "Rilis Riset"}
                    </span>
                    <span
                      className="text-xs text-slate-300 font-mono flex items-center gap-1.5"
                      title={formatDateTime(mainFeature.createdAt)}
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#00d2b5]" />
                      <span>{formatDateTime(mainFeature.createdAt)}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-xs text-[#5bfbe4] px-2.5 py-0.5 text-[11px] font-medium border border-white/10">
                      <Clock className="w-3 h-3" />
                      <span>{formatTimeAgo(mainFeature.createdAt)}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white leading-snug mb-2 group-hover:text-[#00d2b5] transition-colors">
                    {mainFeature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-2 mb-4">
                    {cleanSnippet(mainFeature)}
                  </p>

                  <div>
                    <Link
                      href={`/insight/${mainFeature.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00d2b5] hover:text-[#56fde6] transition-colors group/link"
                    >
                      <span>Baca Artikel Riset</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              /* Placeholder jika belum ada artikel utama */
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center min-h-[380px] sm:min-h-[420px] flex flex-col items-center justify-center">
                <span className="text-sm font-semibold text-slate-700">Belum ada rilis artikel utama</span>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  Tambahkan artikel melalui menu Blog di dashboard untuk menampilkan headline di sini.
                </p>
              </div>
            )}

            {/* 2 Sub Feature Cards Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {subFeatures.length > 0 ? (
                subFeatures.map((sub) => (
                  <div
                    key={sub.id}
                    className="group rounded-3xl overflow-hidden border border-[#ded5f8] bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative h-44 bg-gradient-to-br from-[#103048] to-[#1c6463] p-5 flex flex-col justify-end overflow-hidden">
                      {sub.coverImage ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={
                              sub.coverImage.startsWith("http")
                                ? sub.coverImage
                                : `${apiUrl}${sub.coverImage}`
                            }
                            alt={sub.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                        </>
                      ) : null}
                      <div className="relative z-10 flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-[#00d2b5] text-slate-950 px-2.5 py-0.5 text-[11px] font-semibold shadow-xs">
                          {sub.category || "Opini Riset"}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="text-xs text-slate-400 font-mono mb-2 flex flex-wrap items-center gap-2">
                          <span className="flex items-center gap-1" title={formatDateTime(sub.createdAt)}>
                            <Calendar className="w-3 h-3 text-[#00d2b5]" />
                            <span>{formatDateTime(sub.createdAt)}</span>
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                            <Clock className="w-2.5 h-2.5" />
                            <span>{formatTimeAgo(sub.createdAt)}</span>
                          </span>
                        </div>

                        <h4 className="text-base font-semibold text-slate-900 group-hover:text-[#00d2b5] transition-colors leading-snug mb-2 line-clamp-2">
                          {sub.title}
                        </h4>

                        <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3 mb-4">
                          {cleanSnippet(sub)}
                        </p>
                      </div>

                      <div>
                        <Link
                          href={`/insight/${sub.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d2b5] hover:text-teal-700 transition-colors group/link"
                        >
                          <span>Baca Selengkapnya</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                /* Placeholder 2 kartu jika belum ada artikel ke-2 & ke-3 */
                <>
                  <div className="rounded-3xl border border-dashed border-slate-200 bg-white/60 p-6 text-center flex flex-col items-center justify-center min-h-[220px]">
                    <span className="text-xs font-medium text-slate-500">Artikel Sub-Fitur #1</span>
                    <span className="text-[11px] text-slate-400 mt-1">Belum diterbitkan</span>
                  </div>
                  <div className="rounded-3xl border border-dashed border-slate-200 bg-white/60 p-6 text-center flex flex-col items-center justify-center min-h-[220px]">
                    <span className="text-xs font-medium text-slate-500">Artikel Sub-Fitur #2</span>
                    <span className="text-[11px] text-slate-400 mt-1">Belum diterbitkan</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column (Span 5): "Informasi Terkini" List + "Lihat semua berita" */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[#ded5f8] bg-white p-6 sm:p-7 shadow-sm">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <h3 className="text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Informasi Terkini</span>
                  <span className="w-2 h-2 rounded-full bg-[#00d2b5] animate-pulse" />
                </h3>
              </div>

              {/* List of side articles */}
              {sideArticles.length > 0 ? (
                <div className="divide-y divide-slate-100">
                  {sideArticles.map((art) => (
                    <Link
                      key={art.id}
                      href={`/insight/${art.slug}`}
                      className="group py-4 first:pt-0 last:pb-4 flex gap-4 items-start hover:bg-slate-50/70 p-2.5 rounded-2xl transition-all"
                    >
                      <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-xl bg-gradient-to-br from-teal-800 to-slate-900 shrink-0 overflow-hidden relative flex items-center justify-center border border-slate-100">
                        {art.coverImage ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={
                              art.coverImage.startsWith("http")
                                ? art.coverImage
                                : `${apiUrl}${art.coverImage}`
                            }
                            alt={art.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Sparkles className="w-5 h-5 text-[#00d2b5]/70" />
                        )}
                      </div>

                      <div className="flex flex-col justify-between flex-grow min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                          <span className="rounded-full bg-[#c1f1eb] text-slate-900 px-2 py-0.5 text-[10px] font-semibold">
                            {art.category || "Riset"}
                          </span>
                          <span className="text-[10px] font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Clock className="w-2.5 h-2.5" />
                            <span>{formatTimeAgo(art.createdAt)}</span>
                          </span>
                        </div>

                        <h5 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#00d2b5] transition-colors leading-snug line-clamp-2">
                          {art.title}
                        </h5>

                        <div className="text-[11px] text-slate-400 font-mono mt-1.5 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#00d2b5]" />
                          <span>{formatDateTime(art.createdAt)}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center text-xs text-slate-400">
                  Belum ada artikel tambahan untuk daftar informasi terkini.
                </div>
              )}
            </div>

            {/* Bottom Button */}
            <div className="pt-6 border-t border-slate-100 flex justify-end">
              <Link
                href="/insight"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 hover:bg-[#00d2b5] hover:text-slate-950 text-white px-7 py-3 text-sm font-medium transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Lihat semua berita &amp; riset</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
