import { PremiumCard } from "@/components/ppp/shared/PremiumCard";
import { GoldDivider } from "@/components/ppp/shared/GoldDivider";

const testimonials = [
  {
    text: "Em 3 meses de programa, saí de R$100 para R$220 por sessão e fechei minha agenda sem plano de saúde. Nunca imaginei que fosse possível tão rápido.",
    name: "Dra. Ana Clara M.",
    role: "CRP-SP · Psicóloga Clínica",
    initials: "AC",
  },
  {
    text: "O encontro mensal com Neto vale o investimento inteiro. Cada sessão me dá clareza sobre o próximo passo. A comunidade é de um nível fora do comum.",
    name: "Dr. Rafael S.",
    role: "CRP-RJ · Neuropsicólogo",
    initials: "RS",
  },
  {
    text: "Comecei desconfiado. Hoje renovo todo mês sem nem pensar. É a mentoria mais honesta e prática do mercado de psicologia.",
    name: "Dra. Letícia B.",
    role: "CRP-MG · Psicóloga Organizacional",
    initials: "LB",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-ppp-abyss">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h2 className="text-center font-display text-3xl italic text-ppp-text-primary md:text-4xl">
          O que dizem os membros do Programa
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <PremiumCard key={t.name}>
              <div className="font-display text-7xl leading-none text-ppp-gold opacity-20">"</div>
              <p className="-mt-4 font-display text-lg italic leading-relaxed text-ppp-text-secondary">
                {t.text}
              </p>
              <GoldDivider className="my-5 mx-0 max-w-[40px]" />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ppp-gold bg-ppp-surface font-mono text-xs text-ppp-gold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-ppp-gold">{t.name}</div>
                  <div className="font-mono text-[11px] text-ppp-text-muted">{t.role}</div>
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
}
