import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn('flex items-center gap-3', className)} aria-label="Amanat Logistic — на главную">
      <span aria-hidden="true" className="flex h-9 items-end gap-1">
        {[14, 22, 30, 22, 36].map((h, i) => (
          <span
            key={i}
            className="w-1 -skew-x-[20deg] bg-current opacity-90"
            style={{ height: `${h}px` }}
          />
        ))}
      </span>
      <span className="font-heading text-lg font-extrabold uppercase leading-[0.95] tracking-tight">
        Amanat
        <br />
        Logistic
      </span>
    </a>
  )
}
