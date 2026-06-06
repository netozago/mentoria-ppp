import { cn } from "@/lib/utils";

export function PremiumCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "card-gold-top group relative rounded-2xl border border-ppp-border bg-ppp-surface/40 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-ppp-gold/50 hover:shadow-gold",
        className,
      )}
    >
      {children}
    </div>
  );
}
