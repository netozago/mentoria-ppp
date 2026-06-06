import { PppBadge } from "@/components/ppp/shared/PppBadge";
import { GoldDivider } from "@/components/ppp/shared/GoldDivider";

const credentials = [
  { v: "15+", l: "Anos de clínica" },
  { v: "2.000+", l: "Psicólogos mentorados" },
  { v: "Brasil/EUA", l: "Atuação internacional" },
];

const highlights = [
  "Psicólogo clínico, mestre e especialista em comportamento humano aplicado à carreira.",
  "Mentor de psicólogos que faturam de 5 a 6 dígitos mensais com consultórios próprios.",
  "Palestrante e referência em posicionamento profissional para a área da psicologia.",
  "Atende clientes no Brasil e nos Estados Unidos, com prática validada em ambos os mercados.",
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
            <PppBadge>✦ Quem conduz o Programa</PppBadge>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-ppp-text-primary md:text-5xl">
              <span className="text-gold-gradient">Neto Zago</span>, autoridade em
              psicologia de alto valor.
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-ppp-text-secondary">
              Há mais de uma década formando psicólogos que constroem carreiras
              sólidas, lucrativas e alinhadas ao próprio propósito. Suas falas sobre
              relacionamentos, ansiedade e saúde emocional são referência na imprensa
              brasileira.
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
