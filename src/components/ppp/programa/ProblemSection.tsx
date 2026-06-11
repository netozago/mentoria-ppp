import { GoldDivider } from "@/components/ppp/shared/GoldDivider";

export function ProblemSection() {
  return (
    <section className="bg-ppp-abyss">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
        <GoldDivider />
        <h2 className="mt-8 font-display text-3xl font-semibold italic text-ppp-text-primary md:text-4xl">
          Para quem é o Programa Psicólogo Próspero?
        </h2>
        <p className="mt-4 font-display text-xl text-ppp-text-primary">
          Para psicólogos que querem construir carreiras de alto valor, ajudar pessoas e ser bem remunerado por isso.
        </p>
        <GoldDivider className="mt-8" />

        <div className="mt-10 space-y-7 text-left font-body text-lg leading-[1.9] text-ppp-text-secondary md:text-center">
          <p className="font-display italic text-ppp-text-primary text-2xl">
            O PPP resolve uma carreira.
          </p>
          <p>
            Você já sabe que precisa de posicionamento, de agenda própria, de independência do plano de saúde. O que falta não é mais informação - é acompanhamento contínuo, com alguém que já fez o caminho e uma comunidade que pensa igual a você.
          </p>
          <p>
            E é exatamente isso que eu vou entregar para você através do PPP.
          </p>
        </div>
      </div>
    </section>
  );
}
