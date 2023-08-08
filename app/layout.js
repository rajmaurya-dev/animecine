import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import Nav from "@/components/Nav";
import MenuBar from "@/components/MenuBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnimeCine",
  description: "Explore & enjoy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark bg-black">
        {/* <Nav /> */}
        <MenuBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
