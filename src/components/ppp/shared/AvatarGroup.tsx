import { cn } from "@/lib/utils";

export function AvatarGroup({
  avatars,
  className,
}: {
  avatars: { initials: string }[];
  className?: string;
}) {
  return (
    <div className={cn("flex", className)}>
      {avatars.map((a, i) => (
        <div
          key={i}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border-2 border-ppp-gold bg-ppp-surface font-mono text-[11px] text-ppp-gold shadow-sm",
            i > 0 && "-ml-3",
          )}
        >
          {a.initials}
        </div>
      ))}
    </div>
  );
}
