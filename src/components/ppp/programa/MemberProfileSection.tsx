import { Sparkles } from "lucide-react";

const items = [
  "Você tem formação e quer transformar competência em prosperidade",
  "Está cansado de cursos que não conversam com a realidade do consultório",
  "Quer crescer com estratégia, não com sorte ou dependendo somente de indicação",
  "Busca uma comunidade séria, sem fórmulas mágicas e sem guru",
  "Entende que evolução profissional é um processo, não um evento",
];

export function MemberProfileSection() {
  return (
    <section className="bg-ppp-void">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
        <h2 className="font-display text-4xl font-bold text-ppp-text-primary">
          O programa é para você se:
        </h2>

        <ul className="mt-10 flex flex-col text-left">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-4 border-b border-ppp-border py-4 last:border-0">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ppp-gold/15">
                <Sparkles className="h-3 w-3 text-ppp-gold" />
              </span>
              <span className="font-body text-lg leading-relaxed text-ppp-text-secondary">{it}</span>
            </li>
          ))}
        </ul>

        <div className="my-10 h-px bg-ppp-gold/30" />

        <p className="font-display text-lg italic text-ppp-text-muted">
          Não é para quem busca fórmulas mágicas ou quer cobrar mais sem fazer diferente.
        </p>
      </div>
    </section>
  );
}
