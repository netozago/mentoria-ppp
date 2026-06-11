import { PppBadge } from "@/components/ppp/shared/PppBadge";
import { GoldDivider } from "@/components/ppp/shared/GoldDivider";

const credentials = [
  { v: "8+", l: "Anos de clínica" },
  { v: "600+", l: "Pacientes atendidos" },
  { v: "7", l: "Países diferentes" },
];

const highlights = [
  "Psicólogo clínico com atuação no Brasil e nos EUA.",
  "Referência em posicionamento profissional na área da psicologia.",
  "Suas falas são referência na imprensa brasileira e portuguesa.",
];

export function AuthoritySection() {
  return (
    <section className="bg-ppp-abyss">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-ppp-gold/30 via-transparent to-ppp-gold/10 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-ppp-gold/30 shadow-gold-lg">
              <img
                src="/Neto_Zago_PPP.jpeg"
                alt="Neto Zago, psicólogo e mentor"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ppp-void via-ppp-void/70 to-transparent p-6">
                <div className="font-display text-2xl text-ppp-text-primary">Neto Zago</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ppp-gold">
                  Psicólogo · Mentor · Fundador do PPP
                </div>
              </div>
            </div>
          </div>

          <div>
            <PppBadge>✦ Quem conduz o PPP</PppBadge>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-ppp-text-primary md:text-5xl">
              <span className="text-gold-gradient">Paulo Zago Neto</span>, mais conhecido como Neto Zago
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-ppp-text-secondary">
              Psicólogo clínico, mais de 8 anos de clínica, mais de 600 pacientes atendidos em 7 países diferentes.
              Referência em posicionamento profissional na área da psicologia, com atuação no Brasil e nos EUA. Suas falas sobre carreira, saúde emocional e relacionamentos são referência na imprensa brasileira e portuguesa.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ppp-gold" />
                  <span className="font-body text-base leading-relaxed text-ppp-text-secondary">{h}</span>
                </li>
              ))}
            </ul>

            <GoldDivider className="my-8 mx-0 max-w-[80px]" />

            <div className="mt-8 flex flex-wrap gap-x-12 gap-y-6">
              {credentials.map((c) => (
                <div key={c.l}>
                  <div className="font-display text-3xl font-bold text-gold-gradient">{c.v}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ppp-text-muted">
                    {c.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
