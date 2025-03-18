import Parser from "rss-parser";
import { Post } from "../types/types";

// 解析 RSS 分类
const parseCategory = (category: string): string => {
  const match = category.match(/<!\[CDATA\[(.*?)\]\]>/);
  return match ? match[1] : category;
};

// 调整缩略图宽度
const adjustThumbnailWidth = (url: string): string => {
  // 确保 URL 末尾包含 "?w=640"
  return url.replace(/\?w=\d+/, "?w=640");
};

// 优化后的 fetchRSSFeed 函数
export const fetchRSSFeed = async (url: string): Promise<Post[]> => {
  // 基础认证信息
  const username = "gosugamersv5";
  const password = "mbQzFUyB5686jzVb";
  const basicAuth = Buffer.from(`${username}:${password}`).toString("base64");

  const parser = new Parser({
    customFields: {
      item: ["media:thumbnail", "category"],
    },
    headers: {
      Authorization: `Basic ${basicAuth}`,
    },
  });

  try {
    // 禁用缓存，确保每次请求都获取最新 RSS 数据
    const feed = await parser.parseURL(url);

    // 返回解析后的文章数据
    return feed.items.map((item) => {
      let thumbnail = item["media:thumbnail"]?.$?.url || "";
      if (thumbnail) {
        thumbnail = adjustThumbnailWidth(thumbnail);
      }

      const category = parseCategory(item["category"] || "");
      return {
        title: item.title || "",
        link: item.link || "",
        description: item.contentSnippet || "",
        thumbnail: thumbnail,
        category: category,
      };
    });
  } catch (error) {
    console.error(`Error fetching RSS feed from ${url}:`, error);
    throw new Error("Failed to fetch RSS feed.");
  }
};
