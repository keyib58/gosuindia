// components/PostGrid.tsx
import { Post } from '../types/types';
import PostCard from './PostCard';

type PostGridProps = {
  posts: Post[];
  title: string;
};

const PostGrid = ({ posts, title }: PostGridProps) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
};

export default PostGrid;
