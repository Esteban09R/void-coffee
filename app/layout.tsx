import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "V0ID // Terminal Coffee",
  description: "Coffee for Night Owls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${courierPrime.className}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
