import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  BookOpen,
  Calendar,
  Hash,
  Library,
  Layers3,
  Package,
} from "lucide-react";

interface Props {
  onSubmit: (data: any) => Promise<void>;
}

export function LivroForm({ onSubmit }: Props) {
  const [form, setForm] = useState({
    titulo: "",
    isbn: "",
    ano_publicacao: 2025,
    editora: "",
    quantidade_total: 1,
    quantidade_disponivel: 1,
    categoria: "",
    descricao: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await onSubmit(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-2">
        <h2 className="text-xl font-semibold text-slate-800">
          Cadastro de Livro
        </h2>

        <p className="text-sm text-slate-500">
          Preencha as informações abaixo para adicionar um novo livro.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <BookOpen size={16} />
            Título
          </label>

          <Input
            placeholder="Digite o título do livro"
            value={form.titulo}
            onChange={(e) =>
              setForm({
                ...form,
                titulo: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Hash size={16} />
            ISBN
          </label>

          <Input
            placeholder="000-00-000-0000-0"
            value={form.isbn}
            maxLength={13}
            onChange={(e) =>
              setForm({
                ...form,
                isbn: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Calendar size={16} />
            Ano de Publicação
          </label>

          <Input
            type="text"
            inputMode="numeric"
            maxLength={4}
            placeholder="2026"
            value={form.ano_publicacao || ""}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");

              setForm({
                ...form,
                ano_publicacao: value ? Number(value) : 0,
              });
            }}
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Library size={16} />
            Editora
          </label>

          <Input
            placeholder="Digite a editora"
            value={form.editora}
            onChange={(e) =>
              setForm({
                ...form,
                editora: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Layers3 size={16} />
            Categoria
          </label>

          <Input
            placeholder="Ex: Ficção, Romance, Tecnologia..."
            value={form.categoria}
            onChange={(e) =>
              setForm({
                ...form,
                categoria: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Package size={16} />
            Quantidade
          </label>

          <Input
            type="number"
            placeholder="0"
            min={0}
            value={form.quantidade_total}
            onChange={(e) =>
              setForm({
                ...form,
                quantidade_total: Number(e.target.value),
                quantidade_disponivel: Number(e.target.value),
              })
            }
          />
        </div>
      </div>

      <div className="flex justify-end border-t border-slate-100 pt-4">
        <Button
          type="submit"
          className="h-11 rounded-xl px-6 text-sm font-medium shadow-sm bg-green-500 text-white"
        >
          Salvar Livro
        </Button>
      </div>
    </form>
  );
}
