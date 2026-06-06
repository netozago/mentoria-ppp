import { GoldDivider } from "@/components/ppp/shared/GoldDivider";

export function ProblemSection() {
  return (
    <section className="bg-ppp-abyss">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
        <GoldDivider />
        <h2 className="mt-8 font-display text-3xl font-semibold italic text-ppp-text-primary md:text-4xl">
          Por que um curso de R$1.000 não resolve?
        </h2>
        <GoldDivider className="mt-8" />

        <div className="mt-10 space-y-7 text-left font-body text-lg leading-[1.9] text-ppp-text-secondary md:text-center">
          <p>
            Você compra um curso. Assiste com entusiasmo. Tenta aplicar. Esbarra em uma
            dúvida específica do seu contexto. E não tem ninguém para responder.
          </p>
          <p>
            A psicologia é uma carreira de longo prazo. Posicionamento, agenda,
            precificação, captação... nada disso se resolve com um treinamento pontual.
          </p>
          <p className="font-display italic text-ppp-text-primary">
            O que você precisa é de evolução contínua, com alguém que já fez o caminho.
          </p>
        </div>
      </div>
    </section>
  );
}
