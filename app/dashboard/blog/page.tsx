"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  Plus,
  Tag,
  Calendar,
  Trash2,
  Edit,
  Eye,
  User,
} from "lucide-react";
import AddBlogModal from "@/components/AddBlogModal";
import EditBlogModal from "@/components/EditBlogModal";
import Pagination from "@/components/Pagination";
import { formatDateTime } from "@/data/dateUtils";

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
  tags?: Array<{ id: string; name: string; slug: string }>;
  createdAt: string;
  author?: {
    name?: string;
    email?: string;
  };
}

export default function BlogManagementPage() {
  const [currentUser, setCurrentUser] = useState<{ id?: string; name?: string; role?: string } | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isFetchingPosts, setIsFetchingPosts] = useState(true);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 9;

  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const fetchPosts = async (user?: { id?: string; role?: string } | null, page = currentPage) => {
    try {
      setIsFetchingPosts(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      
      // Jika peran adalah EDITOR, hanya minta artikel yang dibuat oleh dirinya sendiri
      let url = `${apiUrl}/posts?page=${page}&limit=${itemsPerPage}`;
      const activeUser = user !== undefined ? user : currentUser;
      if (activeUser?.role === "EDITOR" && activeUser?.id) {
        url += `&authorId=${encodeURIComponent(activeUser.id)}`;
      }

      const res = await fetch(url);
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
      console.error("Error fetching posts:", err);
    } finally {
      setIsFetchingPosts(false);
    }
  };

  useEffect(() => {
    let parsedUser = null;
    const userStr = localStorage.getItem("insightpoll_user");
    if (userStr) {
      try {
        parsedUser = JSON.parse(userStr);
        setCurrentUser(parsedUser);
      } catch {
        // ignore
      }
    }
    fetchPosts(parsedUser);
  }, []);

  const handleDeletePost = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus artikel ini?")) return;
    const token = localStorage.getItem("insightpoll_token");
    if (!token) return;

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        fetchPosts();
      } else {
        const errJson = await res.json();
        alert(errJson.message || "Gagal menghapus artikel");
      }
    } catch (err) {
      console.error("Gagal menghapus post:", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {currentUser?.role === "EDITOR"
              ? "Artikel & Publikasi Saya"
              : "Manajemen Berita & Publikasi Riset"}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            {currentUser?.role === "EDITOR"
              ? "Kelola tulisan berita, analisis, dan draf artikel riset yang Anda buat."
              : "Kelola berita, press release survei politik, dan rilis artikel dari seluruh kontributor."}
          </p>
        </div>

        <button
          onClick={() => setIsBlogModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.99] rounded-xl shadow-xs transition"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Berita / Artikel</span>
        </button>
      </div>

      {/* Konten Halaman */}
      {isFetchingPosts ? (
        <div className="py-20 text-center text-slate-400 text-sm">
          Memuat daftar artikel...
        </div>
      ) : posts.length === 0 ? (
        <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-12 text-center">
          <FileText className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800">
            {currentUser?.role === "EDITOR"
              ? "Anda belum membuat artikel"
              : "Belum ada berita atau artikel"}
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            {currentUser?.role === "EDITOR"
              ? "Mulai tulis artikel analisis kebijakan atau rilis opini publik pertama Anda."
              : "Mulai publikasikan temuan riset opini publik atau rilis survei perdana Anda."}
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
                          : `${process.env.NEXT_PUBLIC_API_URL}${post.coverImage}`
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

                {/* Tags Badges */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {post.tags.slice(0, 3).map((t) => (
                      <span
                        key={t.id}
                        className="text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded-md transition"
                      >
                        #{t.name}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-[10px] text-slate-400 self-center">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Author & Views Info */}
                <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5 truncate">
                    <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-semibold text-[10px] shrink-0">
                      {post.author?.name ? post.author.name.charAt(0).toUpperCase() : <User className="w-3 h-3 text-slate-400" />}
                    </div>
                    <span className="font-medium text-slate-700 truncate">
                      {post.author?.name || post.author?.email?.split("@")[0] || "Penulis"}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-slate-500 shrink-0 font-mono">
                    <Eye className="w-3.5 h-3.5 text-slate-400" />
                    <span>
                      {(post.views || 0).toLocaleString("id-ID")} views
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-[11px]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formatDateTime(post.createdAt)}</span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      setSelectedPost(post);
                      setIsEditModalOpen(true);
                    }}
                    className="p-1.5 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition"
                    title="Edit Artikel"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                    title="Hapus Artikel"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={(page) => fetchPosts(currentUser, page)}
        className="rounded-2xl border border-slate-200/90 bg-white"
      />

      {/* Modal Tambah Berita / Blog */}
      <AddBlogModal
        isOpen={isBlogModalOpen}
        onClose={() => setIsBlogModalOpen(false)}
        onSuccess={fetchPosts}
      />

      {/* Modal Edit Berita / Blog */}
      <EditBlogModal
        isOpen={isEditModalOpen}
        post={selectedPost}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedPost(null);
        }}
        onSuccess={fetchPosts}
      />
    </div>
  );
}
