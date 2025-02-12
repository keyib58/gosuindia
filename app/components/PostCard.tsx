// components/PostCard.tsx
import { Post } from '../types/types';

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 "
    >
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${post.thumbnail})` }}
      ></div>
      <div className="p-4 text-black">
        <h3 className="text-lg font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm">{post.description}</p>
      </div>
    </a>
  );
};

export default PostCard;
