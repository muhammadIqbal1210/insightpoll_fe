"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Upload,
  Send,
  AlertCircle,
  CheckCircle2,
  Trash2,
  Edit,
  Tag as TagIcon,
} from "lucide-react";
import RichTextEditor from "./RichTextEditor";

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
  tags?: TagItem[];
}

interface EditBlogModalProps {
  isOpen: boolean;
  post: BlogPost | null;
  onClose: () => void;
  onSuccess: () => void;
}

export default function EditBlogModal({
  isOpen,
  post,
  onClose,
  onSuccess,
}: EditBlogModalProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Berita Riset");
  const [availableCategories, setAvailableCategories] = useState<{ id: string; name: string }[]>([]);
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [status, setStatus] = useState("PUBLISHED");

  // State Tags
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [existingTags, setExistingTags] = useState<{ id: string; name: string }[]>([]);

  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Ambil daftar kategori & tags aktif
  useEffect(() => {
    if (isOpen) {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      fetch(`${apiUrl}/categories`)
        .then((res) => res.json())
        .then((json) => {
          if (json.data && json.data.length > 0) {
            setAvailableCategories(json.data);
          }
        })
        .catch((err) => console.error("Error loading categories:", err));

      fetch(`${apiUrl}/posts/tags`)
        .then((res) => res.json())
        .then((json) => {
          if (json.data) {
            setExistingTags(json.data);
          }
        })
        .catch(() => {});
    }
  }, [isOpen]);

  // Isi form dengan data post yang dipilih
  useEffect(() => {
    if (post) {
      setTitle(post.title || "");
      setCategory(post.category || "Berita Riset");
      setSummary(post.summary || "");
      setContent(post.content || "");
      setCoverImage(post.coverImage || "");
      setStatus(post.status || "PUBLISHED");
      setTags((post.tags || []).map((t) => t.name));
      setErrorMsg("");
      setSuccessMsg("");
    }
  }, [post]);

  const handleAddTag = (val?: string) => {
    const rawTag = (val !== undefined ? val : tagInput).trim();
    if (!rawTag) return;
    const cleanTag = rawTag.startsWith("#") ? rawTag.slice(1).trim() : rawTag;
    if (cleanTag && !tags.includes(cleanTag)) {
      setTags([...tags, cleanTag]);
    }
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  if (!isOpen || !post) return null;

  // Handle Upload Gambar Cover Baru
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

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/posts/upload-cover`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Gagal mengunggah file");
      }

      setCoverImage(json.data.url);
    } catch (err) {
      setErrorMsg((err as Error).message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!content.trim() || content === "<p></p>") {
      setErrorMsg("Isi konten artikel riset wajib diisi!");
      return;
    }

    const token = localStorage.getItem("insightpoll_token");
    if (!token) {
      setErrorMsg("Sesi login berakhir. Silakan login kembali.");
      return;
    }

    try {
      setIsLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      const res = await fetch(`${apiUrl}/posts/${post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: title.trim(),
          category,
          summary: summary.trim() || undefined,
          content,
          coverImage: coverImage || undefined,
          status,
          tags,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(
          Array.isArray(json.message)
            ? json.message.join(", ")
            : json.message || "Gagal memperbarui artikel."
        );
      }

      setSuccessMsg("Artikel berita berhasil diperbarui!");
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 600);
    } catch (err) {
      setErrorMsg((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col">
        {/* Header Modal */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Edit className="w-5 h-5 text-teal-600" />
              <h3 className="text-base font-bold text-slate-900">Edit Artikel Riset / Berita</h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Perbarui judul, ringkasan, kategori, atau isi artikel publikasi
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
                {availableCategories.length > 0 ? (
                  availableCategories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))
                ) : (
                  <>
                    <option value="Berita Riset">Berita Riset</option>
                    <option value="Survei Politik">Survei Politik</option>
                    <option value="Kebijakan Publik">Kebijakan Publik</option>
                    <option value="Spatial Intelligence">Spatial Intelligence</option>
                    <option value="Sentimen AI">Sentimen AI</option>
                  </>
                )}
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

          {/* Tags Input (Editor on-the-fly) */}
          <div className="relative">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Topik &amp; Tags Artikel (Opsional)
            </label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <TagIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                  placeholder="Ketik nama tag (contoh: Pilkada, Elektabilitas, Jawa Barat)"
                  className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400/20 focus:border-slate-500 transition"
                />

                {/* Dropdown Suggestions saat Mengetik */}
                {tagInput.trim() !== "" && (() => {
                  const query = tagInput.toLowerCase().replace(/^#/, "");
                  const matches = existingTags.filter(
                    (t) => t.name.toLowerCase().includes(query) && !tags.includes(t.name)
                  );
                  if (matches.length === 0) return null;

                  return (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-30 overflow-hidden py-1">
                      <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border-b border-slate-100">
                        Tag yang sudah tersedia di sistem:
                      </div>
                      {matches.slice(0, 6).map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => handleAddTag(m.name)}
                          className="w-full text-left px-3.5 py-2 text-xs text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition flex items-center justify-between"
                        >
                          <span className="font-medium">#{m.name}</span>
                          <span className="text-[10px] text-slate-400">Pilih</span>
                        </button>
                      ))}
                    </div>
                  );
                })()}
              </div>

              <button
                type="button"
                onClick={() => handleAddTag()}
                className="px-3.5 py-2 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition shadow-2xs"
              >
                + Tambah
              </button>
            </div>

            {/* List Chips Tag yang Dipilih */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-800 bg-teal-50 border border-teal-200/80 px-2.5 py-1 rounded-lg"
                  >
                    <span>#{tag}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-teal-600 hover:text-rose-600 transition"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Rekomendasi Tag yang Sudah Ada */}
            {existingTags.length > 0 && (
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
                <span>Tag populer:</span>
                {existingTags
                  .filter((t) => !tags.includes(t.name))
                  .slice(0, 7)
                  .map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => handleAddTag(t.name)}
                      className="text-slate-600 hover:text-teal-700 bg-slate-50 hover:bg-teal-50 px-2.5 py-0.5 rounded-lg border border-slate-200 transition font-medium"
                    >
                      +{t.name}
                    </button>
                  ))}
              </div>
            )}
          </div>

          {/* UPLOAD FILE COVER (IMAGE) */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Cover Gambar Berita
            </label>

            {coverImage ? (
              <div className="relative rounded-xl overflow-hidden border border-slate-200 max-h-52 bg-slate-100 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    coverImage.startsWith("http")
                      ? coverImage
                      : `${process.env.NEXT_PUBLIC_API_URL}${coverImage}`
                  }
                  alt="Cover Preview"
                  className="w-full h-48 object-cover"
                />
                <button
                  type="button"
                  onClick={() => setCoverImage("")}
                  className="absolute top-2 right-2 p-1.5 bg-rose-600/90 hover:bg-rose-700 text-white rounded-lg shadow-md transition"
                  title="Hapus Cover"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-200 hover:border-slate-400 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition bg-slate-50/50 hover:bg-slate-50"
              >
                <Upload className="w-8 h-8 text-slate-400 mb-2" />
                <p className="text-xs font-medium text-slate-700">
                  {isUploading ? "Mengunggah gambar..." : "Klik untuk unggah cover artikel (JPG, PNG, WEBP)"}
                </p>
                <p className="text-[10px] text-slate-400 mt-1">Ukuran maksimal file: 5 MB</p>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, image/webp, image/gif"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {/* Summary */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Ringkasan Singkat (Summary)
            </label>
            <textarea
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Ringkasan eksekutif 1-2 kalimat dari artikel ini..."
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400/20 focus:border-slate-500 transition resize-none"
            />
          </div>

          {/* Rich Text Editor CKEditor */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Konten Lengkap Berita & Riset *
            </label>
            <div className="border border-slate-200 rounded-xl overflow-hidden focus-within:border-slate-400 focus-within:ring-2 focus-within:ring-slate-400/20 transition">
              <RichTextEditor value={content} onChange={(data) => setContent(data)} />
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading || isUploading}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isLoading || isUploading}
              className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.99] rounded-xl shadow-xs transition flex items-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <span>Menyimpan...</span>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Simpan Perubahan</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
