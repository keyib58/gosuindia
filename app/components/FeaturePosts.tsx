import React from "react";
import { Post } from "../types/types";

type FeaturePostProps = {
  posts: Post[];
};

const FeaturePost: React.FC<FeaturePostProps> = ({ posts }) => {
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-1 lg:grid-rows-5 gap-4 h-full my-10 overflow-hidden px-4">
      {/* First Post */}
      {featuredPosts.length > 0 && (
        <div
          className="lg:col-span-3 lg:row-span-5 bg-cover bg-center aspect-video sm:aspect-[4/3] md:aspect-[16/9] min-h-0 rounded-xl"
          style={{
            backgroundImage: `url(${featuredPosts[0].thumbnail})`,
          }}
        >
          <a
            href={featuredPosts[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-end h-full bg-black bg-opacity-50 text-white p-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-left text-ellipsis">
                {featuredPosts[0].title}
              </h2>
              <p className="text-sm lg:text-base text-left text-ellipsis">
                {featuredPosts[0].description}
              </p>
            </div>
          </a>
        </div>
      )}

      {/* Second and Third Posts */}
      <div className="lg:col-span-2 lg:row-span-5 flex flex-col gap-4 h-full">
        {featuredPosts.length > 1 && (
          <div
            className="bg-cover bg-center aspect-video sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-1/2 rounded-xl"
            style={{
              backgroundImage: `url(${featuredPosts[1].thumbnail})`,
            }}
          >
            <a
              href={featuredPosts[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-end h-full bg-black bg-opacity-50 text-white p-4 rounded-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                <h2 className="text-xl lg:text-2xl font-bold text-ellipsis">
                  {featuredPosts[1].title}
                </h2>
              </div>
            </a>
          </div>
        )}

        {featuredPosts.length > 2 && (
          <div
            className="bg-cover bg-center aspect-video sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-1/2 rounded-xl"
            style={{
              backgroundImage: `url(${featuredPosts[2].thumbnail})`,
            }}
          >
            <a
              href={featuredPosts[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-end h-full bg-black bg-opacity-50 text-white p-4 rounded-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                <h2 className="text-xl lg:text-2xl font-bold text-ellipsis">
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
