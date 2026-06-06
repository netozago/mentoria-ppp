import { PppBadge } from "@/components/ppp/shared/PppBadge";
import { PppCTAButton } from "@/components/ppp/shared/PppCTAButton";
import { Check } from "lucide-react";

const baseFeatures = [
  "1 encontro ao vivo com Neto/mês",
  "Acesso à comunidade privada",
  "Biblioteca de estudos de caso",
  "Trilha de conteúdo mensal",
  "Suporte via comunidade",
];

const premiumExtras = [
  "Sessão individual de 30min com Neto (trimestral)",
  "Revisão do seu posicionamento digital",
  "Acesso prioritário a novas turmas de mentoria",
  "Plano de crescimento individualizado",
  "Canal direto de perguntas com Neto",
];

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
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <h2 className="text-center font-display text-4xl font-bold text-ppp-text-primary md:text-5xl">
          Escolha seu Nível de Acesso
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-body text-ppp-text-secondary">
          Comece pelo Essencial ou vá direto ao Premium para mentoria individual.
        </p>

        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-2">
          {/* Base */}
          <div className="card-gold-top flex flex-col rounded-2xl border border-ppp-border bg-ppp-surface/40 p-8 transition-all hover:-translate-y-1 hover:shadow-gold">
            <PppBadge>Essencial</PppBadge>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ppp-text-primary">
              Plano Base
            </h3>
            <div className="mt-4 font-mono text-3xl font-bold text-ppp-text-primary">
              R$97<span className="text-base font-normal text-ppp-text-muted">/mês</span>
            </div>
            <ul className="mt-8 flex flex-1 flex-col gap-3">
              {baseFeatures.map((f) => <Feature key={f}>{f}</Feature>)}
            </ul>
            <div className="mt-8">
              <PppCTAButton variant="outline" className="w-full">
                Começar com Essencial
              </PppCTAButton>
            </div>
          </div>

          {/* Premium */}
          <div className="relative flex flex-col rounded-2xl border-2 border-ppp-gold bg-ppp-surface/60 p-8 shadow-gold transition-all hover:-translate-y-1 hover:shadow-gold-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ppp-gold px-4 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ppp-void">
              Mais Escolhido
            </div>
            <PppBadge>Premium ✦</PppBadge>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ppp-text-primary">
              Plano Premium
            </h3>
            <div className="mt-4 font-display text-5xl font-bold text-gold-gradient">
              R$197<span className="text-base font-normal text-ppp-text-muted">/mês</span>
            </div>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-ppp-text-muted">
              Tudo do Essencial, mais:
            </p>
            <ul className="mt-4 flex flex-1 flex-col gap-3">
              {premiumExtras.map((f) => <Feature key={f}>{f}</Feature>)}
            </ul>
            <div className="mt-8">
              <PppCTAButton variant="primary" className="w-full">
                Quero o Plano Premium
              </PppCTAButton>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center font-body text-xs font-light text-ppp-text-muted">
          Sem contrato. Cancele quando quiser. Processamento seguro.
        </p>
      </div>
    </section>
  );
}
