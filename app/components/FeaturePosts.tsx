import React from "react";
import { Post } from "../types/types";
type FeaturePostProps = {
  posts: Post[]; // 确保 posts 类型一致
};

const FeaturePost: React.FC<FeaturePostProps> = ({ posts }) => {
  const featuredPosts = posts.slice(0, 3); // 选择前 3 篇文章

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-1 md:grid-rows-5 gap-4 h-full my-10 ">
      {featuredPosts.length > 0 && (
        <div
          className=" md:col-span-3 md:row-span-5 bg-cover bg-center aspect-video min-h-[400px] md:min-h-[500px] rounded-xl" // 保持 16:9 并设置最小高度
          style={{
            backgroundImage: `url(${featuredPosts[0].thumbnail})`,
          }}
        >
          <a
            href={featuredPosts[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-end h-full bg-black bg-opacity-50 text-white p-4 rounded-xl" // 添加 padding
          >
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-left">
                {featuredPosts[0].title}
              </h2>
              <p className="text-sm md:text-base text-left">
                {featuredPosts[0].description}
              </p>
            </div>
          </a>
        </div>
      )}

      <div className="md:col-span-2 md:row-span-5 flex flex-col gap-4 h-full">
        {featuredPosts.length > 1 && (
          <div
            className="bg-cover bg-center aspect-video md:aspect-auto md:h-1/2 rounded-xl"
            style={{
              backgroundImage: `url(${featuredPosts[1].thumbnail})`,
            }}
          >
            <a
              href={featuredPosts[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-end h-full bg-black bg-opacity-50 text-white p-4 rounded-xl"
            >
              <div className="flex flex-col space-y-2">
                <h2 className="text-xl md:text-2xl font-bold">
                  {featuredPosts[1].title}
                </h2>
              </div>
            </a>
          </div>
        )}

        {featuredPosts.length > 2 && (
          <div
            className="bg-cover bg-center aspect-video md:aspect-auto md:h-1/2 rounded-xl"
            style={{
              backgroundImage: `url(${featuredPosts[2].thumbnail})`,
            }}
          >
            <a
              href={featuredPosts[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-end h-full bg-black bg-opacity-50 text-white p-4 rounded-xl"
            >
              <div className="flex flex-col space-y-2">
                <h2 className="text-xl md:text-2xl font-bold">
                  {featuredPosts[2].title}
                </h2>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturePost;
