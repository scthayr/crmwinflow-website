"use client";

const leads = [
  {
    id: "1",
    nome: "Rafael Lima",
    empresa: "Nortec Soluções",
    origem: "Site",
    interesse: "Plano Pro",
    responsavel: "Marina Souza",
    prioridade: "Alta",
    status: "Qualificado",
  },
  {
    id: "2",
    nome: "Bianca Alves",
    empresa: "Alves Contabilidade",
    origem: "Indicação",
    interesse: "Plano Starter",
    responsavel: "Diego Fontes",
    prioridade: "Média",
    status: "Em contato",
  },
  {
    id: "3",
    nome: "Felipe Torres",
    empresa: "Torres Logística",
    origem: "Instagram",
    interesse: "Plano Empresarial",
    responsavel: "Marina Souza",
    prioridade: "Alta",
    status: "Novo",
  },
  {
    id: "4",
    nome: "Juliana Prado",
    empresa: "Prado Design",
    origem: "Indicação",
    interesse: "Plano Pro",
    responsavel: "Carla Nunes",
    prioridade: "Baixa",
    status: "Convertido",
  },
  {
    id: "5",
    nome: "Otávio Ramos",
    empresa: "Ramos & Cia",
    origem: "LinkedIn",
    interesse: "Plano Starter",
    responsavel: "Diego Fontes",
    prioridade: "Média",
    status: "Perdido",
  },
];

const corPrioridade: Record<string, string> = {
  Alta: "bg-red-500/15 text-red-500",
  Média: "bg-amber-500/15 text-amber-500",
  Baixa: "bg-emerald-500/15 text-emerald-500",
};

const corStatus: Record<string, string> = {
  Novo: "bg-muted text-muted-foreground",
  "Em contato": "bg-accent/15 text-accent",
  Qualificado: "bg-accent/15 text-accent",
  Convertido: "bg-emerald-500/15 text-emerald-500",
  Perdido: "bg-red-500/15 text-red-500",
};

export default function LeadsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Leads</h1>
          <p className="text-sm text-muted-foreground">
            Potenciais clientes desde o primeiro contato até a conversão.
          </p>
        </div>
        <button className="btn-gradient rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90">
          Novo lead
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Nome</th>
              <th className="px-4 py-3 font-medium">Empresa</th>
              <th className="px-4 py-3 font-medium">Origem</th>
              <th className="px-4 py-3 font-medium">Interesse</th>
              <th className="px-4 py-3 font-medium">Responsável</th>
              <th className="px-4 py-3 font-medium">Prioridade</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="px-4 py-3 font-medium">{lead.nome}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {lead.empresa}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {lead.origem}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {lead.interesse}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {lead.responsavel}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${corPrioridade[lead.prioridade]}`}
                  >
                    {lead.prioridade}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${corStatus[lead.status]}`}
                  >
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
