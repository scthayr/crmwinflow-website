"use client";

import { useState } from "react";

const tarefasIniciais = [
  { id: "1", titulo: "Enviar proposta comercial", responsavel: "Marina Souza", prazo: "08/07", prioridade: "Alta", concluida: false },
  { id: "2", titulo: "Ligar para cliente Ramos & Cia", responsavel: "Diego Fontes", prazo: "08/07", prioridade: "Média", concluida: false },
  { id: "3", titulo: "Atualizar contrato Nortec Soluções", responsavel: "Carla Nunes", prazo: "09/07", prioridade: "Alta", concluida: false },
  { id: "4", titulo: "Revisar cadastro de leads da semana", responsavel: "Marina Souza", prazo: "10/07", prioridade: "Baixa", concluida: true },
  { id: "5", titulo: "Preparar apresentação para Torres Logística", responsavel: "Diego Fontes", prazo: "11/07", prioridade: "Média", concluida: false },
];

const corPrioridade: Record<string, string> = {
  Alta: "bg-red-500/15 text-red-500",
  Média: "bg-amber-500/15 text-amber-500",
  Baixa: "bg-emerald-500/15 text-emerald-500",
};

export default function TarefasPage() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  function alternar(id: string) {
    setTarefas((atual) =>
      atual.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t)),
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Tarefas</h1>
          <p className="text-sm text-muted-foreground">
            Atividades da equipe com prazo e prioridade.
          </p>
        </div>
        <button className="btn-gradient rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90">
          Nova tarefa
        </button>
      </div>

      <ul className="flex flex-col gap-2">
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4"
          >
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => alternar(tarefa.id)}
              className="h-4 w-4 accent-[var(--accent)]"
            />
            <div className="flex-1">
              <p
                className={`font-medium ${tarefa.concluida ? "text-muted-foreground line-through" : ""}`}
              >
                {tarefa.titulo}
              </p>
              <p className="text-sm text-muted-foreground">
                {tarefa.responsavel} · prazo {tarefa.prazo}
              </p>
            </div>
            <span
              className={`rounded-full px-2 py-1 text-xs font-medium ${corPrioridade[tarefa.prioridade]}`}
            >
              {tarefa.prioridade}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
