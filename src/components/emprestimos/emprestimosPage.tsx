import { useEffect, useState } from "react";
import { BookMarked, Plus } from "lucide-react";
import type { CriarEmprestimoDTO, Emprestimo } from "../../types/emprestimo";
import type { Usuario } from "../../types/usuario";
import type { Livro } from "../../types/livro";
import {
  criarEmprestimo,
  deletarEmprestimo,
  listarEmprestimos,
} from "../../services/emprestimo.service";
import { listarLivros } from "../../services/livro.service";
import { listarUsuarios } from "../../services/usuario.service";
import { PageContainer } from "../layout/pageContainer";
import { Button } from "../ui/button";
import { EmprestimosTable } from "./emprestimosTable";
import { Modal } from "../ui/modal";
import { EmprestimoForm } from "./emprestimosForm";

export function EmprestimosPage() {
  const [emprestimos, setEmprestimos] = useState<Emprestimo[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [livros, setLivros] = useState<Livro[]>([]);
  const [open, setOpen] = useState(false);

  async function loadData() {
    try {
      const [emprestimosResponse, usuariosResponse, livrosResponse] =
        await Promise.all([
          listarEmprestimos(),
          listarUsuarios(),
          listarLivros(),
        ]);

      setEmprestimos(emprestimosResponse);
      setUsuarios(usuariosResponse);
      setLivros(livrosResponse);
    } catch (error) {
      console.error("Erro ao carregar dados", error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleCreate(data: CriarEmprestimoDTO) {
    try {
      await criarEmprestimo(data);

      await loadData();

      setOpen(false);
    } catch (error) {
      console.error("Erro ao criar empréstimo", error);
    }
  }

  async function handleDelete(id: number) {
    const confirmed = window.confirm(
      "Deseja realmente excluir este empréstimo?",
    );

    if (!confirmed) return;

    try {
      await deletarEmprestimo(id);

      await loadData();
    } catch (error) {
      console.error("Erro ao excluir empréstimo", error);
    }
  }

  return (
    <PageContainer>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <BookMarked className="text-blue-700" size={28} />
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-800">
                Empréstimos
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Gerencie os empréstimos de livros do sistema
              </p>
            </div>
          </div>

          <Button
            onClick={() => setOpen(true)}
            className="h-11 rounded-xl px-5 text-sm font-medium shadow-sm flex gap-2 items-center"
          >
            <Plus size={18} />
            <span>Novo Empréstimo</span>
          </Button>
        </div>

        <EmprestimosTable emprestimos={emprestimos} onDelete={handleDelete} />

        <Modal
          open={open}
          title="Novo Empréstimo"
          onClose={() => setOpen(false)}
        >
          <div className="p-1">
            <EmprestimoForm
              usuarios={usuarios}
              livros={livros}
              onSubmit={handleCreate}
            />
          </div>
        </Modal>
      </div>
    </PageContainer>
  );
}
