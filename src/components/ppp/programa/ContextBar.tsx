export function ContextBar() {
  return (
    <div className="border-b border-ppp-border bg-ppp-void">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <img src="/logo_neto_zago_ppp.png" alt="PPP Logo" className="h-8 w-auto" />
        <span className="hidden font-mono text-xs text-ppp-text-muted sm:block">
          Você acabou de assistir a masterclass. O próximo passo é este.
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ppp-text-muted">
          Programa
        </span>
      </div>
    </div>
  );
}
