import { useEffect, useState } from "react";
import { BookMarked, Plus } from "lucide-react";
import type { CriarEmprestimoDTO, Emprestimo } from "../../types/emprestimo";
import type { Usuario } from "../../types/usuario";
import type { Livro } from "../../types/livro";
import {
  criarEmprestimo,
  deletarEmprestimo,
  devolverLivro,
  listarEmprestimos,
} from "../../services/emprestimo.service";
import { listarLivros } from "../../services/livro.service";
import { listarUsuarios } from "../../services/usuario.service";
import { PageContainer } from "../layout/pageContainer";
import { Button } from "../ui/button";
import { EmprestimosTable } from "./emprestimosTable";
import { Modal } from "../ui/modal";
import { EmprestimoForm } from "./emprestimosForm";
import toast from "react-hot-toast";

export function EmprestimosPage() {
  const [emprestimos, setEmprestimos] = useState<Emprestimo[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [livros, setLivros] = useState<Livro[]>([]);

  const [openCreate, setOpenCreate] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);
  const [selectedEmprestimo, setSelectedEmprestimo] =
    useState<Partial<Emprestimo> | null>(null);

  const [status, setStatus] = useState("");
  const [dataDevolucaoReal, setDataDevolucaoReal] = useState(
    new Date().toISOString().split("T")[0],
  );

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
      toast.success("Empréstimo registrado com sucesso");

      await loadData();
      setOpenCreate(false);
    } catch (error) {
      toast.error("Erro ao registrar empréstimo");
      console.error(error);
    }
  }

  async function handleDelete(id: number) {
    const confirmed = window.confirm(
      "Deseja realmente excluir este empréstimo?",
    );

    if (!confirmed) return;

    try {
      await deletarEmprestimo(id);
      toast.success(`Empréstimo ${id} deletado com sucesso`);

      await loadData();
    } catch (error) {
      toast.error("Erro ao excluir empréstimo");
      console.error(error);
    }
  }

  function getTodayDate() {
    return new Date().toISOString().split("T")[0];
  }

  function openEditModal(emprestimo: Partial<Emprestimo>) {
    setSelectedEmprestimo(emprestimo);

    setDataDevolucaoReal(emprestimo.data_devolucao || getTodayDate());

    setStatus(emprestimo.status ?? "");

    setOpenEdit(true);
  }

  async function handleEdit() {
    if (!selectedEmprestimo || selectedEmprestimo.id_emprestimo === undefined)
      return;

    try {
      await devolverLivro(selectedEmprestimo.id_emprestimo, selectedEmprestimo);

      toast.success("Livro devolvido com sucesso");

      setOpenEdit(false);
      setSelectedEmprestimo(null);

      await loadData();
    } catch (error) {
      toast.error("Erro ao devolver livro");
      console.error(error);
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
            onClick={() => setOpenCreate(true)}
            className="flex h-11 items-center gap-2 rounded-xl px-5 text-sm font-medium shadow-sm"
          >
            <Plus size={18} />
            Novo Empréstimo
          </Button>
        </div>

        <EmprestimosTable
          emprestimos={emprestimos}
          onDelete={handleDelete}
          onEdit={openEditModal}
        />

        <Modal
          open={openCreate}
          title="Novo Empréstimo"
          onClose={() => setOpenCreate(false)}
        >
          <div className="p-1">
            <EmprestimoForm
              usuarios={usuarios}
              livros={livros}
              onSubmit={handleCreate}
            />
          </div>
        </Modal>

        <Modal
          open={openEdit}
          title="Devolver livro"
          onClose={() => setOpenEdit(false)}
        >
          <div className="space-y-4 p-2">
            <div>
              <label className="text-sm font-medium text-slate-600">
                Data de devolução real
              </label>

              <input
                type="date"
                value={dataDevolucaoReal}
                onChange={(e) => setDataDevolucaoReal(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2"
              >
                <option value="DEVOLVIDO">DEVOLVIDO</option>
                <option value="ATRASADO">ATRASADO</option>
                <option value="EM_ANDAMENTO">EM_ANDAMENTO</option>
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="secondary" onClick={() => setOpenEdit(false)}>
                Cancelar
              </Button>

              <Button onClick={handleEdit}>Confirmar devolução</Button>
            </div>
          </div>
        </Modal>
      </div>
    </PageContainer>
  );
}
