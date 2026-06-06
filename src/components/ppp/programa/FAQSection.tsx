import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim. Não há contrato de fidelidade. Cancele com um clique no painel do membro, sem burocracia e sem penalidades.",
  },
  {
    q: "Os encontros ao vivo são gravados?",
    a: "Sim. Membros que não puderem participar ao vivo têm acesso à gravação completa de cada sessão na área de membros.",
  },
  {
    q: "Qual a diferença real entre os dois planos?",
    a: "O plano Base dá acesso a toda a estrutura de conteúdo e comunidade. O Premium adiciona atenção individualizada de Neto, incluindo sessão trimestral individual e revisão do seu posicionamento digital.",
  },
  {
    q: "O programa substitui terapia pessoal ou supervisão clínica?",
    a: "Não. O PPP é focado exclusivamente em carreira e negócios. Não substitui supervisão clínica, que é uma necessidade à parte.",
  },
  {
    q: "Posso participar se não tiver Instagram ou redes sociais?",
    a: "Sim. O programa aborda redes sociais como uma das trilhas, mas não é pré-requisito.",
  },
  {
    q: "Há quanto tempo o PPP está rodando?",
    a: "O programa está em operação desde janeiro de 2024. Esta é uma das primeiras turmas, com preço e condições especiais de fundadores.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-ppp-abyss">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <h2 className="text-center font-display text-4xl font-bold text-ppp-text-primary md:text-5xl">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-ppp-border">
              <AccordionTrigger className="text-left font-display text-lg text-ppp-text-primary hover:text-ppp-gold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-base leading-relaxed text-ppp-text-secondary">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
