import { AppsSection } from "@/components/landing/apps-section"
import { Footer } from "@/components/landing/footer"
import { Hero } from "@/components/landing/hero"
import { MarqueeBand } from "@/components/landing/marquee"
import { Nav } from "@/components/landing/nav"
import { WhySection } from "@/components/landing/why-section"
import { useReveal } from "@/hooks/use-reveal"

export default function App() {
  useReveal()

  return (
    <div className="min-h-svh overflow-x-clip bg-background font-sans text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:border-2 focus:border-ink focus:bg-[#FFF9E0] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-[3px_3px_0_0_var(--color-ink)]"
      >
        ข้ามไปที่เนื้อหา
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <MarqueeBand />
        <AppsSection />
        <WhySection />
      </main>
      <Footer />
    </div>
  )
}
