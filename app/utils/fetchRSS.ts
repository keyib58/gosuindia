import Parser from "rss-parser";
import { Post } from "../types/types";

const parseCategory = (category: string): string => {
  const match = category.match(/<!\[CDATA\[(.*?)\]\]>/);
  return match ? match[1] : category;
};

const adjustThumbnailWidth = (url: string): string => {
  // Ensure the URL ends with "?w=640"
  return url.replace(/\?w=\d+/, "?w=640");
};

export const fetchRSSFeed = async (url: string): Promise<Post[]> => {
  // Create basic auth credentials
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

  const feed = await parser.parseURL(url);

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
};
