"use client";
import "./globals.css";
import Menu from "@/app/components/Menu";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";

const metaInfo = {
  "/": {
    title: "Esports News And Latest Game Updates",
    description: "Latest esports news, games update and more.",
    image: "/previewThumb.jpg", // Add preview image for the homepage
  },
  "/entertainment": {
    title: "Online Games News And Updates",
    description:
      "Get the latest news and updates on online games, including new releases, patches, events, and more.",
    image: "/previewThumb.jpg", // Add preview image for entertainment
  },
  "/dota2": {
    title: "Dota 2 News And Updates",
    description:
      "Stay updated with the latest news, patch notes and more on Dota 2.",
    image: "/previewThumb.jpg", // Add preview image for Dota 2
  },
  "/counterstrike": {
    title: "Counter Strike 2 News And Updates",
    description: "Stay updated with the latest news, updates and more on CS2.",
    image: "/previewThumb.jpg", // Add preview image for CS2
  },
  "/lol": {
    title: "League of Legends News And Updates",
    description: "Stay updated with the latest news, updates and more on LoL.",
    image: "/previewThumb.jpg", // Add preview image for LoL
  },
  "/valorant": {
    title: "Valorant News And Updates",
    description:
      "Stay updated with the latest news, updates and more on Valorant.",
    image: "/previewThumb.jpg", // Add preview image for Valorant
  },
  "/pubg-mobile": {
    title: "Pubg Mobile News And Updates",
    description:
      "Stay updated with the latest news, updates and more on Pubg Mobile.",
    image: "/previewThumb.jpg", // Add preview image for PUBG Mobile
  },
  "/anime": {
    title: "Latest Anime News And Updates",
    description:
      "Stay updated with the latest news, updates and more on Anime.",
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

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:image" content={currentMeta.image} />
        <meta property="og:image:secure_url" content={currentMeta.image} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Esports" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GosuGamers" />
        <meta name="twitter:title" content={currentMeta.title} />
        <meta name="twitter:description" content={currentMeta.description} />
        <meta name="twitter:image" content={currentMeta.image} />
        <meta name="twitter:image:alt" content="Esports" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PF31GJLLDJ"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-PF31GJLLDJ');`}
        </script>

        <link rel="icon" href="/favicon.png" />
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
