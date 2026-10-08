"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  Mail,
  ShieldCheck,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  KeyRound,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface SecretLoginClientProps {
  secretKey: string;
}

export default function SecretLoginClient({ secretKey }: SecretLoginClientProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [userProfile, setUserProfile] = useState<{
    name?: string;
    email?: string;
    role?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch(`${apiUrl}/login/${encodeURIComponent(secretKey)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Secret key login tidak valid atau URL tidak ditemukan.");
        }
        const message =
          Array.isArray(result.message)
            ? result.message.join(", ")
            : result.message || "Gagal melakukan login. Periksa kembali akun Anda.";
        throw new Error(message);
      }

      // Simpan token ke localStorage / cookie
      if (result?.data?.token) {
        localStorage.setItem("insightpoll_token", result.data.token);
        localStorage.setItem("insightpoll_user", JSON.stringify(result.data.user));
      }

      setSuccessMessage("Autentikasi berhasil! Mengalihkan ke dashboard...");
      setUserProfile(result?.data?.user || null);

      // Redirect otomatis ke dashboard
      setTimeout(() => {
        router.push("/dashboard");
      }, 800);
    } catch (err) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-slate-900 flex flex-col justify-between selection:bg-[#01F2D1]/30">
      {/* Background ambient pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Top Header */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-10 w-36 overflow-hidden flex items-center">
            <Image
              src="/logo.webp"
              alt="InsightPoll Logo"
              width={140}
              height={40}
              style={{ width: "auto", height: "auto" }}
              className="object-contain object-left max-h-10"
              priority
            />
          </div>
        </Link>
      </header>

      {/* Main Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 md:p-10 transition-all">
            {/* Header info */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 text-center">
                Login
              </h1>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed text-center">
                Masuk ke dashboard Anda.
              </p>
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200/80 flex items-start gap-3 text-rose-800 text-sm animate-in fade-in duration-200">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div className="flex-1 leading-snug">{errorMessage}</div>
              </div>
            )}

            {/* Success Banner */}
            {successMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-start gap-3 text-emerald-800 text-sm animate-in fade-in duration-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium">{successMessage}</p>
                  {userProfile && (
                    <p className="mt-1 text-xs text-emerald-700">
                      Login sebagai: <span className="font-semibold">{userProfile.name}</span> ({userProfile.role})
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium tracking-wider text-slate-600 mb-2">
                  Alamat Email Anda
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@insightpoll.com"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-light text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#01F2D1] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-medium tracking-wider text-slate-600">
                    Kata Sandi
                  </label>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-light text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#01F2D1] focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 focus:outline-none"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-full bg-[#00d2b5] hover:bg-[#00be9f] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Autentikasi & Masuk</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="relative z-10 py-6 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} InsightPoll.id Intelligence Analytics. All rights reserved.
      </footer>
    </div>
  );
}
