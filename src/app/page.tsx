import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";

import About from "@/components/sections/about";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import GithubActivity from "@/components/sections/github-activity";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Timeline from "@/components/sections/timeline";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col lg:pl-10">
        <Navbar />

        <main className="relative flex-1 overflow-hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-24 pt-28 sm:px-8 lg:px-12">
            <Hero />
            <About />
            <Projects />
            <Timeline />
            <GithubActivity />
            <CTA />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
