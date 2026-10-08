"use client";

import React, { useState, useEffect } from "react";
import { Tag, Search, FileText, Info } from "lucide-react";
import Pagination from "@/components/Pagination";

interface TagItem {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  _count?: {
    posts: number;
  };
}

export default function TagsManagementPage() {
  const [tags, setTags] = useState<TagItem[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 15;

  const fetchTags = async (page = 1, search = searchQuery) => {
    try {
      setIsFetching(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: itemsPerPage.toString(),
      });
      if (search.trim()) {
        queryParams.set("search", search.trim());
      }

      const res = await fetch(`${apiUrl}/posts/tags?${queryParams.toString()}`);
      if (res.ok) {
        const json = await res.json();
        setTags(json.data || []);
        if (json.pagination) {
          setCurrentPage(json.pagination.page);
          setTotalPages(json.pagination.totalPages);
          setTotalItems(json.pagination.total);
        } else {
          setTotalItems((json.data || []).length);
        }
      }
    } catch (err) {
      console.error("Error fetching tags:", err);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchTags(1, searchQuery);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchTags(1, searchQuery);
  };

  const handleSearchClear = () => {
    setSearchQuery("");
    setCurrentPage(1);
    fetchTags(1, "");
  };

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
            <Tag className="w-6 h-6 text-slate-700" />
            Daftar Tags Artikel
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Lihat seluruh kata kunci atau label tagar yang tersedia di sistem dan digunakan pada artikel blog.
          </p>
        </div>

        {/* Read-only info pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50/80 border border-blue-200/60 rounded-xl text-blue-700 text-xs font-medium self-start sm:self-auto">
          <Info className="w-4 h-4 text-blue-500 shrink-0" />
          <span>Mode Read-Only (Tag dibuat otomatis saat menulis artikel)</span>
        </div>
      </div>

      {/* Bar Pencarian & Statistik */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
        <form onSubmit={handleSearchSubmit} className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari nama atau slug tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-12 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleSearchClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Hapus
            </button>
          )}
        </form>

        <div className="text-xs text-slate-500 font-medium w-full sm:w-auto text-right">
          Total: <span className="font-semibold text-slate-800">{totalItems}</span> tag terdaftar
        </div>
      </div>

      {/* Konten Daftar Tag */}
      {isFetching ? (
        <div className="py-24 text-center text-slate-400 text-sm">
          Memuat daftar tag...
        </div>
      ) : tags.length === 0 ? (
        <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-12 text-center">
          <Tag className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800">
            {searchQuery ? "Tag tidak ditemukan" : "Belum ada tag yang terdaftar"}
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            {searchQuery
              ? `Tidak ada tag yang sesuai dengan pencarian "${searchQuery}". Coba kata kunci lain.`
              : "Tag akan otomatis dibuat dan terdaftar di sini ketika editor atau admin menambahkan tag pada artikel blog."}
          </p>
          {searchQuery && (
            <button
              onClick={handleSearchClear}
              className="mt-4 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              Reset Pencarian
            </button>
          )}
        </div>
      ) : (
        <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/75 text-slate-500 font-semibold uppercase tracking-wider">
                  <th className="py-3 px-4 w-12 text-center">#</th>
                  <th className="py-3 px-4">Nama Tag</th>
                  <th className="py-3 px-4">Slug URL</th>
                  <th className="py-3 px-4 text-center">Penggunaan di Artikel</th>
                  <th className="py-3 px-4 text-right">Tampilan Tagar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-normal text-slate-700">
                {tags.map((tag, idx) => {
                  const itemNumber = (currentPage - 1) * itemsPerPage + idx + 1;
                  const articleCount = tag._count?.posts || 0;

                  return (
                    <tr
                      key={tag.id}
                      className="hover:bg-slate-50/60 transition-colors group"
                    >
                      <td className="py-3.5 px-4 text-center font-mono text-slate-400">
                        {itemNumber}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                          {tag.name}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-500">
                        {tag.slug}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                          <FileText className="w-3 h-3 text-slate-500" />
                          <span>{articleCount} artikel</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="inline-block px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-[11px] font-medium transition cursor-default">
                          #{tag.name}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-slate-100">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              onPageChange={(page) => fetchTags(page, searchQuery)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
