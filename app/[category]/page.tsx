import { fetchRSSFeed } from "../utils/fetchRSS";
import FeaturePost from "../components/FeaturePosts";
import PostGrid from "../components/PostGrid";

type Props = {
  params: { category: string }; // Dynamic route parameter
};

// List of valid categories
const validCategories = ["pubg-mobile", "entertainment", "valorant", "news", "dota2", "counterstrike","lol","anime"]; // Add your valid categories here

export default async function CategoryPage({ params }: Props) {
  const { category } = params;

  // Check if the category is valid
  const isValidCategory = validCategories.includes(category.toLowerCase());

  // Define the base URL for fetching RSS feeds
  const baseURL: string | null = isValidCategory
    ? category.toLowerCase() === "anime"
      ? "https://www.gosu.com/anime/articles/rss"
      : `https://www.gosugamers.net/${category}/articles/rss`
    : null;

  try {
    // Attempt to fetch posts and featured posts from the category's RSS feed
    if (!baseURL) {
      throw new Error("Invalid category, falling back to homepage RSS feed.");
    }

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
          <PostGrid
            posts={posts}
            title={`${category.toUpperCase()} Articles`}
          />
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error loading category RSS feed:", error);

    // Fallback to homepage RSS feed
    const [posts, featuredPosts] = await Promise.all([
      fetchRSSFeed("https://www.gosugamers.net/articles/rss"),
      fetchRSSFeed("https://www.gosugamers.net/articles/rss?IsTop=true"),
    ]);

    return (
      <div className="min-h-screen">
        <header className="text-white">
          <div className="container mx-auto text-center">
            <FeaturePost posts={featuredPosts} />
          </div>
        </header>

        <main className="container mx-auto py-8">
          <PostGrid posts={posts} title="Latest Articles" />
        </main>
      </div>
    );
  }
}
