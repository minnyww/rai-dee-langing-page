import { useEffect, useState, type CSSProperties } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"
import { heroWords, liveApps } from "@/data/apps"

const tilt = (deg: number, delay?: string) =>
  ({ "--tilt": `${deg}deg`, ...(delay ? { animationDelay: delay } : {}) }) as CSSProperties

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % heroWords.length),
      2600
    )
    return () => clearInterval(timer)
  }, [])

  const word = heroWords[index]

  return (
    <section id="top" className="relative overflow-x-clip px-4 pt-36 pb-16 sm:pt-44 sm:pb-24">
      {/* floating market stickers (decorative) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div
          className="floaty absolute top-[21%] left-[5%] rounded-2xl border-2 border-ink bg-[#FFF9E0] px-5 py-4 shadow-[6px_6px_0_0_var(--color-ink)]"
          style={tilt(-7)}
        >
          <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-ink/50 uppercase">
            ดีลวันนี้
          </p>
          <p className="mt-1 font-heading text-3xl text-eat">
            ฿99{" "}
            <s className="text-base text-ink/35">฿339</s>
          </p>
          <p className="mt-1 text-xs text-ink/60">พิซซ่าพร้อมโค้ดลดเพิ่ม</p>
        </div>

        <div
          className="floaty absolute top-[26%] right-[5%] w-56 rounded-2xl border-2 border-ink bg-linear-to-br from-bat to-tam p-4 text-white shadow-[6px_6px_0_0_var(--color-ink)]"
          style={tilt(6, "-2.2s")}
        >
          <div className="h-7 w-9 rounded-md border-2 border-ink bg-[#FFE38F]" />
          <p className="mt-3 font-mono text-sm tracking-[0.3em]">•••• 4242</p>
          <p className="mt-3 flex items-center justify-between font-heading text-sm">
            บัตรไรดี <span className="font-mono text-[10px] tracking-widest text-white/60">RAI-DEE</span>
          </p>
        </div>

        <div
          className="floaty absolute bottom-[16%] left-[11%] rounded-full border-2 border-dashed border-ink/40 bg-[#FFF7DE]/80 px-4 py-2 text-sm text-ink/55"
          style={tilt(-4, "-4s")}
        >
          ทำไรดี · เร็วๆ นี้
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs font-semibold tracking-[0.28em] text-ink/60 uppercase">
          rai·dee — รวมแอปช่วยตัดสินใจ
        </p>

        <h1 className="mt-7 font-heading text-[clamp(3.2rem,11vw,8rem)] leading-[1.12] [perspective:900px]">
          <span
            key={word.word}
            className="token-in inline-block rounded-[0.32em] border-[0.055em] border-ink px-[0.3em] text-white shadow-[0.085em_0.085em_0_0_var(--color-ink)]"
            style={{ background: word.color }}
          >
            {word.word}
          </span>{" "}
          ไรดี<span className="text-primary">?</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
          คำถามสั้นๆ ที่ถามกันทุกวัน แต่ตอบยากทุกครั้ง —{" "}
          <strong className="font-semibold text-ink">ไรดี</strong>{" "}
          รวมแอปเล็กๆ ไว้ตอบทีละคำถาม ตั้งแต่
          “เมนูมื้อนี้เอาอะไรดี” ไปจนถึง “จ่ายด้วยบัตรใบไหนคุ้มที่สุด”
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="h-11 rounded-full border-2 border-ink px-6 text-base shadow-[5px_5px_0_0_var(--color-ink)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-primary hover:shadow-[2px_2px_0_0_var(--color-ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          >
            <a
              href={liveApps[0].url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("open_app", {
                  app_id: liveApps[0].id,
                  app_name: liveApps[0].name,
                  location: "hero",
                })
              }
            >
              ลองใช้กินไรดี
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 rounded-full border-2 border-ink bg-[#FFF9E0] px-6 text-base shadow-[5px_5px_0_0_var(--color-ink)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          >
            <a href="#apps">ดูแอปทั้งหมด</a>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-ink/70">
          {liveApps.map((app) => (
            <span key={app.id} className="inline-flex items-center gap-2">
              <span
                className="size-2.5 rounded-full border-2 border-ink"
                style={{ background: app.color }}
              />
              {app.name}{" "}
              <span className="font-mono text-[11px] tracking-wider text-ink/45 uppercase">
                live
              </span>
            </span>
          ))}
          <span className="inline-flex items-center gap-2 text-ink/45">
            <span className="size-2.5 rounded-full border-2 border-dashed border-ink/40" />
            ทำไรดี · ซื้อไรดี · ใช้ไรดี — เร็วๆ นี้
          </span>
        </div>
      </div>
    </section>
  )
}
