import { fetchRSSFeed } from "../utils/fetchRSS";
import FeaturePost from "../components/FeaturePosts";
import PostGrid from "../components/PostGrid";

// Define the Props type with the correct structure
type Props = {
  params: Promise<{
    category: string;
  }>;
};

// Export the dynamic page component
export default async function CategoryPage({ params }: Props) {
  // Await the params object before destructuring
  const { category } = await params;

  // Determine the base URL based on the category
  const baseURL =
    category.toLowerCase() === "anime"
      ? "https://www.gosu.com/anime/articles/rss"
      : `https://www.gosugamers.net/${category}/articles/rss`;

  // Fetch posts and featured posts in parallel
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
}
