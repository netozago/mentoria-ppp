import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline";

export function PppCTAButton({
  children,
  variant = "primary",
  href = "#checkout",
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-ppp-gold text-ppp-void shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5"
      : "border border-ppp-gold/60 text-ppp-gold hover:bg-ppp-gold/10 hover:border-ppp-gold";
  return (
    <a href={href} className={cn(base, styles, className)}>
      <span>{children}</span>
      <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
