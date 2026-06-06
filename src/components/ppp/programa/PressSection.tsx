const press = [
  {
    img: "/news-1.png",
    outlet: "Jornal Portugal",
    title: "Quando o Amor Vira Medo: Como a Insegurança Está Destruindo Relacionamentos em Silêncio",
    href: "https://jornalportugal.com/quando-o-amor-vira-medo-como-a-inseguranca-esta-destruindo-relacionamentos-em-silencio/",
  },
  {
    img: "/news-2.png",
    outlet: "Diário São Paulo",
    title: "Como identificar e sair de um relacionamento tóxico",
    href: "https://diariosaopaulo.com/como-identificar-e-sair-de-um-relacionamento-toxico/",
  },
  {
    img: "/news-3.png",
    outlet: "Gazeta São Paulo",
    title: "A ansiedade silenciosa de quem cuida: quando o sofrimento de um filho adoece a família",
    href: "https://gazetasaopaulo.com/a-ansiedade-silenciosa-de-quem-cuida-quando-o-sofrimento-de-um-filho-ou-do-companheiroa-adoece-emocionalmente-a-familia-2/",
  },
];

export function PressSection() {
  return (
    <section className="bg-ppp-void">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="text-center">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-ppp-gold">
            ✦ Na Imprensa
          </div>
          <h2 className="mt-4 font-display text-3xl italic text-ppp-text-primary md:text-4xl">
            Reportagens com Neto Zago
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-ppp-text-secondary">
            Veículos de comunicação no Brasil e em Portugal procuram Neto para
            traduzir temas complexos da psicologia em conteúdo de utilidade pública.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {press.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl border border-ppp-border bg-ppp-depth transition-all hover:border-ppp-gold/50 hover:shadow-gold"
            >
              <div className="overflow-hidden bg-ppp-surface">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ppp-gold">
                  {p.outlet}
                </div>
                <h3 className="mt-3 font-display text-lg leading-snug text-ppp-text-primary">
                  {p.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
