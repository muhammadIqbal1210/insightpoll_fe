"use client";

import dynamic from "next/dynamic";
import React from "react";

interface RichTextEditorProps {
  value: string;
  onChange: (data: string) => void;
  placeholder?: string;
}

// Muat CKEditor secara dinamis di client-side saja (menghindari error window/document saat SSR di Next.js)
const CustomCKEditor = dynamic(
  () => import("./ckeditor/CustomCKEditor"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-64 border border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-slate-50/60 text-slate-400 gap-2 text-xs">
        <div className="w-6 h-6 border-2 border-slate-300 border-t-teal-600 rounded-full animate-spin" />
        <span>Memuat CKEditor 5...</span>
      </div>
    ),
  }
);

export default function RichTextEditor(props: RichTextEditorProps) {
  return <CustomCKEditor {...props} />;
}
