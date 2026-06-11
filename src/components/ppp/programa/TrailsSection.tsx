import { ScrollReveal } from "@/components/ppp/shared/ScrollReveal";

const trails = [
  {
    n: "01",
    t: "Nicho & Posicionamento",
    d: "Defina seu nicho com precisão e crie uma promessa que atrai pacientes premium.",
  },
  {
    n: "02",
    t: "Marketing Ético & Captação",
    d: "Atraia pacientes de alto valor respeitando o CFP e construindo autoridade genuína.",
  },
  {
    n: "03",
    t: "Autoridade Digital",
    d: "Presença digital que posiciona, que mostra quem você é.",
  },
  {
    n: "04",
    t: "Gestão Financeira",
    d: "Precificação, pacotes, fluxo de caixa e consultório como negócio sustentável.",
  },
  {
    n: "05",
    t: "Atendimento Online & Internacional",
    d: "Infraestrutura, regulamentação e precificação em dólar.",
  },
];

export function TrailsSection() {
  return (
    <section className="bg-ppp-void">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <h2 className="text-center font-display text-4xl font-bold text-ppp-text-primary md:text-5xl">
          Os 5 Passos de evolução que você vai percorrer no PPP:
        </h2>

        <div className="mt-14 flex flex-col">
          {trails.map((tr, i) => (
            <ScrollReveal key={tr.n} delay={i * 90}>
              <div className="flex items-start gap-6 border-b border-ppp-border py-10 last:border-0">
                <div className="w-16 shrink-0 font-mono text-sm font-bold text-ppp-gold opacity-60">
                  PASSO/{tr.n}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ppp-text-primary">
                    {tr.t}
                  </h3>
                  <p className="mt-2 font-body leading-relaxed text-ppp-text-secondary">
                    {tr.d}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
