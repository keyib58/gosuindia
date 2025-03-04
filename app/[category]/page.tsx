import { fetchRSSFeed } from "../utils/fetchRSS";
import FeaturePost from "../components/FeaturePosts";
import PostGrid from "../components/PostGrid";

type Props = {
  params: Promise<{ category: string }>; // Updated to match PageProps constraint
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params; // Await the Promise

  // Unified handling of category URL
  const baseURL =
    category.toLowerCase() === "anime"
      ? "https://www.gosu.com/anime/articles/rss"
      : `https://www.gosugamers.net/${category}/articles/rss`;

  try {
    // Parallel fetching of posts and featured posts
    const [posts, featuredPosts] = await Promise.all([
      fetchRSSFeed(baseURL),
      fetchRSSFeed(`${baseURL}?IsTop=true`),
    ]);

    return (
      <div className="min-h-screen">
        <header className="text-white">
          <div className="container mx-auto text-center">
            <FeaturePost posts={featuredPosts} />
          </div>
        </header>

        <main className="container mx-auto py-8">
          <PostGrid posts={posts} title={`${category.toUpperCase()} Articles`} />
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error loading category page:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load content. Please try again later.</p>
      </div>
    );
  }
}
