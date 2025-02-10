import "./globals.css";
import Menu from "@/app/components/Menu";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Gosu India",
  description:
    "Stay updated with the latest articles on Dota 2, CSGO, and more!",
};

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
            paddingTop: "var(--menu-height)", // 使用导航栏的高度作为填充
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
