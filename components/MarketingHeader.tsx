import Link from "next/link";
import { Logo } from "@/components/Logo";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#recursos" className="hover:text-foreground">
            Recursos
          </a>
          <a href="#planos" className="hover:text-foreground">
            Planos
          </a>
          <a href="#depoimentos" className="hover:text-foreground">
            Depoimentos
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Entrar
          </Link>
          <Link
            href="/login"
            className="btn-gradient rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Teste grátis
          </Link>
        </div>
      </div>
    </header>
  );
}
