import Parser from "rss-parser";
import { Post } from "../types/types";

// 解析 RSS 分类的辅助函数
// 一些 RSS 分类可能包含 `<![CDATA[]]>` 包裹的内容，此函数用于提取其中的实际分类名称
const parseCategory = (category: string): string => {
  const match = category.match(/<!\[CDATA\[(.*?)\]\]>/);
  return match ? match[1] : category;
};

// 调整缩略图宽度的辅助函数
// 确保 URL 的末尾包含 `?w=640`，以统一缩略图的宽度
const adjustThumbnailWidth = (url: string): string => {
  return url.replace(/\?w=\d+/, "?w=640");
};

// 检查 URL 是否有效的辅助函数
// 避免对无效的 URL 进行请求，减少不必要的错误
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// 优化后的 fetchRSSFeed 函数
// 从指定的 RSS 源获取文章列表，并返回解析后的 Post 数组
export const fetchRSSFeed = async (url: string): Promise<Post[]> => {
  // 基础认证信息
  const username = "gosugamersv5"; // 替换为实际用户名
  const password = "mbQzFUyB5686jzVb"; // 替换为实际密码
  const basicAuth = Buffer.from(`${username}:${password}`).toString("base64");

  // 初始化 RSS 解析器，并配置自定义字段和请求头
  const parser = new Parser({
    customFields: {
      item: ["media:thumbnail", "category"], // 定义需要解析的自定义字段
    },
    headers: {
      Authorization: `Basic ${basicAuth}`, // 添加基础认证头
    },
  });

  // 检查 URL 是否有效
  if (!isValidUrl(url)) {
    console.error(`Invalid URL: ${url}`);
    return []; // 如果 URL 无效，返回空数组
  }

  try {
    console.log(`Fetching RSS feed from: ${url}`); // 日志记录请求的 URL

    // 解析 RSS 数据
    const feed = await parser.parseURL(url);

    console.log(`Successfully fetched RSS feed from: ${url}`); // 日志记录成功请求

    // 将 RSS 数据解析为 Post 数组
    return feed.items.map((item) => {
      // 获取和调整缩略图
      let thumbnail = item["media:thumbnail"]?.$?.url || "";
      if (thumbnail) {
        thumbnail = adjustThumbnailWidth(thumbnail);
      }

      // 解析分类
      const category = parseCategory(item["category"] || "");

      // 返回解析后的 Post 对象
      return {
        title: item.title || "",
        link: item.link || "",
        description: item.contentSnippet || "",
        thumbnail: thumbnail,
        category: category,
      };
    });
  } catch (error: any) {
    // 根据错误类型进行处理
    if (error.code === "ENOTFOUND") {
      console.error(`Network error: Unable to reach ${url}`);
    } else if (error.response?.status === 401) {
      console.error("Authentication failed. Please check your credentials.");
    } else {
      console.error(`Unexpected error fetching RSS feed from ${url}:`, error);
    }

    // 返回空数组以避免应用崩溃
    return [];
  }
};
