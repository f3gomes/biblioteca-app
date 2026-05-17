import { useEffect, useState } from "react";
import { BookUser, Plus } from "lucide-react";
import type { Autor, CriarAutorDTO } from "../../types/autor";
import {
  criarAutor,
  deletarAutor,
  listarAutores,
} from "../../services/autor.service";
import { AutorForm } from "./autoresForm";
import { PageContainer } from "../layout/pageContainer";
import { Button } from "../ui/button";
import { AutorTable } from "./autoresTable";
import { Modal } from "../ui/modal";

export function AutoresPage() {
  const [autores, setAutores] = useState<Autor[]>([]);
  const [open, setOpen] = useState(false);

  async function loadAutores() {
    try {
      const response = await listarAutores();

      setAutores(response);
    } catch (error) {
      console.error("Erro ao carregar autores", error);
    }
  }

  useEffect(() => {
    loadAutores();
  }, []);

  async function handleCreate(data: CriarAutorDTO) {
    try {
      await criarAutor(data);

      await loadAutores();

      setOpen(false);
    } catch (error) {
      console.error("Erro ao criar autor", error);
    }
  }

  async function handleDelete(id: number) {
    const confirmed = window.confirm("Deseja realmente excluir este autor?");

    if (!confirmed) return;

    try {
      await deletarAutor(id);

      await loadAutores();
    } catch (error) {
      console.error("Erro ao excluir autor", error);
    }
  }

  return (
    <PageContainer>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <BookUser className="text-blue-700" size={28} />
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-800">
                Autores
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Gerencie os autores cadastrados no sistema
              </p>
            </div>
          </div>

          <Button
            onClick={() => setOpen(true)}
            className="h-11 rounded-xl px-5 text-sm font-medium shadow-sm flex gap-2 items-center justify-center"
          >
            <Plus size={18} />

            <span>Add</span>
          </Button>
        </div>

        {/* Tabela */}
        <AutorTable autores={autores} onDelete={handleDelete} />

        {/* Modal */}
        <Modal open={open} title="Novo Autor" onClose={() => setOpen(false)}>
          <div className="p-1">
            <AutorForm onSubmit={handleCreate} />
          </div>
        </Modal>
      </div>
    </PageContainer>
  );
}
