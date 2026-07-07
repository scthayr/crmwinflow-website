"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listarClientes, criarCliente, atualizarCliente } from "@/lib/api";

export default function ClientesPage() {
  const queryClient = useQueryClient();
  const [nome, setNome] = useState("");
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [nomeEditado, setNomeEditado] = useState("");

  const { data: clientes, isLoading, isError, error } = useQuery({
    queryKey: ["clientes"],
    queryFn: listarClientes,
  });

  const criarMutation = useMutation({
    mutationFn: () => criarCliente({ nome }),
    onSuccess: () => {
      setNome("");
      queryClient.invalidateQueries({ queryKey: ["clientes"] });
    },
  });

  const atualizarMutation = useMutation({
    mutationFn: () => atualizarCliente(editandoId!, { nome: nomeEditado }),
    onSuccess: () => {
      setEditandoId(null);
      queryClient.invalidateQueries({ queryKey: ["clientes"] });
    },
  });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Clientes</h1>
        <p className="text-sm text-muted-foreground">
          Cadastre e gerencie os clientes da sua base.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          criarMutation.mutate();
        }}
        className="flex gap-2 rounded-2xl border border-border bg-card p-4"
      >
        <input
          type="text"
          placeholder="Nome do novo cliente"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <button
          type="submit"
          disabled={criarMutation.isPending}
          className="btn-gradient rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          Adicionar
        </button>
      </form>

      {isLoading && (
        <p className="text-sm text-muted-foreground">Carregando clientes...</p>
      )}
      {isError && (
        <p className="text-sm text-red-500">Erro: {error.message}</p>
      )}

      {!isLoading && !isError && (
        <ul className="flex flex-col gap-2">
          {clientes.map((cliente: any) => (
            <li
              key={cliente.id}
              className="rounded-xl border border-border bg-card px-4 py-3"
            >
              {editandoId === cliente.id ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    atualizarMutation.mutate();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={nomeEditado}
                    onChange={(e) => setNomeEditado(e.target.value)}
                    className="flex-1 rounded-lg border border-border bg-background px-2 py-1 text-sm outline-none focus:border-accent"
                    autoFocus
                  />
                  <button type="submit" className="text-sm font-medium text-accent">
                    Salvar
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditandoId(null)}
                    className="text-sm text-muted-foreground"
                  >
                    Cancelar
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{cliente.nome}</p>
                    <p className="text-sm text-muted-foreground">
                      {cliente.email}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setEditandoId(cliente.id);
                      setNomeEditado(cliente.nome);
                    }}
                    className="text-sm font-medium text-accent"
                  >
                    Editar
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
