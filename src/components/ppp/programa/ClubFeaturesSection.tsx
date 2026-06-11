import { PremiumCard } from "@/components/ppp/shared/PremiumCard";
import { ScrollReveal } from "@/components/ppp/shared/ScrollReveal";
import { Lock, ClipboardList, TrendingUp, Users, MessageSquare } from "lucide-react";

const features = [
  {
    icon: <Users className="h-8 w-8 text-ppp-gold" />,
    title: "8 Encontros de Mentoria",
    text: "Encontros em formato de Mentoria ao vivo em grupo.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-ppp-gold" />,
    title: "1 Sessão Individual",
    text: "Sessão individual de análise e orientação.",
  },
  {
    icon: <Lock className="h-8 w-8 text-ppp-gold" />,
    title: "Comunidade Secreta",
    text: "Comunidade secreta para os alunos do Programa.",
  },
  {
    icon: <ClipboardList className="h-8 w-8 text-ppp-gold" />,
    title: "Palestra Pronta e Replicável",
    text: "Uma palestra pronta para você aprender a dar palestras, ajudar pessoas e captar novos pacientes.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-ppp-gold" />,
    title: "Tira Dúvidas",
    text: "Duas sessões “Tira Dúvidas” por semana.",
  },
];

export function ClubFeaturesSection() {
  return (
    <section className="bg-ppp-depth">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <h2 className="text-center font-display text-4xl font-bold text-ppp-text-primary md:text-5xl uppercase">
          Programa Psicólogo Próspero
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-body text-ppp-text-secondary">
          Tudo o que você precisa para construir uma carreira de alto valor.
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
