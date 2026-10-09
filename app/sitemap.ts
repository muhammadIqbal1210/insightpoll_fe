import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://insightpoll.id";
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  // Halaman Statis Utama
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tentang`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/layanan`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insight`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic Blog / Article Routes dari Backend
  let dynamicBlogRoutes: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${apiUrl}/blog?page=1&limit=100`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      const blogs = data?.data?.items || data?.data || [];
      if (Array.isArray(blogs)) {
        dynamicBlogRoutes = blogs.map((item: { slug: string; updatedAt?: string; createdAt?: string }) => ({
          url: `${baseUrl}/insight/${item.slug}`,
          lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(item.createdAt || Date.now()),
          changeFrequency: "weekly" as const,
          priority: 0.8,
        }));
      }
    }
  } catch {
    // Fallback jika API belum aktif saat build
    dynamicBlogRoutes = [];
  }

  return [...staticRoutes, ...dynamicBlogRoutes];
}
