"use client";

import React, { useState, useRef } from "react";
import {
  X,
  Upload,
  Send,
  AlertCircle,
  CheckCircle2,
  Trash2,
} from "lucide-react";
import RichTextEditor from "./RichTextEditor";

interface AddBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddBlogModal({ isOpen, onClose, onSuccess }: AddBlogModalProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Berita Riset");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [status, setStatus] = useState("PUBLISHED");

  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Handle Upload File Gambar Cover
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const token = localStorage.getItem("insightpoll_token");
    if (!token) {
      setErrorMsg("Sesi login berakhir. Silakan login kembali.");
      return;
    }

    try {
      setIsUploading(true);
      setErrorMsg("");

      const formData = new FormData();
      formData.append("file", file);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/posts/upload-cover`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Gagal mengunggah file cover.");
      }

      setCoverImage(json.fileUrl);
    } catch (err) {
      setErrorMsg((err as Error).message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveCover = () => {
    setCoverImage("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    const token = localStorage.getItem("insightpoll_token");
    if (!token) {
      setErrorMsg("Sesi login berakhir. Silakan login kembali.");
      return;
    }

    // Bersihkan tag HTML kosong sebelum validasi
    const strippedContent = content.replace(/<[^>]*>?/gm, "").trim();

    if (!title.trim() || !strippedContent) {
      setErrorMsg("Judul dan isi konten artikel wajib diisi.");
      return;
    }

    try {
      setIsLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          category,
          summary,
          content,
          coverImage,
          status,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || "Gagal menerbitkan artikel");
      }

      setSuccessMsg("Berita/artikel berhasil diterbitkan!");
      setTimeout(() => {
        setTitle("");
        setSummary("");
        setContent("");
        setCoverImage("");
        onSuccess();
        onClose();
      }, 800);
    } catch (err) {
      setErrorMsg((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header Modal */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Tambah Berita / Artikel Baru</h2>
            <p className="text-xs text-slate-500">
              Publikasikan hasil riset, opini publik, atau berita survei terkini
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-rose-700 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-700 text-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Judul Artikel / Berita *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Contoh: Survei Persepsi Publik Terhadap Kebijakan Subsidi Energi 2026"
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400/20 focus:border-slate-500 transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Kategori</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400/20 focus:border-slate-500 transition bg-white"
              >
                <option value="Berita Riset">Berita Riset</option>
                <option value="Survei Politik">Survei Politik</option>
                <option value="Kebijakan Publik">Kebijakan Publik</option>
                <option value="Spatial Intelligence">Spatial Intelligence</option>
                <option value="Sentimen AI">Sentimen AI</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Status Publikasi</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400/20 focus:border-slate-500 transition bg-white"
              >
                <option value="PUBLISHED">Published (Langsung Tayang)</option>
                <option value="DRAFT">Draft</option>
              </select>
            </div>
          </div>

          {/* UPLOAD FILE COVER (IMAGE) */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Cover Gambar Berita (Upload File)
            </label>

            {coverImage ? (
              <div className="relative rounded-xl overflow-hidden border border-slate-200 max-h-48 group bg-slate-50 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${apiUrl}${coverImage}`}
                  alt="Cover Preview"
                  className="w-full h-44 object-cover"
                />
                <button
                  type="button"
                  onClick={handleRemoveCover}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-rose-600 text-white shadow-md hover:bg-rose-700 transition"
                  title="Hapus Cover"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed border-slate-200 hover:border-slate-400 hover:bg-slate-50/50 rounded-xl p-5 text-center cursor-pointer transition ${isUploading ? "opacity-50 pointer-events-none" : ""
                  }`}
              >
                <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                <p className="text-xs font-medium text-slate-700">
                  {isUploading ? "Mengunggah gambar..." : "Klik untuk upload gambar cover"}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">PNG, JPG, WEBP atau GIF (Maks. 5MB)</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png, image/jpeg, image/webp, image/gif"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            )}
          </div>

          {/* Summary */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Ringkasan Singkat (Summary)</label>
            <textarea
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Ringkasan poin utama artikel untuk preview card..."
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400/20 focus:border-slate-500 transition resize-none"
            />
          </div>

          {/* RICH TEXT EDITOR KONTEN LENGKAP */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Konten Lengkap Berita (Text Editor) *
            </label>
            <RichTextEditor
              value={content}
              onChange={(val) => setContent(val)}
              placeholder="Tuliskan isi berita, analisis metodologi survei, data spasial, temuan statistik dan kesimpulan..."
            />
          </div>

          {/* Footer Actions */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading || isUploading}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isLoading || isUploading}
              className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.99] rounded-xl shadow-xs transition disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isLoading ? "Menyimpan..." : "Publikasikan"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
