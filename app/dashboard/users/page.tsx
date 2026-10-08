"use client";

import React, { useState, useEffect } from "react";
import {
  UserPlus,
  Shield,
  User,
  Edit,
  Trash2,
  AlertCircle,
} from "lucide-react";
import AddUserModal from "@/components/AddUserModal";
import EditUserModal from "@/components/EditUserModal";
import Pagination from "@/components/Pagination";
import { formatDateTime } from "@/data/dateUtils";

interface UserProfile {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
}

interface UserItem {
  id: string;
  name?: string;
  email: string;
  role: string;
  createdAt: string;
  _count?: {
    posts: number;
  };
}

export default function UsersManagementPage() {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [userList, setUserList] = useState<UserItem[]>([]);
  const [isFetchingUsers, setIsFetchingUsers] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;

  // Modal State
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [selectedUserForEdit, setSelectedUserForEdit] = useState<UserItem | null>(null);

  const fetchUsers = async (page = currentPage) => {
    const token = localStorage.getItem("insightpoll_token");
    if (!token) return;

    try {
      setIsFetchingUsers(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/users?page=${page}&limit=${itemsPerPage}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const json = await res.json();
        setUserList(json.data || []);
        if (json.pagination) {
          setCurrentPage(json.pagination.page);
          setTotalPages(json.pagination.totalPages);
          setTotalItems(json.pagination.total);
        } else {
          setTotalItems((json.data || []).length);
        }
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setIsFetchingUsers(false);
    }
  };

  useEffect(() => {
    const userStr = localStorage.getItem("insightpoll_user");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setCurrentUser(user);
        if (user.role === "ADMIN") {
          fetchUsers();
        } else {
          setIsFetchingUsers(false);
        }
      } catch {
        setIsFetchingUsers(false);
      }
    } else {
      setIsFetchingUsers(false);
    }
  }, []);

  const handleDeleteUser = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus akun user ini?")) return;
    const token = localStorage.getItem("insightpoll_token");
    if (!token) return;

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const json = await res.json();
      if (!res.ok) {
        alert(json.message || "Gagal menghapus user");
        return;
      }
      fetchUsers();
    } catch (err) {
      console.error("Gagal menghapus user:", err);
    }
  };

  // Jika role bukan ADMIN, tolak akses dan tampilkan pesan pembatasan hak akses
  if (currentUser && currentUser.role !== "ADMIN") {
    return (
      <div className="bg-white rounded-2xl border border-red-100 p-8 text-center max-w-xl mx-auto my-12 shadow-sm">
        <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-100">
          <AlertCircle className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Akses Dibatasi</h2>
        <p className="text-sm text-slate-500 mb-6">
          Halaman Manajemen Pengguna hanya dapat diakses oleh Administrator sistem.
        </p>
        <a
          href="/dashboard"
          className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
        >
          Kembali ke Dashboard
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Manajemen Pengguna &amp; Hak Akses
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Kelola akun Administrator dan tambahkan Editor untuk penulisan artikel riset.
          </p>
        </div>

        {currentUser?.role === "ADMIN" && (
          <button
            onClick={() => setIsUserModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.99] rounded-xl shadow-xs transition"
          >
            <UserPlus className="w-4 h-4" />
            <span>Tambah User Editor</span>
          </button>
        )}
      </div>

      {/* Konten Halaman */}
      {currentUser?.role !== "ADMIN" ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-xs">
          <Shield className="w-10 h-10 text-amber-500 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">Akses Terbatas</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Hanya akun dengan role <strong>ADMIN</strong> yang memiliki hak akses untuk mengelola akun pengguna dan editor.
          </p>
        </div>
      ) : isFetchingUsers ? (
        <div className="py-20 text-center text-slate-400 text-sm">
          Memuat daftar pengguna sistem...
        </div>
      ) : (
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-500 font-semibold">
                  <th className="py-3.5 px-5">Nama Lengkap</th>
                  <th className="py-3.5 px-5">Email</th>
                  <th className="py-3.5 px-5">Role / Akses</th>
                  <th className="py-3.5 px-5">Jumlah Artikel</th>
                  <th className="py-3.5 px-5">Tanggal Dibuat</th>
                  <th className="py-3.5 px-5 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {userList.map((usr) => (
                  <tr key={usr.id} className="hover:bg-slate-50/50 transition">
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">
                          {usr.name ? usr.name.charAt(0).toUpperCase() : <User className="w-4 h-4" />}
                        </div>
                        <div>
                          <span className="font-semibold text-slate-900 block">{usr.name || "-"}</span>
                          {usr.id === currentUser?.id && (
                            <span className="text-[10px] text-teal-600 font-medium">(Akun Anda)</span>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-5 font-mono text-slate-600">{usr.email}</td>

                    <td className="py-4 px-5">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          usr.role === "ADMIN"
                            ? "bg-purple-50 text-purple-700 border border-purple-200/60"
                            : "bg-teal-50 text-teal-700 border border-teal-200/60"
                        }`}
                      >
                        <Shield className="w-3 h-3" />
                        <span>{usr.role}</span>
                      </span>
                    </td>

                    <td className="py-4 px-5">
                      <span className="font-semibold text-slate-800">
                        {usr._count?.posts || 0}
                      </span>
                      <span className="text-slate-400 text-[11px] ml-1">artikel</span>
                    </td>

                    <td className="py-4 px-5 text-slate-500 font-mono text-[11px]">
                      {formatDateTime(usr.createdAt)}
                    </td>

                    <td className="py-4 px-5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => {
                            setSelectedUserForEdit(usr);
                            setIsEditUserModalOpen(true);
                          }}
                          className="p-1.5 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition"
                          title="Edit User"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        {usr.id !== currentUser?.id && (
                          <button
                            onClick={() => handleDeleteUser(usr.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                            title="Hapus User"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
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
            onPageChange={(page) => fetchUsers(page)}
          />
        </div>
      )}

      {/* Modal Tambah User */}
      <AddUserModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        onSuccess={fetchUsers}
      />

      {/* Modal Edit User */}
      <EditUserModal
        isOpen={isEditUserModalOpen}
        user={selectedUserForEdit}
        onClose={() => {
          setIsEditUserModalOpen(false);
          setSelectedUserForEdit(null);
        }}
        onSuccess={fetchUsers}
      />
    </div>
  );
}
