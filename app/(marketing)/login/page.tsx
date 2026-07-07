"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const mutation = useMutation({
    mutationFn: () => login(email, senha),
    onSuccess: (data) => {
      localStorage.setItem("token", data.access_token);
      router.push("/dashboard");
    },
  });

  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate();
        }}
        className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-border bg-card p-8"
      >
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Entrar</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Acesse o painel da sua conta Winflow.
          </p>
        </div>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />

        <button
          type="submit"
          disabled={mutation.isPending}
          className="btn-gradient rounded-lg px-3 py-2 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {mutation.isPending ? "Entrando..." : "Entrar"}
        </button>

        {mutation.isError && (
          <p className="text-sm text-red-500">{mutation.error.message}</p>
        )}
      </form>
    </div>
  );
}
