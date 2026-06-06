import { cn } from "@/lib/utils";

export function GoldDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto h-px w-24 bg-gradient-to-r from-transparent via-ppp-gold to-transparent",
        className,
      )}
    />
  );
}
