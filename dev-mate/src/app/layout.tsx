import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { SessionProvider } from "next-auth/react";
import Providers from "./providers";
import Header from "@/components/header";
import NextTopLoader from "nextjs-toploader";
import SideBar from "@/components/sidebar";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Mate",
  description: "Website to find developer geeks for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <NextTopLoader />{" "}
          <div className=" grid grid-cols-12">
            <div className="col-span-2">
              {" "}
              <SideBar />
            </div>
            <div className="col-span-10"> {children}</div>
          </div>
          <Footer/>
        </Providers>

      </body>
    </html>
  );
}
