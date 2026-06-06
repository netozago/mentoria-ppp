import { Diamond } from "lucide-react";

const items = [
  "Mentoria mensal ao vivo",
  "Comunidade privada de psicólogos",
  "Estudos de caso reais",
  "Plano de crescimento individual",
  "Posicionamento premium",
  "Marketing ético",
  "Atendimento internacional",
  "Precificação estratégica",
];

export function Ticker() {
  const loop = [...items, ...items];
  return (
    <div className="group relative overflow-hidden border-y border-ppp-border bg-ppp-abyss py-5">
      <div className="flex w-max animate-ticker-med gap-12 group-hover:[animation-play-state:paused]">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-12 font-mono text-xs uppercase tracking-[0.25em] text-ppp-text-muted">
            <span>{t}</span>
            <Diamond className="h-3 w-3 text-ppp-gold fill-ppp-gold" />
          </div>
        ))}
      </div>
    </div>
  );
}
