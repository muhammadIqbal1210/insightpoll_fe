/**
 * Format tanggal lengkap beserta jam dan menit (Contoh: "07 Oktober 2026, 14:15 WIB")
 */
export function formatDateTime(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    const dateFormatted = d.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    return `${dateFormatted}, ${hours}:${minutes} WIB`;
  } catch {
    return dateStr;
  }
}

/**
 * Format selang waktu relatif dari sekarang (Contoh: "baru saja", "15 menit lalu", "2 jam lalu", "3 hari lalu")
 */
export function formatTimeAgo(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();

    // Jika selisih negatif atau kurang dari 60 detik
    if (diffMs < 60 * 1000) {
      return "baru saja";
    }

    const diffMinutes = Math.floor(diffMs / (60 * 1000));
    if (diffMinutes < 60) {
      return `${diffMinutes} menit lalu`;
    }

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) {
      return `${diffHours} jam lalu`;
    }

    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) {
      return `${diffDays} hari lalu`;
    }

    const diffWeeks = Math.floor(diffDays / 7);
    if (diffWeeks < 4) {
      return `${diffWeeks} minggu lalu`;
    }

    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) {
      return `${diffMonths} bulan lalu`;
    }

    const diffYears = Math.floor(diffDays / 365);
    return `${diffYears} tahun lalu`;
  } catch {
    return dateStr;
  }
}
