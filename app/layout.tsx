import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://v0id.coffee"),
  title: "V0ID // Terminal Coffee",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  description:
    "Coffee for Night Owls. Dark, elegant, high performance for those who never sleep.",
  openGraph: {
    title: "V0ID // Terminal Coffee",
    description:
      "Coffee for Night Owls. Dark, elegant, high performance for those who never sleep.",
    url: "https://v0id.coffee",
    siteName: "V0ID Coffee",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 800,
        alt: "V0ID Coffee Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "V0ID // Terminal Coffee",
    description:
      "Coffee for Night Owls. Dark, elegant, high performance for those who never sleep.",
    images: ["/logo.svg"],
    creator: "@reidandev",
  },
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
