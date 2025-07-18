import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600","700","800","900"], // Add all needed weights, e.g., 400 for regular, 700 for bold
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lootopia",
  description: "Awesome treasure hunt app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
