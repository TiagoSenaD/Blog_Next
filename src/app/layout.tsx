import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";


export const metadata: Metadata = {
  title: "Blog de estudo Next.js",
  description: "Um blog que vai sendo contruido a medida em que eu estudo Next.js",
};



export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

