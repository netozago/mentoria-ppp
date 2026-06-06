import { PppBadge } from "@/components/ppp/shared/PppBadge";
import { PppCTAButton } from "@/components/ppp/shared/PppCTAButton";
import { AvatarGroup } from "@/components/ppp/shared/AvatarGroup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ppp-void min-h-screen flex items-center">
      {/* Imagem de Fundo Mobile */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-bottom bg-no-repeat opacity-100 lg:hidden"
        style={{ backgroundImage: "url('/hero_bg_neto_zago_mobile.png')" }}
        aria-hidden
      />

      {/* Imagem de Fundo Desktop */}
      <div
        className="absolute inset-0 z-0 hidden bg-cover bg-right bg-no-repeat lg:block"
        style={{ backgroundImage: "url('/hero_bg_neto_zago.png')" }}
        aria-hidden
      />

      {/* Gradientes */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ppp-void from-40% via-ppp-void/80 via-60% to-ppp-void/30 lg:hidden" aria-hidden />
      <div className="absolute inset-0 z-0 hidden w-2/3 bg-gradient-to-r from-ppp-void via-ppp-void/70 to-transparent lg:block" aria-hidden />

      <div className="absolute inset-0 hero-grid opacity-30 z-0" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ppp-gold/40 to-transparent z-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl text-left">
          <PppBadge>✦ PPP - Programa Psicólogo Próspero</PppBadge>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-ppp-text-primary md:text-5xl lg:text-[3.5rem]">
            O Único Lugar onde Psicólogos Aprendem a Construir Carreiras de{" "}
            <span className="text-gold-gradient">Alto Valor</span>.
          </h1>

          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ppp-text-secondary">
            Mentoria contínua, comunidade privada, estudos de caso reais e plano de
            crescimento individualizado todo mês, com Neto Zago.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <PppCTAButton variant="primary">QUERO ENTRAR AGORA</PppCTAButton>
          </div>

          <p className="mt-4 font-body text-xs font-light text-ppp-text-muted">
            🔒 Cancele a qualquer momento · Sem fidelidade · Sem taxas de Cancelamento
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-6">
            {[
              { v: "120+", l: "Membros Ativos" },
              { v: "Jan/2024", l: "Em operação desde" },
              { v: "92%", l: "Renovam todo mês" },
            ].map((s) => (
              <div key={s.l} className="text-left">
                <div className="font-display text-3xl font-bold text-gold-gradient">{s.v}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ppp-text-muted">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3">
            <AvatarGroup
              avatars={[
                { initials: "AC" }, { initials: "RS" }, { initials: "LB" },
                { initials: "MT" }, { initials: "PF" }, { initials: "CM" },
                { initials: "DR" }, { initials: "JK" },
              ]}
            />
            <span className="font-mono text-xs text-ppp-text-secondary">
              Junte-se a 120+ psicólogos no programa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
