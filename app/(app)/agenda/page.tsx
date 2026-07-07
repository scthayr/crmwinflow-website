"use client";

const dias = [
  {
    data: "Segunda-feira, 06/07",
    eventos: [
      { id: "1", hora: "09:00", tipo: "Reunião", titulo: "Onboarding Nortec Soluções", com: "Rafael Lima" },
      { id: "2", hora: "14:30", tipo: "Ligação", titulo: "Follow-up proposta", com: "Vinha Consultoria" },
    ],
  },
  {
    data: "Terça-feira, 07/07",
    eventos: [
      { id: "3", hora: "10:00", tipo: "Lembrete", titulo: "Enviar contrato", com: "Alves Contabilidade" },
      { id: "4", hora: "11:30", tipo: "Reunião", titulo: "Apresentação do produto", com: "Torres Logística" },
      { id: "5", hora: "16:00", tipo: "Ligação", titulo: "Renegociação de plano", com: "Ramos & Cia" },
    ],
  },
  {
    data: "Quarta-feira, 08/07",
    eventos: [
      { id: "6", hora: "09:30", tipo: "Reunião", titulo: "Reunião semanal do time", com: "Equipe comercial" },
    ],
  },
];

const corTipo: Record<string, string> = {
  Reunião: "bg-accent/15 text-accent",
  Ligação: "bg-emerald-500/15 text-emerald-500",
  Lembrete: "bg-amber-500/15 text-amber-500",
};

export default function AgendaPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Agenda</h1>
          <p className="text-sm text-muted-foreground">
            Reuniões, ligações e lembretes da semana.
          </p>
        </div>
        <button className="btn-gradient rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90">
          Novo compromisso
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {dias.map((dia) => (
          <div key={dia.data}>
            <h2 className="mb-3 text-sm font-medium text-muted-foreground">
              {dia.data}
            </h2>
            <div className="flex flex-col gap-2">
              {dia.eventos.map((evento) => (
                <div
                  key={evento.id}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4"
                >
                  <span className="w-14 shrink-0 text-sm font-medium text-muted-foreground">
                    {evento.hora}
                  </span>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${corTipo[evento.tipo]}`}
                  >
                    {evento.tipo}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium">{evento.titulo}</p>
                    <p className="text-sm text-muted-foreground">
                      {evento.com}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
