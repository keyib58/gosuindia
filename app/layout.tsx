import Menu from "@/app/components/Menu";
import Footer from "@/app/components/Footer";
import { Metadata } from 'next';

type MetaInfo = {
  title: string;
  description: string;
  image: string;
}

type MetaInfoMap = {
  [key: string]: MetaInfo;
}

// Define the metadata configuration with proper typing
const metaInfo: MetaInfoMap = {
  "/": {
    title: "GosuGamers - The world's premier esports portal | GosuGamers",
    description: "We bring you the latest Esports editorial & data coverage, match schedules, and world rankings.",
    image: "/previewThumb.jpg",
  },
  "/entertainment": {
    title: "Latest Esports News, Gaming News and Anime Updates | GosuGamers",
    description: "Stay updated with the latest game releases, events, and breaking news from the world of PC and mobile games, plus exclusive anime news and content, all in one place at GosuGamers.",
    image: "/previewThumb.jpg",
  },
  "/dota2": {
    title: "Dota 2 | Latest News, Matches, Rankings, Tournaments and Leaderboards | GosuGamers",
    description: "Explore the world of Dota 2 with the latest news, upcoming tournaments, live score, comprehensive rankings and Leaderboards. Immerse yourself in the Dota 2 community on GosuGamers.",
    image: "/previewThumb.jpg",
  },
  "/counterstrike": {
    title: "CS2 | Latest News, Matches, Rankings, Tournaments and Leaderboards | GosuGamers",
    description: "Explore the world of CS2 with the latest news, upcoming tournaments, live score, comprehensive rankings and Leaderboards. Immerse yourself in the CS2 community on GosuGamers.",
    image: "/previewThumb.jpg",
  },
  "/lol": {
    title: "LoL | Latest News, Matches, Rankings, Tournaments and Leaderboards | GosuGamers",
    description: "Explore the world of LoL with the latest news, upcoming tournaments, live score, comprehensive rankings and Leaderboards. Immerse yourself in the LoL community on GosuGamers.",
    image: "/previewThumb.jpg",
  },
  "/valorant": {
    title: "Valorant | Latest News, Matches, Rankings, Tournaments and Leaderboards | GosuGamers",
    description: "Explore the world of Valorant with the latest news, upcoming tournaments, live score, comprehensive rankings and Leaderboards. Immerse yourself in the Valorant community on GosuGamers.",
    image: "/previewThumb.jpg",
  },
  "/pubg-mobile": {
    title: "PUBG Mobile | Latest News, Matches, Rankings, Tournaments and Leaderboards | GosuGamers",
    description: "Explore the world of PUBG Mobile with the latest news, upcoming tournaments, live score, comprehensive rankings and Leaderboards. Immerse yourself in the PUBG Mobile community on GosuGamers.",
    image: "/previewThumb.jpg",
  },
  "/anime": {
    title: "Gosu Anime - Anime News, Manga News, and VTubers Updates",
    description: "Immerse yourself in a diverse collection of Anime, Manga and Vtubers with Gosu Anime. Discover the latest manga updates and anime news, series, recommendations and vtubers updates only on Gosu Anime.",
    image: "/previewThumb.jpg",
  },
};

type Props = {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Generate metadata based on the current path with proper typing
export async function generateMetadata(
  { searchParams }: Props
): Promise<Metadata> {
  // Get the current path from searchParams or default to "/"
  const currentPath = (searchParams?.path as string) || "/";
  const currentMeta = metaInfo[currentPath] || metaInfo["/"];

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      images: [
        {
          url: currentMeta.image,
          width: 1200,
          height: 630,
          type: 'image/jpeg',
        },
      ],
      type: 'website',
    },
    icons: {
      icon: '/favicon.png',
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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