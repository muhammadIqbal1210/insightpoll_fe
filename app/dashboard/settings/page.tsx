"use client";

import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Shield,
  Lock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Save,
  KeyRound,
} from "lucide-react";
import { formatDateTime } from "@/data/dateUtils";

interface UserProfile {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function SettingsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  // Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Fetch profil saat ini dari backend
  const fetchProfile = async () => {
    const token = localStorage.getItem("insightpoll_token");
    if (!token) return;

    try {
      setIsLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const json = await res.json();
        const user = json.data;
        if (user) {
          setName(user.name || "");
          setEmail(user.email || "");
          setRole(user.role || "");
          setCreatedAt(user.createdAt || "");

          // Update data di local storage agar sinkron dengan navbar
          localStorage.setItem("insightpoll_user", JSON.stringify(user));
        }
      }
    } catch (err) {
      console.error("Gagal memuat profil:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    // Validasi konfirmasi password
    if (newPassword) {
      if (newPassword.length < 6) {
        setErrorMsg("Password baru minimal 6 karakter.");
        return;
      }
      if (newPassword !== confirmPassword) {
        setErrorMsg("Konfirmasi password baru tidak cocok.");
        return;
      }
      if (!currentPassword) {
        setErrorMsg("Harap masukkan password saat ini untuk memverifikasi penggantian password.");
        return;
      }
    }

    const token = localStorage.getItem("insightpoll_token");
    if (!token) {
      setErrorMsg("Sesi login berakhir. Silakan login kembali.");
      return;
    }

    try {
      setIsSaving(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      const payload: {
        name: string;
        email: string;
        currentPassword?: string;
        newPassword?: string;
      } = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
      };

      if (newPassword) {
        payload.currentPassword = currentPassword;
        payload.newPassword = newPassword;
      }

      const res = await fetch(`${apiUrl}/users/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(
          Array.isArray(json.message)
            ? json.message.join(", ")
            : json.message || "Gagal memperbarui profil."
        );
      }

      setSuccessMsg("Data profil Anda berhasil diperbarui!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      // Update data di localStorage & reload header
      localStorage.setItem("insightpoll_user", JSON.stringify(json.data));

      setTimeout(() => {
        setSuccessMsg("");
      }, 4000);
    } catch (err) {
      setErrorMsg((err as Error).message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6 w-full">
      {/* Header Halaman */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Pengaturan Akun &amp; Data Diri
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Kelola informasi nama lengkap, alamat email masuk, serta keamanan kata sandi akun Anda.
        </p>
      </div>

      {isLoading ? (
        <div className="py-24 text-center text-slate-400 text-sm bg-white rounded-2xl border border-slate-200/80">
          Memuat data profil Anda...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {errorMsg && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-700 text-xs shadow-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-700 text-xs shadow-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Grid Layout 2 Kolom untuk Desktop Luas, 1 Kolom untuk Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Kartu 1: Informasi Dasar */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-7 shadow-xs space-y-5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
                  <User className="w-4 h-4 text-teal-600" />
                  <h2 className="text-sm font-bold text-slate-900">Informasi Pribadi &amp; Profil</h2>
                </div>

                <div className="space-y-4">
                  {/* Nama Lengkap */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nama Lengkap Anda"
                        className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition"
                      />
                    </div>
                  </div>

                  {/* Alamat Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Alamat Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@insightpoll.com"
                        className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition"
                      />
                    </div>
                  </div>

                  {/* Role & Tanggal Terdaftar (Read only) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Hak Akses Akun
                      </label>
                      <div className="flex items-center gap-2 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                        <Shield className="w-4 h-4 text-slate-400" />
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            role === "ADMIN"
                              ? "bg-purple-50 text-purple-700 border border-purple-200/60"
                              : "bg-teal-50 text-teal-700 border border-teal-200/60"
                          }`}
                        >
                          {role}
                        </span>
                        <span className="text-[10px] text-slate-400 ml-auto italic">Terkunci</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Tanggal Dibuat
                      </label>
                      <div className="flex items-center gap-2 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 font-mono">
                        <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="truncate">{createdAt ? formatDateTime(createdAt) : "-"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kartu 2: Keamanan & Password */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-7 shadow-xs space-y-5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <KeyRound className="w-4 h-4 text-teal-600" />
                    <h2 className="text-sm font-bold text-slate-900">Ubah Kata Sandi (Password)</h2>
                  </div>
                  <span className="text-[11px] text-slate-400 italic">Opsional</span>
                </div>

                <div className="space-y-4">
                  {/* Password Sekarang */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Password Saat Ini
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="Masukkan password saat ini untuk konfirmasi"
                        className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Password Baru */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Password Baru
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="password"
                          minLength={6}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Minimal 6 karakter"
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition"
                        />
                      </div>
                    </div>

                    {/* Konfirmasi Password Baru */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Ulangi Password Baru
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="password"
                          minLength={6}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Ulangi password baru"
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Baris Tombol Simpan di Bawah Form */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs flex items-center justify-between">
            <span className="text-xs text-slate-400 hidden sm:inline">
              Pastikan data email dan nama Anda sudah sesuai sebelum menyimpan perubahan.
            </span>
            <button
              type="submit"
              disabled={isSaving}
              className="w-full sm:w-auto px-7 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.99] rounded-xl shadow-xs transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSaving ? (
                <span>Menyimpan Perubahan...</span>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan Data Diri</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
