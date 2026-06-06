import { cn } from "@/lib/utils";

export function PppBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-ppp-gold/30 bg-ppp-surface/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ppp-gold backdrop-blur shadow-[0_0_12px_-3px] shadow-ppp-gold/20",
        className,
      )}
    >
      {children}
    </span>
  );
}
