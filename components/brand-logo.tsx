import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  variant?: "default" | "light"
}

export function BrandLogo({ className, variant = "default" }: BrandLogoProps) {
  const isLight = variant === "light"
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative h-11 w-[110px] overflow-hidden rounded-md ring-1 ring-black/5 shadow-sm bg-primary">
        <img
          src="https://www.pwls.com.au/wp-content/uploads/2021/03/PWLS-logo.png"
          alt="Premier logo"
          className="h-full w-full object-cover"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="leading-tight">
        <p
          className={cn(
            "text-[10px] uppercase tracking-[0.18em] font-semibold",
            isLight ? "text-white/80" : "text-muted-foreground"
          )}
        >
          Windows & Locksmiths
        </p>
        <p
          className={cn(
            "text-xl font-extrabold tracking-tight",
            isLight ? "text-white" : "text-foreground"
          )}
        >
          PREMIER
        </p>
      </div>
    </div>
  )
}
