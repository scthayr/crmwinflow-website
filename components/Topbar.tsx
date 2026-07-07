"use client";

import { useRouter } from "next/navigation";

export function Topbar() {
  const router = useRouter();

  function logout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6">
      <input
        type="search"
        placeholder="Buscar clientes, negócios..."
        disabled
        className="w-full max-w-xs rounded-lg border border-border bg-muted px-3 py-2 text-sm text-muted-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed"
      />

      <button
        onClick={logout}
        className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
      >
        Sair
      </button>
    </header>
  );
}
