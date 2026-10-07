"use client";

import React from "react";
import {
  PanelLeftClose,
  PanelLeft,
  Search,
  Sun,
  Bell,
  LogOut,
  User as UserIcon,
} from "lucide-react";

export interface DashboardNavbarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  user: {
    name?: string;
    email?: string;
    role?: string;
  } | null;
  onLogout: () => void;
  searchValue?: string;
  onSearchChange?: (val: string) => void;
}

export default function DashboardNavbar({
  sidebarOpen,
  onToggleSidebar,
  user,
  onLogout,
  searchValue = "",
  onSearchChange,
}: DashboardNavbarProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200/80 px-4 md:px-6 flex items-center justify-between sticky top-0 z-30 transition-all">
      {/* Brand & Sidebar Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 -ml-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          title={sidebarOpen ? "Tutup Sidebar" : "Buka Sidebar"}
          aria-label="Toggle Sidebar"
        >
          {sidebarOpen ? (
            <PanelLeftClose className="w-5 h-5" />
          ) : (
            <PanelLeft className="w-5 h-5" />
          )}
        </button>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg tracking-tight text-slate-900">
            InsightPoll
          </span>
        </div>
      </div>

      {/* Global Search Input */}
      <div className="flex-1 max-w-xs md:max-w-md mx-4 hidden sm:block">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Search..."
            className="w-full pl-9 pr-4 py-1.5 text-sm rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400/20 focus:border-slate-400 transition"
          />
        </div>
      </div>

      {/* Right controls: User profile, theme, notif, logout */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* User details */}
        <div className="flex items-center gap-2 text-right">
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-slate-800 leading-tight">
              {user?.name || user?.email?.split("@")[0] || "Administrator"}
            </div>
            {user?.role && (
              <div className="text-[10px] font-medium text-slate-400 tracking-wider uppercase">
                {user.role}
              </div>
            )}
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs">
            {user?.name ? user.name.charAt(0).toUpperCase() : <UserIcon className="w-4 h-4" />}
          </div>
        </div>

        {/* Theme mode button placeholder */}
        <button
          type="button"
          className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition"
          title="Toggle Theme"
        >
          <Sun className="w-4 h-4" />
        </button>

        {/* Notifications */}
        <button
          type="button"
          className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition relative"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-slate-900 absolute top-2 right-2 ring-2 ring-white" />
        </button>

        {/* Logout button */}
        <button
          type="button"
          onClick={onLogout}
          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
          title="Keluar dari Dashboard"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
