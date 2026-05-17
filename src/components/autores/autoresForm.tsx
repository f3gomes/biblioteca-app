import { useState } from "react";
import { BookUser, FileText, Globe } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import type { CriarAutorDTO } from "../../types/autor";

interface Props {
  onSubmit: (data: CriarAutorDTO) => void;
}

export function AutorForm({ onSubmit }: Props) {
  const [form, setForm] = useState<CriarAutorDTO>({
    nome: "",
    nacionalidade: "",
    data_nascimento: "",
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
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-slate-800">
          Cadastro de Autor
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Preencha os dados do autor abaixo.
        </p>
      </div>

      {/* Campos */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Nome */}
        <div className="space-y-2 md:col-span-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <BookUser size={16} />
            Nome do Autor
          </label>

          <Input
            placeholder="Digite o nome do autor"
            value={form.nome}
            onChange={(e) =>
              setForm({
                ...form,
                nome: e.target.value,
              })
            }
          />
        </div>

        {/* Nacionalidade */}
        <div className="space-y-2 md:col-span-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Globe size={16} />
            Nacionalidade
          </label>

          <Input
            placeholder="Ex: Brasileira"
            value={form.nacionalidade}
            onChange={(e) =>
              setForm({
                ...form,
                nacionalidade: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="space-y-2 md:col-span-2">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <FileText size={16} />
          Data de Nascimento
        </label>

        <input
          placeholder="Digite data de nascimento do autor..."
          value={form.data_nascimento}
          onChange={(e) =>
            setForm({
              ...form,
              data_nascimento: e.target.value,
            })
          }
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400"
        />
      </div>

      {/* Footer */}
      <div className="flex justify-end border-t border-slate-100 pt-4">
        <Button
          type="submit"
          className="h-11 rounded-xl px-6 text-sm font-medium shadow-sm bg-green-500 text-white"
        >
          Salvar Autor
        </Button>
      </div>
    </form>
  );
}
