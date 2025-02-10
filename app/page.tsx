// app/page.tsx
import { fetchRSSFeed } from "./utils/fetchRSS";
import FeaturePost from "./components/FeaturePosts";
import PostGrid from "./components/PostGrid";

export default async function Home() {
  const [posts, featuredPosts] = await Promise.all([
    fetchRSSFeed("https://www.gosugamers.net/articles/rss"),
    fetchRSSFeed("https://www.gosugamers.net/articles/rss?IsTop=True")
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
}
