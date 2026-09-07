import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-6">
      <nav className="flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border-2 border-ink bg-[#FFF9E0]/90 py-2 pr-2 pl-5 shadow-[4px_4px_0_0_var(--color-ink)] backdrop-blur">
        <a href="#top" className="font-heading text-xl leading-none">
          ไรดี<span className="text-primary">?</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-ink/75 sm:flex">
          <a className="transition-colors hover:text-ink" href="#apps">
            แอปทั้งหมด
          </a>
          <a className="transition-colors hover:text-ink" href="#why">
            ทำไมต้องไรดี
          </a>
        </div>
        <Button
          asChild
          className="h-9 rounded-full border-2 border-ink px-4 shadow-[3px_3px_0_0_var(--color-ink)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-primary hover:shadow-[1px_1px_0_0_var(--color-ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        >
          <a href="#apps">เริ่มใช้งาน</a>
        </Button>
      </nav>
    </header>
  )
}
