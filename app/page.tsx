"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Certificate from "@/components/sections/Certificate";
import Contact from "@/components/sections/Contact";
import MyJourney from "@/components/sections/MyJourney";
import Footer from "@/components/sections/Footer";
import Header from "@/components/layout/Header";
// import { Certificate } from "crypto";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="px-5">
      <Hero />
      <About />
      </div>
      <div className="px-8">
      <MyJourney />
      </div>
      <div className="px-4">
      <Certificate />
      <Projects />
      {/* <Contact /> */}
      </div>
      <Footer />
    </main>
  );
}