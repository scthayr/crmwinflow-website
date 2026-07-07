"use client";

import { useState } from "react";

type Negocio = {
  id: string;
  cliente: string;
  valor: number;
  responsavel: string;
};

const colunasIniciais: { id: string; titulo: string; negocios: Negocio[] }[] = [
  {
    id: "lead",
    titulo: "Lead",
    negocios: [
      { id: "1", cliente: "Torres Logística", valor: 8500, responsavel: "Marina" },
      { id: "2", cliente: "Ramos & Cia", valor: 4200, responsavel: "Diego" },
    ],
  },
  {
    id: "contato",
    titulo: "Contato",
    negocios: [
      { id: "3", cliente: "Nortec Soluções", valor: 12000, responsavel: "Marina" },
    ],
  },
  {
    id: "qualificado",
    titulo: "Qualificado",
    negocios: [
      { id: "4", cliente: "Alves Contabilidade", valor: 3800, responsavel: "Carla" },
      { id: "5", cliente: "Prado Design", valor: 6100, responsavel: "Diego" },
    ],
  },
  {
    id: "proposta",
    titulo: "Proposta",
    negocios: [
      { id: "6", cliente: "Vinha Consultoria", valor: 15400, responsavel: "Marina" },
    ],
  },
  {
    id: "negociacao",
    titulo: "Negociação",
    negocios: [
      { id: "7", cliente: "Wrenlow Partners", valor: 9800, responsavel: "Carla" },
    ],
  },
  {
    id: "fechado",
    titulo: "Fechado",
    negocios: [
      { id: "8", cliente: "Bianca Alves", valor: 4500, responsavel: "Diego" },
    ],
  },
  {
    id: "perdido",
    titulo: "Perdido",
    negocios: [],
  },
];

function formatarMoeda(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function PipelinePage() {
  const [colunas, setColunas] = useState(colunasIniciais);

  function moverNegocio(negocioId: string, colunaDestinoId: string) {
    setColunas((atual) => {
      let negocioMovido: Negocio | undefined;
      const semNegocio = atual.map((coluna) => {
        const encontrado = coluna.negocios.find((n) => n.id === negocioId);
        if (encontrado) negocioMovido = encontrado;
        return {
          ...coluna,
          negocios: coluna.negocios.filter((n) => n.id !== negocioId),
        };
      });

      if (!negocioMovido) return atual;

      return semNegocio.map((coluna) =>
        coluna.id === colunaDestinoId
          ? { ...coluna, negocios: [...coluna.negocios, negocioMovido!] }
          : coluna,
      );
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Pipeline</h1>
        <p className="text-sm text-muted-foreground">
          Arraste os cartões entre as etapas para atualizar o funil de vendas.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {colunas.map((coluna) => (
          <div
            key={coluna.id}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const negocioId = e.dataTransfer.getData("text/plain");
              moverNegocio(negocioId, coluna.id);
            }}
            className="flex w-72 shrink-0 flex-col gap-3 rounded-2xl border border-border bg-card p-3"
          >
            <div className="flex items-center justify-between px-1">
              <h3 className="text-sm font-medium">{coluna.titulo}</h3>
              <span className="text-xs text-muted-foreground">
                {coluna.negocios.length}
              </span>
            </div>

            <div className="flex min-h-16 flex-col gap-2">
              {coluna.negocios.map((negocio) => (
                <div
                  key={negocio.id}
                  draggable
                  onDragStart={(e) =>
                    e.dataTransfer.setData("text/plain", negocio.id)
                  }
                  className="cursor-grab rounded-xl border border-border bg-background p-3 text-sm active:cursor-grabbing"
                >
                  <p className="font-medium">{negocio.cliente}</p>
                  <p className="mt-1 text-accent">
                    {formatarMoeda(negocio.valor)}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {negocio.responsavel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
