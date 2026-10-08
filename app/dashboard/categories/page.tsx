"use client";

import React, { useState, useEffect } from "react";
import {
  FolderTree,
  FolderPlus,
  Shield,
  Edit,
  Trash2,
  FileText,
} from "lucide-react";
import AddCategoryModal from "@/components/AddCategoryModal";
import EditCategoryModal from "@/components/EditCategoryModal";
import Pagination from "@/components/Pagination";
import { formatDateTime } from "@/data/dateUtils";

interface UserProfile {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
}

interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  createdAt: string;
  _count?: {
    posts: number;
  };
}

export default function CategoriesManagementPage() {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;

  // Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);

  const fetchCategories = async (page = currentPage) => {
    try {
      setIsFetching(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/categories?page=${page}&limit=${itemsPerPage}`);
      if (res.ok) {
        const json = await res.json();
        setCategories(json.data || []);
        if (json.pagination) {
          setCurrentPage(json.pagination.page);
          setTotalPages(json.pagination.totalPages);
          setTotalItems(json.pagination.total);
        } else {
          setTotalItems((json.data || []).length);
        }
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
    } finally {
      setIsFetching(false);
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
    fetchCategories();
  }, []);

  const handleDeleteCategory = async (id: string, name: string) => {
    if (
      !confirm(
        `Apakah Anda yakin ingin menghapus kategori "${name}"? Artikel yang menggunakan kategori ini akan di-set tanpa kategori.`
      )
    ) {
      return;
    }

    const token = localStorage.getItem("insightpoll_token");
    if (!token) return;

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/categories/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const json = await res.json();
      if (!res.ok) {
        alert(json.message || "Gagal menghapus kategori");
        return;
      }
      fetchCategories();
    } catch (err) {
      console.error("Gagal menghapus kategori:", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Manajemen Kategori Riset &amp; Berita
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Kelola taksonomi kategori artikel berita, survei elektabilitas, dan opini publik.
          </p>
        </div>

        {currentUser?.role === "ADMIN" && (
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.99] rounded-xl shadow-xs transition"
          >
            <FolderPlus className="w-4 h-4" />
            <span>Tambah Kategori Baru</span>
          </button>
        )}
      </div>

      {/* Konten Halaman */}
      {isFetching ? (
        <div className="py-20 text-center text-slate-400 text-sm">
          Memuat daftar kategori...
        </div>
      ) : categories.length === 0 ? (
        <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-12 text-center">
          <FolderTree className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800">Belum ada kategori</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            {currentUser?.role === "ADMIN"
              ? "Tambahkan kategori perdana untuk mengelompokkan artikel dan publikasi riset."
              : "Belum ada kategori riset yang ditambahkan oleh Administrator."}
          </p>
          {currentUser?.role === "ADMIN" && (
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition"
            >
              <FolderPlus className="w-4 h-4" />
              <span>Tambah Kategori Pertama</span>
            </button>
          )}
        </div>
      ) : (
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-500 font-semibold">
                  <th className="py-3.5 px-5">Nama Kategori</th>
                  <th className="py-3.5 px-5">Slug</th>
                  <th className="py-3.5 px-5">Deskripsi</th>
                  <th className="py-3.5 px-5">Jumlah Artikel</th>
                  <th className="py-3.5 px-5">Tanggal Dibuat</th>
                  {currentUser?.role === "ADMIN" && (
                    <th className="py-3.5 px-5 text-right">Aksi</th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-slate-50/50 transition">
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200/60 flex items-center justify-center font-bold text-teal-700 text-xs">
                          <FolderTree className="w-4 h-4 text-teal-600" />
                        </div>
                        <span className="font-semibold text-slate-900">
                          {cat.name}
                        </span>
                      </div>
                    </td>

                    <td className="py-4 px-5">
                      <span className="font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md text-[11px]">
                        /{cat.slug}
                      </span>
                    </td>

                    <td className="py-4 px-5 max-w-xs truncate text-slate-500">
                      {cat.description || <span className="italic text-slate-400">Tidak ada deskripsi</span>}
                    </td>

                    <td className="py-4 px-5">
                      <span className="font-semibold text-slate-800">
                        {cat._count?.posts || 0}
                      </span>
                      <span className="text-slate-400 text-[11px] ml-1">artikel</span>
                    </td>

                    <td className="py-4 px-5 text-slate-500 font-mono text-[11px]">
                      {formatDateTime(cat.createdAt)}
                    </td>

                    {currentUser?.role === "ADMIN" && (
                      <td className="py-4 px-5 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => {
                              setSelectedCategory(cat);
                              setIsEditModalOpen(true);
                            }}
                            className="p-1.5 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition"
                            title="Edit Kategori"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteCategory(cat.id, cat.name)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                            title="Hapus Kategori"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => fetchCategories(page)}
          />
        </div>
      )}

      {/* Modal Tambah Kategori */}
      <AddCategoryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={fetchCategories}
      />

      {/* Modal Edit Kategori */}
      <EditCategoryModal
        isOpen={isEditModalOpen}
        category={selectedCategory}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedCategory(null);
        }}
        onSuccess={fetchCategories}
      />
    </div>
  );
}
