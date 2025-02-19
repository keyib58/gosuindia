"use client";
import "./globals.css";
import Menu from "@/app/components/Menu";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";

const metaInfo = {
  "/": {
    title: "GosuGamers - The world's premier esports portal | GosuGamers",
    description:
      "We bring you the latest Esports editorial & data coverage, match schedules, and world rankings.",
    image: "/previewThumb.jpg", // Add preview image for the homepage
  },
  "/entertainment": {
    title: "Latest Esports News, Gaming News and Anime Updates | GosuGamers",
    description:
      "Stay updated with the latest game releases, events, and breaking news from the world of PC and mobile games, plus exclusive anime news and content, all in one place at GosuGamers.",
    image: "/previewThumb.jpg", // Add preview image for entertainment
  },
  "/dota2": {
    title:
      "Dota 2 | Latest News, Matches, Rankings, Tournaments and Leaderboards | GosuGamers",
    description:
      "Explore the world of Dota 2 with the latest news, upcoming tournaments, live score, comprehensive rankings and Leaderboards. Immerse yourself in the Dota 2 community on GosuGamers.",
    image: "/previewThumb.jpg", // Add preview image for Dota 2
  },
  "/counterstrike": {
    title:
      "CS2 | Latest News, Matches, Rankings, Tournaments and Leaderboards | GosuGamers",
    description:
      "Explore the world of CS2 with the latest news, upcoming tournaments, live score, comprehensive rankings and Leaderboards. Immerse yourself in the CS2 community on GosuGamers.",
    image: "/previewThumb.jpg", // Add preview image for CS2
  },
  "/lol": {
    title:
      "LoL | Latest News, Matches, Rankings, Tournaments and Leaderboards | GosuGamers",
    description:
      "Explore the world of LoL with the latest news, upcoming tournaments, live score, comprehensive rankings and Leaderboards. Immerse yourself in the LoL community on GosuGamers.",
    image: "/previewThumb.jpg", // Add preview image for LoL
  },
  "/valorant": {
    title:
      "Valorant | Latest News, Matches, Rankings, Tournaments and Leaderboards | GosuGamers",
    description:
      "Explore the world of Valorant with the latest news, upcoming tournaments, live score, comprehensive rankings and Leaderboards. Immerse yourself in the Valorant community on GosuGamers.",
    image: "/previewThumb.jpg", // Add preview image for Valorant
  },
  "/pubg-mobile": {
    title:
      "PUBG Mobile | Latest News, Matches, Rankings, Tournaments and Leaderboards | GosuGamers",
    description:
      "Explore the world of PUBG Mobile with the latest news, upcoming tournaments, live score, comprehensive rankings and Leaderboards. Immerse yourself in the PUBG Mobile community on GosuGamers.",
    image: "/previewThumb.jpg", // Add preview image for PUBG Mobile
  },
  "/anime": {
    title: "Gosu Anime - Anime News, Manga News, and VTubers Updates",
    description:
      "Immerse yourself in a diverse collection of Anime, Manga and Vtubers with Gosu Anime. Discover the latest manga updates and anime news, series, recommendations and vtubers updates only on Gosu Anime.",
    image: "/previewThumb.jpg", // Add preview image for Anime
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current path
  const currentMeta =
    metaInfo[pathname as keyof typeof metaInfo] || metaInfo["/"]; // Default to homepage metadata

  return (
    <html lang="en">
      <head>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:image" content={currentMeta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="flex flex-col min-h-screen">
        <Menu />
        <main
          className="flex-grow"
          style={{
            paddingTop: "var(--menu-height)", // Use navigation bar height as padding
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
