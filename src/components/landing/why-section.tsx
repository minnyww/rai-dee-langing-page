import { MousePointerClick, RefreshCw, Target, type LucideIcon } from "lucide-react"

interface Reason {
  icon: LucideIcon
  color: string
  title: string
  body: string
}

const reasons: Reason[] = [
  {
    icon: Target,
    color: "#f04e23",
    title: "ตอบคำถามเดียว แต่ตอบลึก",
    body: "แอปหนึ่งตัว รับผิดชอบหนึ่งคำถาม ไม่มีฟีเจอร์แถมที่ทำให้เกะกะ จึงเจาะคำตอบได้ตรงและเร็วกว่า",
  },
  {
    icon: RefreshCw,
    color: "#2d5bff",
    title: "ข้อมูลสด ไม่ต้องงมเอง",
    body: "ดีล โค้ด และโปรโมชั่นถูกรวมและจัดระเบียบไว้ให้แล้ว เปิดมาเจอคำตอบไวกว่าค้นหาเองหลายเท่า",
  },
  {
    icon: MousePointerClick,
    color: "#00a88e",
    title: "เปิดใช้เลย ไม่ต้องติดตั้ง",
    body: "ทุกแอปเป็นเว็บที่เปิดได้ทันทีในเบราว์เซอร์ ฟรี ไม่ต้องสมัครสมาชิก ไม่ต้องจำรหัสผ่านเพิ่ม",
  },
]

export function WhySection() {
  return (
    <section id="why" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <p className="font-mono text-xs font-semibold tracking-[0.28em] text-ink/60 uppercase">
            why · ทำไมต้องไรดี
          </p>
          <h2 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl">
            คำถามเล็กๆ
            <br className="sm:hidden" /> ควรได้คำตอบไวๆ
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="reveal rounded-3xl border-2 border-ink/12 bg-[#FFFDF4]/80 p-6"
            >
              <span
                className="grid size-11 place-items-center rounded-2xl border-2 border-ink text-white"
                style={{ background: reason.color }}
              >
                <reason.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{reason.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/65">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
