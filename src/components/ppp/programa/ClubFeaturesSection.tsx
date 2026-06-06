import { PremiumCard } from "@/components/ppp/shared/PremiumCard";
import { ScrollReveal } from "@/components/ppp/shared/ScrollReveal";
import { Calendar, Lock, ClipboardList, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-ppp-gold" />,
    title: "Encontro ao Vivo Mensal",
    text: "Sessão ao vivo com Neto Zago todo mês. Mentoria em grupo, perguntas reais, respostas práticas. Direto ao ponto.",
  },
  {
    icon: <Lock className="h-8 w-8 text-ppp-gold" />,
    title: "Comunidade Privada",
    text: "Acesso ao grupo exclusivo de membros. Networking real com psicólogos que também estão elevando suas carreiras. Sem ruído. Só qualidade.",
  },
  {
    icon: <ClipboardList className="h-8 w-8 text-ppp-gold" />,
    title: "Estudos de Caso Reais",
    text: "Análise de casos concretos de psicólogos do programa. Como fulano saiu de R$80 para R$250/sessão. Como ciclana estruturou sua agenda premium.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-ppp-gold" />,
    title: "Plano de Crescimento Individual",
    text: "Trilha personalizada para a sua realidade atual. Onde você está agora e o caminho exato para o próximo nível.",
  },
];

export function ClubFeaturesSection() {
  return (
    <section className="bg-ppp-depth">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <h2 className="text-center font-display text-4xl font-bold text-ppp-text-primary md:text-5xl">
          O PPP é a sua Mentoria Mensal
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-body text-ppp-text-secondary">
          Todo mês você recebe novas ferramentas, acesso a Neto e uma comunidade que
          pensa igual a você.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 120}>
              <PremiumCard className="h-full">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-ppp-gold/30 bg-ppp-gold/10">
                  {f.icon}
                </div>
                <h3 className="font-display text-2xl font-semibold text-ppp-text-primary">
                  {f.title}
                </h3>
                <p className="mt-3 font-body leading-relaxed text-ppp-text-secondary">
                  {f.text}
                </p>
              </PremiumCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
