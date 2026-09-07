const items = [
  { label: "กินไรดี", live: true },
  { label: "บัตรไรดี", live: true },
  { label: "เพลงไรดี", live: true },
  { label: "ทำไรดี · เร็วๆ นี้", live: false },
  { label: "ซื้อไรดี · เร็วๆ นี้", live: false },
  { label: "ใช้ไรดี · เร็วๆ นี้", live: false },
]

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-10">
          <span
            className={
              item.live
                ? "font-heading text-xl text-paper sm:text-2xl"
                : "font-heading text-xl text-paper/40 sm:text-2xl"
            }
          >
            {item.label}
          </span>
          <span className="text-sm text-paper/30">✦</span>
        </li>
      ))}
    </ul>
  )
}

export function MarqueeBand() {
  return (
    <div className="relative -mx-[2%] w-[104%] -rotate-[1.2deg] border-y-2 border-ink bg-ink py-3.5 text-paper">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  )
}
