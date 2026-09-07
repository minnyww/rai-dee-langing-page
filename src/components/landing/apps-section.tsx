import { ArrowUpRight, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { liveApps, soonApps } from "@/data/apps"
import { trackEvent } from "@/lib/analytics"

export function AppsSection() {
  return (
    <section id="apps" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <p className="font-mono text-xs font-semibold tracking-[0.28em] text-ink/60 uppercase">
            line-up · แอปทั้งหมด
          </p>
          <h2 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl">
            ทุกคำถาม
            <br className="sm:hidden" /> มีแอปของตัวเอง
          </h2>
          <p className="mt-4 leading-relaxed text-ink/70">
            เปิดตัวไปแล้ว 3 แอป และอีก 3 คำถามที่กำลังหาคำตอบให้อยู่
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {liveApps.map((app) => (
            <Card
              key={app.id}
              id={`app-${app.id}`}
              className="reveal gap-5 overflow-hidden rounded-3xl border-2 border-ink pt-0 ring-0 shadow-[7px_7px_0_0_var(--color-ink)] transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[9px_9px_0_0_var(--color-ink)]"
            >
              {/* signboard strip */}
              <div
                className="flex items-center gap-3 border-b-2 border-ink px-5 py-4 sm:px-6"
                style={{ background: app.color }}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border-2 border-ink bg-[#FFF9E0]">
                  <app.icon className="size-5" style={{ color: app.color }} />
                </span>
                <h3 className="font-heading text-2xl text-white sm:text-3xl">
                  {app.name}
                </h3>
                <span className="ml-auto hidden rotate-3 rounded-full border-2 border-ink bg-[#FFF9E0] px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-ink uppercase sm:inline-block">
                  ● live
                </span>
              </div>

              <CardHeader>
                <CardTitle className="font-sans text-lg leading-snug font-semibold">
                  {app.tagline}
                </CardTitle>
                <CardDescription className="pt-1 leading-relaxed text-ink/70">
                  {app.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="flex flex-col gap-2.5">
                  {app.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-ink/80"
                    >
                      <span
                        className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border-2 border-ink"
                        style={{ background: app.color }}
                      >
                        <Check className="size-3 text-white" strokeWidth={3} />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex-wrap gap-3 border-t-2 border-ink/10 bg-transparent">
                <Button
                  asChild
                  className="rounded-full border-2 border-ink text-white shadow-[3px_3px_0_0_var(--color-ink)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--color-ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                  style={{ background: app.color }}
                >
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("open_app", {
                        app_id: app.id,
                        app_name: app.name,
                        location: "card",
                      })
                    }
                  >
                    เปิด{app.name}
                    <ArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
                <span className="ml-auto hidden font-mono text-xs text-ink/45 sm:block">
                  {app.urlLabel}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {soonApps.map((app) => (
            <div
              key={app.id}
              className="reveal rounded-3xl border-2 border-dashed border-ink/35 bg-[#FFF7DE]/70 p-5"
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid size-9 shrink-0 place-items-center rounded-xl border-2 border-dashed"
                  style={{ borderColor: `${app.color}66`, color: app.color }}
                >
                  <app.icon className="size-4" />
                </span>
                <h3 className="font-heading text-lg">{app.name}</h3>
                <Badge
                  variant="outline"
                  className="h-auto py-1 leading-relaxed border-ink/25 text-ink/55"
                >
                  เร็วๆ นี้
                </Badge>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {app.soonLine}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
