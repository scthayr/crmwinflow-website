"use client";

const usuario = {
  nome: "Teste Preview",
  email: "preview.test@example.com",
  cargo: "Vendedor",
  membroDesde: "Julho de 2026",
};

const atividade = [
  { id: "1", texto: "Cliente Wrenlow Partners criado", data: "há 2 horas" },
  { id: "2", texto: "Negócio movido para Proposta", data: "ontem" },
  { id: "3", texto: "Tarefa \"Enviar contrato\" concluída", data: "há 2 dias" },
];

export default function PerfilPage() {
  const iniciais = usuario.nome
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Perfil</h1>
        <p className="text-sm text-muted-foreground">
          Suas informações e atividade recente.
        </p>
      </div>

      <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-xl font-semibold text-accent-foreground">
          {iniciais}
        </div>
        <div>
          <p className="text-lg font-medium">{usuario.nome}</p>
          <p className="text-sm text-muted-foreground">{usuario.email}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {usuario.cargo} · membro desde {usuario.membroDesde}
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="mb-4 font-medium">Atividade recente</h2>
        <ul className="flex flex-col gap-3">
          {atividade.map((item) => (
            <li key={item.id} className="flex justify-between text-sm">
              <span>{item.texto}</span>
              <span className="text-muted-foreground">{item.data}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
