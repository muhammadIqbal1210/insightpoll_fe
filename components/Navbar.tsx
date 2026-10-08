"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Sparkles, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Insight", href: "/insight" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[94%] max-w-[1240px] z-50">
      <nav className="relative flex items-center justify-between rounded-full border border-slate-200/90 bg-white/90 px-4 py-2.5 md:px-6 md:py-3 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-10 w-32 sm:w-36 md:h-11 md:w-40 overflow-hidden flex items-center">
            <Image
              src="/logo.webp"
              alt="InsightPoll.id Logo"
              width={140}
              height={40}
              style={{ width: "auto", height: "auto" }}
              className="object-contain object-left max-h-10"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 md:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-normal text-slate-600 hover:text-black hover:bg-slate-100/80 rounded-full transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Group */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#00d2b5] px-6 py-2.5 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#00be9f] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Jadwalkan Konsultasi</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#01F2D1] px-3.5 py-1.5 text-xs font-normal text-black"
          >
            Demo
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-black hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mt-3 rounded-3xl border border-slate-200 bg-white/95 p-6 backdrop-blur-2xl shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-medium text-slate-700 hover:text-black border-b border-slate-100"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-full bg-[#00d2b5] py-3 text-sm font-medium text-white shadow-xs"
              >
                Jadwalkan Presentasi & Demo
              </Link>
              <Link
                href="#preview"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-full border border-[#ded5f8] py-3 text-sm font-medium text-slate-700 bg-white"
              >
                Eksplorasi Simulator
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
