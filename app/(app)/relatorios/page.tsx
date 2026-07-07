"use client";

const indicadores = [
  { label: "Taxa de conversão de leads", valor: "24%" },
  { label: "Ticket médio", valor: "R$ 6.850,00" },
  { label: "Ciclo médio de venda", valor: "18 dias" },
  { label: "Crescimento no trimestre", valor: "+12%" },
];

const vendasPorMes = [
  { mes: "Fev", valor: 32 },
  { mes: "Mar", valor: 41 },
  { mes: "Abr", valor: 38 },
  { mes: "Mai", valor: 47 },
  { mes: "Jun", valor: 52 },
  { mes: "Jul", valor: 60 },
];

const funil = [
  { etapa: "Leads gerados", valor: 100 },
  { etapa: "Contato realizado", valor: 72 },
  { etapa: "Qualificados", valor: 48 },
  { etapa: "Propostas enviadas", valor: 30 },
  { etapa: "Fechados", valor: 18 },
];

export default function RelatoriosPage() {
  const maxVenda = Math.max(...vendasPorMes.map((v) => v.valor));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Relatórios</h1>
          <p className="text-sm text-muted-foreground">
            Vendas, conversão e desempenho da equipe.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
            Exportar PDF
          </button>
          <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
            Exportar Excel
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {indicadores.map((i) => (
          <div
            key={i.label}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <p className="text-sm text-muted-foreground">{i.label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">
              {i.valor}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="mb-6 font-medium">Vendas por mês</h2>
          <div className="flex h-40 items-end gap-3">
            {vendasPorMes.map((v) => (
              <div key={v.mes} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-32 w-full items-end">
                  <div
                    className="w-full rounded-t bg-accent"
                    style={{ height: `${(v.valor / maxVenda) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{v.mes}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="mb-6 font-medium">Funil de conversão</h2>
          <div className="flex flex-col gap-3">
            {funil.map((f) => (
              <div key={f.etapa}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-muted-foreground">{f.etapa}</span>
                  <span className="font-medium">{f.valor}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-accent"
                    style={{ width: `${f.valor}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
