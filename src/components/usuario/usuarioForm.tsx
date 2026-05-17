import { useState } from "react";
import { BadgeCheck, IdCard, Mail, Phone, User } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export interface CreateUsuarioDTO {
  nome: string;
  email: string;
  telefone: string;
  data_cadastro: string;
  status: "ATIVO" | "INATIVO";
}

interface Props {
  onSubmit: (data: CreateUsuarioDTO) => void;
}

export function UsuarioForm({ onSubmit }: Props) {
  const [form, setForm] = useState<CreateUsuarioDTO>({
    nome: "",
    email: "",
    telefone: "",
    data_cadastro: "",
    status: "ATIVO",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="text-xl font-semibold text-slate-800">
          Cadastro de Usuário
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Preencha os dados do usuário abaixo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <User size={16} />
            Nome Completo
          </label>

          <Input
            placeholder="Digite o nome completo"
            value={form.nome}
            onChange={(e) =>
              setForm({
                ...form,
                nome: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Mail size={16} />
            E-mail
          </label>

          <Input
            type="email"
            placeholder="usuario@email.com"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Phone size={16} />
            Telefone
          </label>

          <Input
            placeholder="(85) 99999-9999"
            maxLength={9}
            value={form.telefone}
            onChange={(e) =>
              setForm({
                ...form,
                telefone: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <IdCard size={16} />
            Data Cadastro
          </label>

          <Input
            placeholder="2026"
            value={form.data_cadastro}
            onChange={(e) =>
              setForm({
                ...form,
                data_cadastro: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <BadgeCheck size={16} />
            Status
          </label>

          <select
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value as "ATIVO" | "INATIVO",
              })
            }
            className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
          >
            <option value="ATIVO">Ativo</option>
            <option value="INATIVO">Inativo</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end border-t border-slate-100 pt-4">
        <Button
          type="submit"
          className="h-11 rounded-xl px-6 text-sm font-medium shadow-sm bg-green-500 text-white"
        >
          Salvar Usuário
        </Button>
      </div>
    </form>
  );
}
