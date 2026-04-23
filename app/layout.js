import {
  Geist,
  Geist_Mono,
  Space_Grotesk,
  Dancing_Script,
} from "next/font/google";
import "./globals.css";
import ScrollWrapper from "@/components/wrapper/scrollWrapper";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Virat Pod (ViratPoddar) | Full Stack Web Developer",
  description:
    "Virat Poddar, also known as ViratPod, is a Full Stack Web Developer who builds fast, scalable, and production-ready web applications and websites. He specializes in modern technologies like React, Next.js, and Node.js to deliver real-world digital products with strong performance and clean design.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${spaceGrotesk.variable} ${dancingScript.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollWrapper>
          <Navbar />
          <div className="min-h-[89.5vh]">{children}</div>
          <Footer />
        </ScrollWrapper>
      </body>
      <GoogleAnalytics gaId="G-5LRTZJR0GM" />
    </html>
  );
}
