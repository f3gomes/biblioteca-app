import { useState } from "react";
import { BookOpen, CalendarDays, User } from "lucide-react";

import type { CriarEmprestimoDTO } from "../../types/emprestimo";

import type { Usuario } from "../../types/usuario";
import type { Livro } from "../../types/livro";

import { Button } from "../ui/button";

interface Props {
  usuarios: Usuario[];
  livros: Livro[];
  onSubmit: (data: CriarEmprestimoDTO) => void;
}

export function EmprestimoForm({ usuarios, livros, onSubmit }: Props) {
  const [form, setForm] = useState<CriarEmprestimoDTO>({
    id_usuario: 0,
    id_livro: 0,
    data_prevista_devolucao: "",
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
          Novo Empréstimo
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Selecione o usuário, livro e data de devolução.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <User size={16} />
            Usuário
          </label>

          <select
            value={form.id_usuario}
            onChange={(e) =>
              setForm({
                ...form,
                id_usuario: Number(e.target.value),
              })
            }
            className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
            required
          >
            <option value={0}>Selecione um usuário</option>

            {usuarios.map((usuario) => (
              <option key={usuario.id_usuario} value={usuario.id_usuario}>
                {usuario.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <BookOpen size={16} />
            Livro
          </label>

          <select
            value={form.id_livro}
            onChange={(e) =>
              setForm({
                ...form,
                id_livro: Number(e.target.value),
              })
            }
            className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
            required
          >
            <option value={0}>Selecione um livro</option>

            {livros.map((livro) => (
              <option
                key={livro.id_livro}
                value={livro.id_livro}
                disabled={livro.quantidade_disponivel <= 0}
              >
                {livro.titulo}
                {livro.quantidade_disponivel <= 0 ? " (Indisponível)" : ""}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <CalendarDays size={16} />
            Data Prevista de Devolução
          </label>

          <input
            type="date"
            value={form.data_prevista_devolucao}
            onChange={(e) =>
              setForm({
                ...form,
                data_prevista_devolucao: e.target.value,
              })
            }
            className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
            required
          />
        </div>
      </div>

      <div className="flex justify-end border-t border-slate-100 pt-4">
        <Button
          type="submit"
          className="h-11 rounded-xl px-6 text-sm font-medium shadow-sm bg-green-500 text-white"
        >
          Registrar Empréstimo
        </Button>
      </div>
    </form>
  );
}
