import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import LoadingWrapper from "../components/LoadingWrapper"; // Komponen Klien

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abiyoga | Portfolio",
  description:
    "Portfolio website of Abiyoga, a Full Stack Developer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} transition-colors`}>
        <ThemeProvider>
          <LoadingWrapper>{children}</LoadingWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
