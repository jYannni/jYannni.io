import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "jyannni.io",
    template: "%s | jyannni.io",
  },
  description: "Full-Stack Developer of web sites and apps.",
  openGraph: {
    title: "jyannni.io",
    description:
      "Full-Stack Developer of web sites and apps.",
    url: "https://jyannni.io",
    siteName: "jyannni.io",
    images: [
      {
        url: "https://jyannni.io/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // twitter: {
  //   title: "Yanko Thomson",
  //   card: "summary_large_image",
  // },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bladeRunner = LocalFont({
  src: "../public/fonts/BladeRunnerMovieFont-4nx9.ttf",
  variable: "--font-blade-runner-movie-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, bladeRunner.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
