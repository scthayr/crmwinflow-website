"use client";

const cards = [
  { label: "Propostas em aberto", valor: "R$ 38.400,00" },
  { label: "Orçamentos enviados", valor: "12" },
  { label: "A receber", valor: "R$ 22.150,00" },
  { label: "Receita do mês", valor: "R$ 64.900,00" },
];

const meses = [
  { mes: "Fev", receita: 42, despesa: 28 },
  { mes: "Mar", receita: 51, despesa: 30 },
  { mes: "Abr", receita: 47, despesa: 33 },
  { mes: "Mai", receita: 58, despesa: 31 },
  { mes: "Jun", receita: 60, despesa: 35 },
  { mes: "Jul", receita: 65, despesa: 29 },
];

const transacoes = [
  { id: "1", data: "05/07", descricao: "Pagamento — Nortec Soluções", tipo: "Receita", valor: "R$ 12.000,00" },
  { id: "2", data: "04/07", descricao: "Assinatura de ferramentas", tipo: "Despesa", valor: "R$ 890,00" },
  { id: "3", data: "02/07", descricao: "Pagamento — Prado Design", tipo: "Receita", valor: "R$ 6.100,00" },
  { id: "4", data: "01/07", descricao: "Folha de pagamento", tipo: "Despesa", valor: "R$ 18.400,00" },
  { id: "5", data: "28/06", descricao: "Pagamento — Ramos & Cia", tipo: "Receita", valor: "R$ 4.200,00" },
];

export default function FinanceiroPage() {
  const maxValor = Math.max(...meses.flatMap((m) => [m.receita, m.despesa]));

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Financeiro</h1>
        <p className="text-sm text-muted-foreground">
          Propostas, orçamentos, receitas e despesas.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <p className="text-sm text-muted-foreground">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">
              {card.valor}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-medium">Receitas x despesas</h2>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" /> Receita
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-muted-foreground" /> Despesa
            </span>
          </div>
        </div>
        <div className="flex h-40 items-end gap-4">
          {meses.map((m) => (
            <div key={m.mes} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-32 items-end gap-1">
                <div
                  className="w-4 rounded-t bg-accent"
                  style={{ height: `${(m.receita / maxValor) * 100}%` }}
                />
                <div
                  className="w-4 rounded-t bg-muted-foreground/40"
                  style={{ height: `${(m.despesa / maxValor) * 100}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{m.mes}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Data</th>
              <th className="px-4 py-3 font-medium">Descrição</th>
              <th className="px-4 py-3 font-medium">Tipo</th>
              <th className="px-4 py-3 font-medium">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {transacoes.map((t) => (
              <tr key={t.id}>
                <td className="px-4 py-3 text-muted-foreground">{t.data}</td>
                <td className="px-4 py-3 font-medium">{t.descricao}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      t.tipo === "Receita"
                        ? "bg-emerald-500/15 text-emerald-500"
                        : "bg-red-500/15 text-red-500"
                    }`}
                  >
                    {t.tipo}
                  </span>
                </td>
                <td className="px-4 py-3">{t.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
