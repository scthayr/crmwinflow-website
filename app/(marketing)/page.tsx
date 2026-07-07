import Link from "next/link";

const recursos = [
  {
    title: "Gestão de clientes",
    description:
      "Centralize contatos, empresas e histórico de relacionamento em um só lugar.",
  },
  {
    title: "Funil de vendas",
    description:
      "Acompanhe oportunidades do primeiro contato até o fechamento.",
  },
  {
    title: "Painel de indicadores",
    description:
      "Veja em tempo real quantos clientes, negócios e receita sua equipe está gerando.",
  },
  {
    title: "Acesso por equipe",
    description:
      "Cada vendedor vê o que precisa, sem perder a visão geral da gestão.",
  },
];

const beneficios = [
  "Menos planilhas soltas e informação perdida no WhatsApp",
  "Onboarding de clientes novos em minutos, não em dias",
  "Time comercial alinhado sobre o status de cada negociação",
  "Histórico completo disponível para qualquer atendimento",
];

const planos = [
  {
    nome: "Starter",
    preco: "Grátis",
    descricao: "Para times pequenos começando a organizar o comercial.",
    itens: ["Até 3 usuários", "Gestão de clientes", "Suporte por e-mail"],
    destaque: false,
  },
  {
    nome: "Pro",
    preco: "R$ 99/mês",
    descricao: "Para equipes de vendas que precisam de mais controle.",
    itens: [
      "Usuários ilimitados",
      "Funil de vendas completo",
      "Relatórios e exportação",
      "Suporte prioritário",
    ],
    destaque: true,
  },
  {
    nome: "Empresarial",
    preco: "Sob consulta",
    descricao: "Para operações maiores, com necessidades específicas.",
    itens: ["Tudo do Pro", "Permissões avançadas", "Integrações dedicadas"],
    destaque: false,
  },
];

const depoimentos = [
  {
    nome: "Marina Souza",
    cargo: "Gerente comercial",
    texto:
      "Saímos das planilhas para o Winflow em uma semana. Hoje sabemos exatamente em que pé cada negociação está.",
  },
  {
    nome: "Diego Fontes",
    cargo: "Fundador",
    texto:
      "O que mais gosto é a simplicidade. O time adotou sem treinamento nenhum.",
  },
  {
    nome: "Carla Nunes",
    cargo: "Coordenadora de atendimento",
    texto:
      "Ter o histórico do cliente na mão em segundos mudou a qualidade do nosso atendimento.",
  },
];

const faq = [
  {
    pergunta: "Preciso instalar algo para usar o Winflow?",
    resposta: "Não. O sistema roda inteiramente no navegador, sem instalação.",
  },
  {
    pergunta: "Dá para importar clientes que já tenho em planilha?",
    resposta:
      "Sim, oferecemos suporte para importação assistida durante o onboarding.",
  },
  {
    pergunta: "Posso cancelar quando quiser?",
    resposta: "Sim, não há fidelidade em nenhum dos planos pagos.",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          Novo · painel de indicadores em tempo real
        </span>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Winflow, o CRM simples para vender mais e perder menos clientes
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Organize clientes, acompanhe negociações e veja o desempenho do seu
          time comercial em um painel só, sem complicação.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/login"
            className="btn-gradient rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Teste grátis
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted"
          >
            Entrar
          </Link>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Tudo que o seu time comercial precisa
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recursos.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 h-8 w-8 rounded-lg bg-accent" />
                <h3 className="font-medium">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Por que trocar a planilha pelo Winflow
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {beneficios.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs text-accent-foreground">
                  ✓
                </span>
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Planos para cada tamanho de time
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {planos.map((p) => (
              <div
                key={p.nome}
                className={`flex flex-col rounded-2xl border p-8 ${
                  p.destaque
                    ? "border-accent bg-card ring-1 ring-accent"
                    : "border-border bg-card"
                }`}
              >
                {p.destaque && (
                  <span className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    Mais popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.nome}</h3>
                <p className="mt-1 text-2xl font-semibold">{p.preco}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.descricao}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-2 text-sm text-muted-foreground">
                  {p.itens.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/login"
                  className={`mt-8 rounded-full px-4 py-2.5 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                    p.destaque ? "btn-gradient" : "border border-border"
                  }`}
                >
                  Começar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Times que já usam
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {depoimentos.map((d) => (
              <figure
                key={d.nome}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <blockquote className="text-sm text-muted-foreground">
                  “{d.texto}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium">
                  {d.nome}
                  <span className="block font-normal text-muted-foreground">
                    {d.cargo}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Perguntas frequentes
          </h2>
          <div className="mt-8 flex flex-col divide-y divide-border">
            {faq.map((f) => (
              <details key={f.pergunta} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  {f.pergunta}
                  <span className="text-muted-foreground group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">
                  {f.resposta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Pronto para organizar suas vendas?
          </h2>
          <Link
            href="/login"
            className="btn-gradient rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Teste grátis
          </Link>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Winflow. Todos os direitos reservados.
      </footer>
    </div>
  );
}
