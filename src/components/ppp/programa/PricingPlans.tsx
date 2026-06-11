import { PppBadge } from "@/components/ppp/shared/PppBadge";
import { PppCTAButton } from "@/components/ppp/shared/PppCTAButton";
import { Check } from "lucide-react";

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 font-body text-ppp-text-secondary">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ppp-gold/15">
        <Check className="h-3 w-3 text-ppp-gold" />
      </span>
      <span>{children}</span>
    </li>
  );
}

export function PricingPlans() {
  return (
    <section id="checkout" className="bg-ppp-depth">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <h2 className="text-center font-display text-4xl font-bold text-ppp-text-primary md:text-5xl">
          Garanta sua vaga no Programa
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-body text-ppp-text-secondary">
          Faça parte do Programa Psicólogo Próspero.
        </p>

        <div className="mt-16">
          <div className="relative mx-auto max-w-md flex flex-col rounded-2xl border-2 border-ppp-gold bg-ppp-surface/60 p-8 shadow-gold transition-all hover:-translate-y-1 hover:shadow-gold-lg">
            <PppBadge>Acesso Completo ✦</PppBadge>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ppp-text-primary">
              Programa Psicólogo Próspero
            </h3>
            <div className="mt-6 flex flex-col">
              <span className="font-body text-lg text-ppp-text-muted line-through">
                De R$ 4.997,00
              </span>
              <span className="mt-1 font-body text-base text-ppp-text-secondary">
                Por apenas:
              </span>
              <div className="mt-2 font-display text-5xl font-bold text-gold-gradient tracking-tight">
                12x R$ 61,74
              </div>
              <span className="mt-2 font-body text-sm text-ppp-text-muted">
                ou R$ 597,00 à vista
              </span>
            </div>
            <ul className="mt-6 flex flex-1 flex-col gap-3">
              <Feature>8 Encontros em formato de Mentoria ao vivo</Feature>
              <Feature>1 Sessão individual de análise e orientação</Feature>
              <Feature>Comunidade secreta para os alunos</Feature>
              <Feature>Palestra pronta e replicável</Feature>
              <Feature>Duas sessões “Tira Dúvidas” por semana</Feature>
            </ul>
            <div className="mt-8">
              <PppCTAButton variant="primary" className="w-full">
                Quero Entrar no Programa
              </PppCTAButton>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center font-body text-xs font-light text-ppp-text-muted">
          Processamento seguro.
        </p>
      </div>
    </section>
  );
}
