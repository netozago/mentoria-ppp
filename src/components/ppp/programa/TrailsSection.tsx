import { ScrollReveal } from "@/components/ppp/shared/ScrollReveal";

const trails = [
  {
    n: "01",
    t: "Nicho Clínico & Posicionamento",
    d: "Definir seu nicho com precisão. Criar uma promessa que atrai pacientes premium. Diferenciar-se no mercado sem parecer coach nem guru.",
  },
  {
    n: "02",
    t: "Marketing Ético & Captação",
    d: "Como atrair pacientes de alto valor sem posts invasivos. A captação que respeita o CFP e ainda constrói autoridade genuína.",
  },
  {
    n: "03",
    t: "Redes Sociais & Autoridade Digital",
    d: "Presença digital que posiciona, não que perturba. A estratégia da 'porta lateral' para colegas sem misturar audiência de pacientes.",
  },
  {
    n: "04",
    t: "Gestão Financeira do Consultório",
    d: "Precificação, pacotes, antecipação de pagamento, fluxo de caixa. O consultório como negócio sustentável e crescente.",
  },
  {
    n: "05",
    t: "Atendimento Online & Internacionalização",
    d: "Infraestrutura, regulamentação, precificação em dólar. como Neto passou a atender nos EUA sem sair do interior de SP.",
  },
];

export function TrailsSection() {
  return (
    <section className="bg-ppp-void">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <h2 className="text-center font-display text-4xl font-bold text-ppp-text-primary md:text-5xl">
          5 Trilhas de Evolução Profissional
        </h2>

        <div className="mt-14 flex flex-col">
          {trails.map((tr, i) => (
            <ScrollReveal key={tr.n} delay={i * 90}>
              <div className="flex items-start gap-6 border-b border-ppp-border py-10 last:border-0">
                <div className="w-16 shrink-0 font-mono text-sm font-bold text-ppp-gold opacity-60">
                  TR/{tr.n}
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
