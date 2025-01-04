import type { Metadata } from "next";
import "./globals.css";
import TitleBar from "@/components/TitleBar";

export const metadata: Metadata = {
  title: "MOBAI CHATGPT UI",
  description: "a next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <TitleBar />
        {children}
      </body>
    </html>
  );
}
