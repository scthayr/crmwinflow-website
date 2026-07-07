"use client";

const empresas = [
  {
    id: "1",
    nome: "Nortec Soluções",
    segmento: "Tecnologia",
    cidade: "Curitiba, PR",
    contatoPrincipal: "Rafael Lima",
    clientesVinculados: 3,
  },
  {
    id: "2",
    nome: "Alves Contabilidade",
    segmento: "Serviços financeiros",
    cidade: "São Paulo, SP",
    contatoPrincipal: "Bianca Alves",
    clientesVinculados: 1,
  },
  {
    id: "3",
    nome: "Torres Logística",
    segmento: "Transporte",
    cidade: "Joinville, SC",
    contatoPrincipal: "Felipe Torres",
    clientesVinculados: 5,
  },
  {
    id: "4",
    nome: "Prado Design",
    segmento: "Criação e design",
    cidade: "Belo Horizonte, MG",
    contatoPrincipal: "Juliana Prado",
    clientesVinculados: 2,
  },
  {
    id: "5",
    nome: "Ramos & Cia",
    segmento: "Varejo",
    cidade: "Porto Alegre, RS",
    contatoPrincipal: "Otávio Ramos",
    clientesVinculados: 4,
  },
  {
    id: "6",
    nome: "Vinha Consultoria",
    segmento: "Consultoria empresarial",
    cidade: "Recife, PE",
    contatoPrincipal: "Helena Vinha",
    clientesVinculados: 2,
  },
];

export default function EmpresasPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Empresas</h1>
          <p className="text-sm text-muted-foreground">
            Organizações vinculadas aos seus clientes e leads.
          </p>
        </div>
        <button className="btn-gradient rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90">
          Nova empresa
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {empresas.map((empresa) => (
          <div
            key={empresa.id}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="font-medium">{empresa.nome}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {empresa.segmento}
            </p>
            <dl className="mt-4 flex flex-col gap-1.5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="shrink-0 text-muted-foreground">Cidade</dt>
                <dd className="text-right">{empresa.cidade}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="shrink-0 text-muted-foreground">Contato</dt>
                <dd className="text-right">{empresa.contatoPrincipal}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="shrink-0 text-muted-foreground">Clientes</dt>
                <dd className="text-right">{empresa.clientesVinculados}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
