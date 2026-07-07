"use client";

const equipe = [
  { id: "1", nome: "Marina Souza", email: "marina@winflow.com", cargo: "Gerente", status: "Ativo", vendasMes: 14 },
  { id: "2", nome: "Diego Fontes", email: "diego@winflow.com", cargo: "Vendedor", status: "Ativo", vendasMes: 11 },
  { id: "3", nome: "Carla Nunes", email: "carla@winflow.com", cargo: "Vendedor", status: "Ativo", vendasMes: 9 },
  { id: "4", nome: "Helena Vinha", email: "helena@winflow.com", cargo: "Administrador", status: "Ativo", vendasMes: 6 },
  { id: "5", nome: "Bruno Castro", email: "bruno@winflow.com", cargo: "Vendedor", status: "Inativo", vendasMes: 0 },
];

const corCargo: Record<string, string> = {
  Administrador: "bg-accent/15 text-accent",
  Gerente: "bg-amber-500/15 text-amber-500",
  Vendedor: "bg-muted text-muted-foreground",
};

export default function EquipePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Equipe</h1>
          <p className="text-sm text-muted-foreground">
            Usuários, papéis e produtividade do time.
          </p>
        </div>
        <button className="btn-gradient rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90">
          Convidar usuário
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Nome</th>
              <th className="px-4 py-3 font-medium">E-mail</th>
              <th className="px-4 py-3 font-medium">Cargo</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Vendas no mês</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {equipe.map((membro) => (
              <tr key={membro.id}>
                <td className="px-4 py-3 font-medium">{membro.nome}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {membro.email}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${corCargo[membro.cargo]}`}
                  >
                    {membro.cargo}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      membro.status === "Ativo"
                        ? "bg-emerald-500/15 text-emerald-500"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {membro.status}
                  </span>
                </td>
                <td className="px-4 py-3">{membro.vendasMes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
