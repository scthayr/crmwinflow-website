"use client";

import { useQuery } from "@tanstack/react-query";
import { listarClientes, listarVendas } from "@/lib/api";

type Cliente = { id: string; nome: string };
type Venda = { id: string; valor: number; status: string };

function formatarMoeda(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function DashboardPage() {
  const clientesQuery = useQuery({
    queryKey: ["clientes"],
    queryFn: listarClientes,
  });

  const vendasQuery = useQuery({
    queryKey: ["vendas"],
    queryFn: listarVendas,
  });

  const isLoading = clientesQuery.isLoading || vendasQuery.isLoading;
  const isError = clientesQuery.isError || vendasQuery.isError;

  const clientes: Cliente[] = clientesQuery.data ?? [];
  const vendas: Venda[] = vendasQuery.data ?? [];

  const negociosAbertos = vendas.filter((v) => v.status === "aberta").length;
  const receitaTotal = vendas.reduce((total, v) => total + (v.valor ?? 0), 0);

  const cards = [
    { label: "Clientes", valor: clientes.length },
    { label: "Negócios", valor: vendas.length },
    { label: "Em aberto", valor: negociosAbertos },
    { label: "Receita total", valor: formatarMoeda(receitaTotal) },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Visão geral do seu comercial.
        </p>
      </div>

      {isLoading && (
        <p className="text-sm text-muted-foreground">Carregando indicadores...</p>
      )}

      {isError && (
        <p className="text-sm text-red-500">
          Não foi possível carregar os dados. Verifique se você está logado.
        </p>
      )}

      {!isLoading && !isError && (
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
      )}
    </div>
  );
}
