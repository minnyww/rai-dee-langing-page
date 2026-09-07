import { ArrowUpRight } from "lucide-react"
import { liveApps } from "@/data/apps"
import { trackEvent } from "@/lib/analytics"

export function Footer() {
  return (
    <footer className="relative mt-6 overflow-hidden rounded-t-[2.5rem] border-t-2 border-ink bg-ink text-paper">
      <p
        aria-hidden
        className="pointer-events-none absolute -right-6 -bottom-10 font-heading text-[9rem] leading-none text-paper/7 select-none sm:text-[13rem]"
      >
        ไรดี?
      </p>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-heading text-4xl">
              ไรดี<span className="text-primary">?</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/60">
              คำถามประจำวันที่ตอบยากที่สุด เราเก็บคำตอบไว้ที่นี่ทีละคำถาม
            </p>
          </div>

          <nav className="flex flex-col gap-2.5 text-sm">
            <span className="font-mono text-[11px] tracking-[0.2em] text-paper/40 uppercase">
              แอปของเรา
            </span>
            {liveApps.map((app) => (
              <a
                key={app.id}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-paper/80 transition-colors hover:text-paper"
                onClick={() =>
                  trackEvent("open_app", {
                    app_id: app.id,
                    app_name: app.name,
                    location: "footer",
                  })
                }
              >
                <span
                  className="size-2 rounded-full"
                  style={{ background: app.color }}
                />
                {app.name}
                <ArrowUpRight className="size-3.5 text-paper/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </nav>
        </div>

        <div className="relative mt-12 flex flex-col gap-2 border-t border-paper/15 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center">
          <span>© 2026 ไรดี</span>
        </div>
      </div>
    </footer>
  )
}
