import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Srinivas Prasad R",
  description: "Yoga instructor, yoga therapist, and fitness trainer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
