import { PppCTAButton } from "@/components/ppp/shared/PppCTAButton";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div
        aria-hidden
        className="absolute inset-0 hero-grid opacity-30"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-ppp-gold/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
        <h2 className="font-display text-3xl font-bold leading-tight text-ppp-text-primary md:text-5xl lg:text-6xl">
          <span className="md:whitespace-nowrap">Todo Mês, Um Passo a Mais na</span>
          <br />
          <span className="text-gold-gradient md:whitespace-nowrap">Carreira que Você Merece</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-lg font-body text-lg text-ppp-text-secondary">
          Junte-se aos psicólogos que estão construindo carreiras de alto valor.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PppCTAButton variant="primary">QUERO ENTRAR AGORA</PppCTAButton>
        </div>

        <p className="mt-6 text-center font-mono text-xs text-ppp-text-muted">
          Cancele quando quiser · Garantia de 30 dias · Pagamento seguro
        </p>
      </div>
    </section>
  );
}
