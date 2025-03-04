// app/page.tsx
import { fetchRSSFeed } from "./utils/fetchRSS";
import FeaturePost from "./components/FeaturePosts";
import PostGrid from "./components/PostGrid";

// 强制动态渲染，确保实时获取数据
export const dynamic = "force-dynamic";

export default async function Home() {
  try {
    // 使用 Promise.all 并确保禁用缓存
    const [posts, featuredPosts] = await Promise.all([
      fetchRSSFeed("https://www.gosugamers.net/articles/rss"),
      fetchRSSFeed("https://www.gosugamers.net/articles/rss?IsTop=True"),
    ]);

    return (
      <div className="min-h-screen">
        <header className="text-white">
          <div className="container mx-auto text-center">
            <FeaturePost posts={featuredPosts} />
          </div>
        </header>

        <main className="container mx-auto py-8">
          <PostGrid posts={posts} title="Latest Posts" />
        </main>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch RSS feeds:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load content. Please try again later.</p>
      </div>
    );
  }
}
