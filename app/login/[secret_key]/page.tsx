import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SecretLoginClient from "./SecretLoginClient";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default async function SecretLoginPage({
  params,
}: {
  params: Promise<{ secret_key: string }>;
}) {
  const resolvedParams = await params;
  const secretKey = resolvedParams.secret_key;

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Verifikasi ke Backend secara Server-to-Server
  // Backend menjadi single source of truth untuk secret key
  try {
    const res = await fetch(`${apiUrl}/login/verify/${encodeURIComponent(secretKey)}`, {
      method: "GET",
      cache: "no-store", // Selalu periksa langsung ke backend
    });

    if (!res.ok) {
      // Jika backend merespon 404 (kunci salah), tampilkan 404
      notFound();
    }
  } catch (error) {
    const err = error as { code?: string; message?: string };
    if (err.code === "ECONNREFUSED" || err.message?.includes("fetch failed")) {
      console.warn(
        `\n⚠️  [InsightPoll] Backend di ${apiUrl} belum berjalan. Pastikan Anda sudah menjalankan "npm run start:dev" di folder insightpoll_be.\n`
      );
    } else {
      console.error("Gagal verifikasi secret key ke backend:", error);
    }
    notFound();
  }

  // Jika kunci valid menurut Backend, render form login
  return <SecretLoginClient secretKey={secretKey} />;
}
