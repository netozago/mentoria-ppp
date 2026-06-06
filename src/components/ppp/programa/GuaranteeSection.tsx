import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="bg-ppp-depth">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <div className="relative card-gold-top rounded-3xl border border-ppp-gold/40 bg-ppp-surface/40 p-10 md:p-14">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-ppp-gold/10 via-transparent to-ppp-gold/5 blur-xl" aria-hidden />
          <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-ppp-gold/30 bg-ppp-gold/10" aria-hidden>
              <ShieldCheck className="h-10 w-10 text-ppp-gold" />
            </div>
            <div className="text-center md:text-left">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-ppp-gold">
                Garantia Incondicional
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-ppp-text-primary md:text-4xl">
                30 Dias para Membros Novos
              </h2>
              <p className="mt-5 font-body leading-relaxed text-ppp-text-secondary">
                Assine, participe do primeiro encontro ao vivo, explore a comunidade e
                acesse o conteúdo por 30 dias. Se não sentir que o programa é para você,
                devolvemos 100% da primeira mensalidade.{" "}
                <span className="text-ppp-gold">Sem perguntas.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
