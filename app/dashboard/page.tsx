"use client";

import React, { useState, useEffect } from "react";
import {
  ClipboardList,
  UserCheck,
  MapPin,
  TrendingUp,
  RefreshCw,
} from "lucide-react";

interface MetricItem {
  label: string;
  value: string;
  change: string;
}

interface RecentActivity {
  id: string;
  title: string;
  action: string;
  timestamp: string;
}

interface DashboardData {
  isEditor?: boolean;
  stats: {
    totalSurveys: MetricItem;
    verifiedRespondents: MetricItem;
    spatialCoverage: MetricItem;
    publicSentiment: MetricItem;
  };
  weeklyOverview?: Array<{
    day: string;
    date?: string;
    dateFormatted?: string;
    value: number;
    respondents?: string;
    views?: number;
    color?: string;
  }>;
  recentActivities: RecentActivity[];
}

export default function DashboardOverviewPage() {
  const [currentUser, setCurrentUser] = useState<{ id?: string; name?: string; role?: string } | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null);

  const fetchDashboardData = async () => {
    const token = localStorage.getItem("insightpoll_token");
    if (!token) return;

    try {
      setIsLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/dashboard/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const json = await res.json();
        setDashboardData(json.data);
      }
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const userStr = localStorage.getItem("insightpoll_user");
    if (userStr) {
      try {
        setCurrentUser(JSON.parse(userStr));
      } catch {
        // ignore
      }
    }
    fetchDashboardData();
  }, []);

  const stats = dashboardData?.stats || {
    totalSurveys: { label: "Total Survei Berjalan", value: "0", change: "-" },
    verifiedRespondents: { label: "Responden Terverifikasi", value: "0", change: "-" },
    spatialCoverage: { label: "Cakupan Wilayah", value: "0%", change: "-" },
    publicSentiment: { label: "Indeks Sentimen Publik", value: "0%", change: "-" },
  };

  const recentActivities = dashboardData?.recentActivities || [];
  const isEditor = dashboardData?.isEditor ?? (currentUser?.role === "EDITOR");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {isEditor
              ? `Workspace Penulis & Analitik Editor`
              : "Executive Polling & Spatial Analytics"}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            {isEditor
              ? "Pantau performa penulisan artikel Anda, status publikasi draf, dan estimasi jangkauan pembaca."
              : "Monitoring data survei, validasi geospasial GIS, dan sentimen publik real-time."}
          </p>
        </div>

        <div>
          <button
            onClick={fetchDashboardData}
            disabled={isLoading}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition disabled:opacity-50 shadow-xs"
            title="Refresh Data"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`}
            />
            <span>Refresh Data</span>
          </button>
        </div>
      </div>

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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                {isEditor ? "Tren Views Artikel Saya" : "Tren Views Seluruh Berita (Semua Penulis)"}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {isEditor
                  ? "Volume kunjungan pembaca terhadap berita yang Anda buat dalam 7 hari terakhir"
                  : "Akumulasi volume pembaca seluruh artikel sistem yang dipublikasikan oleh semua user"}
              </p>
            </div>
          </div>

          {/* Active / Clicked Stat Highlight Card */}
          {(() => {
            const overview = dashboardData?.weeklyOverview || [];
            const selectedItem = activeBarIndex !== null && overview[activeBarIndex]
              ? overview[activeBarIndex]
              : null;

            return (
              <div className="mb-4 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-slate-500">
                  {selectedItem ? (
                    <>
                      Detail Hari: <strong className="text-slate-800 font-semibold">{selectedItem.day}</strong>
                      {selectedItem.date && (
                        <span className="ml-2 font-mono text-[11px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200/60 font-semibold">
                          {selectedItem.date}
                        </span>
                      )}
                    </>
                  ) : (
                    "Klik atau arahkan kursor ke grafik untuk melihat data hari:"
                  )}
                </span>
                <span className="font-mono font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
                  {selectedItem ? selectedItem.respondents || `${selectedItem.views || 0} views` : "Sorot hari apa saja"}
                </span>
              </div>
            );
          })()}

          {/* Chart Canvas with Protected Left Margin for Y-Axis */}
          {(() => {
            const overview = dashboardData?.weeklyOverview || [];
            const rawMaxViews = Math.max(...overview.map((d) => d.views || 0), 10);
            // Bulatkan ke kelipatan 5 atau 10 agar angka sumbu Y terlihat cantik
            const maxViewsScale = rawMaxViews <= 10 ? 10 : Math.ceil(rawMaxViews / 10) * 10;
            const step75 = Math.round(maxViewsScale * 0.75);
            const step50 = Math.round(maxViewsScale * 0.50);
            const step25 = Math.round(maxViewsScale * 0.25);

            return (
              <div className="flex-1 flex flex-col justify-end pt-2 pb-1">
                <div className="relative h-60 w-full pl-11 pr-3">
                  {/* Y-Axis Grid Lines & Values inside the canvas */}
                  <div className="absolute inset-y-0 left-11 right-3 flex flex-col justify-between pointer-events-none">
                    <div className="w-full border-t border-slate-100 relative">
                      <span className="absolute -left-10 -top-2.5 text-[10px] text-slate-400 font-mono w-9 text-right">
                        {maxViewsScale}
                      </span>
                    </div>
                    <div className="w-full border-t border-slate-100 relative">
                      <span className="absolute -left-10 -top-2.5 text-[10px] text-slate-400 font-mono w-9 text-right">
                        {step75}
                      </span>
                    </div>
                    <div className="w-full border-t border-slate-100 relative">
                      <span className="absolute -left-10 -top-2.5 text-[10px] text-slate-400 font-mono w-9 text-right">
                        {step50}
                      </span>
                    </div>
                    <div className="w-full border-t border-slate-100 relative">
                      <span className="absolute -left-10 -top-2.5 text-[10px] text-slate-400 font-mono w-9 text-right">
                        {step25}
                      </span>
                    </div>
                    <div className="w-full border-t border-slate-200 relative">
                      <span className="absolute -left-10 -top-2.5 text-[10px] text-slate-400 font-mono w-9 text-right">
                        0
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Bar Columns */}
                  <div className="relative h-full flex items-end justify-between border-l border-slate-200">
                    {(overview.length > 0 ? overview : [
                      { day: "Min", value: 0, views: 0, respondents: "0 views" },
                      { day: "Sen", value: 0, views: 0, respondents: "0 views" },
                      { day: "Sel", value: 0, views: 0, respondents: "0 views" },
                      { day: "Rab", value: 0, views: 0, respondents: "0 views" },
                      { day: "Kam", value: 0, views: 0, respondents: "0 views" },
                      { day: "Jum", value: 0, views: 0, respondents: "0 views" },
                      { day: "Sab", value: 0, views: 0, respondents: "0 views" },
                    ]).map((bar, idx) => {
                      const isSelected = activeBarIndex === idx;
                      const currentViews = bar.views || 0;
                      const heightPercent = Math.max(6, Math.min(100, Math.round((currentViews / maxViewsScale) * 100)));

                      return (
                        <div
                          key={idx}
                          onClick={() => setActiveBarIndex(isSelected ? null : idx)}
                          onMouseEnter={() => setActiveBarIndex(idx)}
                          className="flex-1 flex flex-col items-center gap-2 group cursor-pointer relative z-10 px-1"
                        >
                          <div className="relative w-full max-w-[36px] bg-slate-50 hover:bg-slate-100/80 rounded-t-lg flex items-end justify-center h-48 transition-colors">
                            <div
                              style={{ height: `${heightPercent}%` }}
                              className={`w-full transition-all duration-300 rounded-t-md ${
                                isSelected
                                  ? "bg-teal-500 ring-2 ring-teal-400/50 shadow-sm"
                                  : isEditor
                                  ? "bg-teal-700/85 group-hover:bg-teal-600"
                                  : "bg-slate-900 group-hover:bg-slate-800"
                              }`}
                            />

                            {/* Floating Tooltip Pill */}
                            <div
                              className={`absolute bottom-full mb-2 z-30 pointer-events-none transition-all duration-200 ${
                                isSelected
                                  ? "opacity-100 scale-100 -translate-y-1"
                                  : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                              }`}
                            >
                              <div className="bg-slate-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg shadow-lg whitespace-nowrap flex items-center gap-1.5 border border-slate-800">
                                <span>{bar.respondents || `${bar.views || 0} views`}</span>
                              </div>
                              {/* Little triangle arrow */}
                              <div className="w-2 h-2 bg-slate-900 rotate-45 mx-auto -mt-1" />
                            </div>
                          </div>

                          <div className="flex flex-col items-center leading-tight">
                            <span
                              className={`text-[11px] font-medium transition-colors ${
                                isSelected ? "text-teal-700 font-bold" : "text-slate-600 group-hover:text-slate-900"
                              }`}
                            >
                              {bar.day}
                            </span>
                            <span
                              className={`text-[9px] font-mono transition-colors ${
                                isSelected ? "text-teal-600 font-semibold" : "text-slate-400 group-hover:text-slate-600"
                              }`}
                            >
                              {bar.dateFormatted || (bar.date ? bar.date.slice(5) : "")}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-900">
                {isEditor ? "Riwayat Aktivitas Artikel Saya" : "Aktivitas Riset & Feed"}
              </h2>
              <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Feed
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {isEditor
                ? "Histori pembuatan, perubahan status draf, dan publikasi artikel Anda"
                : "Log verifikasi responden, analisis GIS, dan pergerakan opini"}
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
    </div>
  );
}
