import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
