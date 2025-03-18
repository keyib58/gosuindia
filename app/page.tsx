// app/page.tsx
import { fetchRSSFeed } from "./utils/fetchRSS";
import FeaturePost from "./components/FeaturePosts";
import PostGrid from "./components/PostGrid";

// 强制动态渲染，确保实时获取数据
export const dynamic = "force-dynamic";

// Create a function to safely fetch RSS feeds with fallback
async function safelyFetchRSS(url: string) {
  try {
    return await fetchRSSFeed(url);
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return []; // Return empty array instead of throwing
  }
}

export default async function Home() {
  // Fetch both feeds, but don't fail if one fails
  const [posts, featuredPosts] = await Promise.all([
    safelyFetchRSS("https://www.gosugamers.net/articles/rss"),
    safelyFetchRSS("https://www.gosugamers.net/articles/rss?IsTop=True"),
  ]);

  // Check if both fetches failed
  if (posts.length === 0 && featuredPosts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load content. Please try again later.</p>
      </div>
    );
  }

  // Otherwise, render whatever content we got
  return (
    <div className="min-h-screen">
      <header className="text-white">
        <div className="container mx-auto text-center">
          {featuredPosts.length > 0 ? (
            <FeaturePost posts={featuredPosts} />
          ) : (
            <div className="p-4 bg-gray-800 rounded-md text-center">
              <p>Featured posts are currently unavailable.</p>
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto py-8">
        {posts.length > 0 ? (
          <PostGrid posts={posts} title="Latest Posts" />
        ) : (
          <div className="p-4 bg-gray-100 rounded-md text-center">
            <p>Latest posts are currently unavailable.</p>
          </div>
        )}
      </main>
    </div>
  );
}