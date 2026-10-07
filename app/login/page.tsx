import { notFound } from "next/navigation";

export default function StandardLoginCatchAll() {
  // Sesuai requirement: jika endpoint hanya base_url/login (tanpa secret key), return not found (404)
  notFound();
}
