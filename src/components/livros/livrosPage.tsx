import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { PageContainer } from "../layout/pageContainer";
import { Button } from "../ui/button";
import { LivroTable } from "./livroTable";
import { Modal } from "../ui/modal";
import { LivroForm } from "./livroForm";
import type { Livro } from "../../types/livro";
import { BookOpen, Plus } from "lucide-react";
import {
  criarLivro,
  deletarLivro,
  listarLivros,
} from "../../services/livro.service";

export function LivrosPage() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [open, setOpen] = useState(false);

  async function carregarLivros() {
    try {
      const data = await listarLivros();

      setLivros(data);
    } catch {
      toast.error("Erro ao carregar livros");
    }
  }

  async function handleCreate(data: any) {
    try {
      await criarLivro(data);
      toast.success("Livro criado");

      setOpen(false);
      carregarLivros();
    } catch {
      toast.error("Erro ao criar livro");
    }
  }

  async function handleDelete(id: number) {
    const confirmDelete = confirm("Deseja deletar este livro?");

    if (!confirmDelete) return;

    try {
      await deletarLivro(id);
      toast.success("Livro deletado");

      carregarLivros();
    } catch {
      toast.error("Erro ao deletar livro");
    }
  }

  useEffect(() => {
    carregarLivros();
  }, []);

  return (
    <PageContainer>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <BookOpen className="text-blue-700" size={28} />
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-800!">
                Livros
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Gerencie os livros cadastrados na biblioteca
              </p>
            </div>
          </div>

          <Button
            onClick={() => setOpen(true)}
            className="h-11 rounded-xl px-5 text-sm font-medium shadow-sm flex gap-2 justify-center items-center"
          >
            <Plus size={18} />
            <span>Add</span>
          </Button>
        </div>

        <LivroTable livros={livros} onDelete={handleDelete} />

        <Modal open={open} title="Novo Livro" onClose={() => setOpen(false)}>
          <div className="p-1">
            <LivroForm onSubmit={handleCreate} />
          </div>
        </Modal>
      </div>
    </PageContainer>
  );
}
