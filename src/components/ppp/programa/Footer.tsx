export function Footer() {
  return (
    <footer className="border-t border-ppp-border bg-ppp-void">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-3">
          <img src="/logo_neto_zago_ppp.png" alt="PPP Logo" className="h-10 w-auto" />
        </div>
        <div className="font-mono text-[11px] text-ppp-text-muted">
          © {new Date().getFullYear()} Neto Zago · Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
