// app/[category]/page.tsx
import { fetchRSSFeed } from "../utils/fetchRSS";
import FeaturePost from "../components/FeaturePosts";
import PostGrid from "../components/PostGrid";

type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const { category } = params;
  
  // 并行获取普通文章和置顶文章
  const [posts, featuredPosts] = await Promise.all([
    fetchRSSFeed(`https://www.gosugamers.net/${category}/articles/rss`),
    fetchRSSFeed(`https://www.gosugamers.net/${category}/articles/rss?IsTop=True`)
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
}
