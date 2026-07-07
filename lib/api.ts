const API_URL = "http://localhost:3000";

export async function login(email: string, senha: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  if (!res.ok) {
    const erro = await res.json();
    throw new Error(erro.message || "Erro ao fazer login");
  }

  return res.json();
}

function getToken() {
  return localStorage.getItem("token");
}

export async function listarClientes() {
  const res = await fetch(`${API_URL}/clientes`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (!res.ok) {
    const erro = await res.json();
    throw new Error(erro.message || "Erro ao buscar clientes");
  }

  return res.json();
}
export async function criarCliente(dados: {
  nome: string;
  email?: string;
  telefone?: string;
  empresa?: string;
}) {
  const res = await fetch(`${API_URL}/clientes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(dados),
  });

  if (!res.ok) {
    const erro = await res.json();
    throw new Error(erro.message || "Erro ao criar cliente");
  }

  return res.json();
}

export async function listarVendas() {
  const res = await fetch(`${API_URL}/vendas`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (!res.ok) {
    const erro = await res.json();
    throw new Error(erro.message || "Erro ao buscar vendas");
  }

  return res.json();
}

export async function atualizarCliente(
  id: string,
  dados: { nome?: string; email?: string; telefone?: string; empresa?: string },
) {
  const res = await fetch(`${API_URL}/clientes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(dados),
  });

  if (!res.ok) {
    const erro = await res.json();
    throw new Error(erro.message || "Erro ao atualizar cliente");
  }

  return res.json();
}