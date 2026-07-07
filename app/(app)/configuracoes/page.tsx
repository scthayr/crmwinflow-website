"use client";

import { useState } from "react";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h2 className="font-medium">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      <div className="mt-5 flex flex-col gap-4">{children}</div>
    </div>
  );
}

function Campo({ label, defaultValue, type = "text" }: { label: string; defaultValue: string; type?: string }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <input
        type={type}
        defaultValue={defaultValue}
        className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
      />
    </label>
  );
}

function Toggle({ label, description, defaultChecked }: { label: string; description: string; defaultChecked?: boolean }) {
  const [ativo, setAtivo] = useState(!!defaultChecked);
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <button
        onClick={() => setAtivo((v) => !v)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${ativo ? "bg-accent" : "bg-muted"}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${ativo ? "translate-x-5" : "translate-x-0.5"}`}
        />
      </button>
    </div>
  );
}

export default function ConfiguracoesPage() {
  const [tema, setTema] = useState<"claro" | "escuro" | "sistema">("sistema");

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Configurações</h1>
        <p className="text-sm text-muted-foreground">
          Preferências da sua conta e da empresa.
        </p>
      </div>

      <Section title="Perfil" description="Suas informações pessoais.">
        <Campo label="Nome" defaultValue="Teste Preview" />
        <Campo label="E-mail" defaultValue="preview.test@example.com" type="email" />
        <button className="btn-gradient w-fit rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90">
          Salvar alterações
        </button>
      </Section>

      <Section title="Empresa" description="Dados usados em propostas e relatórios.">
        <Campo label="Nome da empresa" defaultValue="Winflow Comércio Ltda." />
        <Campo label="CNPJ" defaultValue="12.345.678/0001-90" />
      </Section>

      <Section title="Segurança" description="Mantenha sua conta protegida.">
        <Campo label="Senha atual" defaultValue="" type="password" />
        <Campo label="Nova senha" defaultValue="" type="password" />
        <button className="w-fit rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
          Atualizar senha
        </button>
      </Section>

      <Section title="Notificações" description="Escolha o que você quer ser avisado.">
        <Toggle label="Novos leads" description="Receber alerta quando um lead novo entrar." defaultChecked />
        <Toggle label="Tarefas atrasadas" description="Lembrete diário de pendências." defaultChecked />
        <Toggle label="Resumo semanal" description="E-mail com o resumo de vendas da semana." />
      </Section>

      <Section title="Tema" description="Aparência do painel.">
        <div className="flex gap-2">
          {(["claro", "escuro", "sistema"] as const).map((opcao) => (
            <button
              key={opcao}
              onClick={() => setTema(opcao)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium capitalize transition-colors ${
                tema === opcao
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border hover:bg-muted"
              }`}
            >
              {opcao}
            </button>
          ))}
        </div>
      </Section>

      <Section title="Integrações" description="Conecte o Winflow a outras ferramentas.">
        {["WhatsApp Business", "Google Calendar", "Zapier"].map((nome) => (
          <div key={nome} className="flex items-center justify-between">
            <span className="text-sm font-medium">{nome}</span>
            <button className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted">
              Conectar
            </button>
          </div>
        ))}
      </Section>

      <Section title="API" description="Chave para integrações personalizadas.">
        <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2 font-mono text-sm text-muted-foreground">
          wf_live_••••••••••••3f2a
          <button className="text-sm font-medium text-accent">Gerar nova</button>
        </div>
      </Section>
    </div>
  );
}
