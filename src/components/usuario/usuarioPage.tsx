import { useEffect, useState } from "react";
import { Plus, Users } from "lucide-react";
import type { Usuario } from "../../types/usuario";
import {
  criarUsuario,
  deletarUsuario,
  listarUsuarios,
} from "../../services/usuario.service";
import { UsuarioForm, type CreateUsuarioDTO } from "./usuarioForm";
import { PageContainer } from "../layout/pageContainer";
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";
import { UsuarioTable } from "./usuarioTable";
import toast from "react-hot-toast";

export function UsuarioPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [open, setOpen] = useState(false);

  async function loadUsuarios() {
    try {
      const response = await listarUsuarios();

      setUsuarios(response);
    } catch (error) {
      console.error("Erro ao carregar usuários", error);
    }
  }

  useEffect(() => {
    loadUsuarios();
  }, []);

  async function handleCreate(data: CreateUsuarioDTO) {
    try {
      await criarUsuario(data);
      toast.success("Usuário criado")

      await loadUsuarios();

      setOpen(false);
    } catch (error) {
      toast.error("Erro ao criar usuário")
      console.error("Erro ao criar usuário", error);
    }
  }

  async function handleDelete(id: number) {
    const confirmed = window.confirm("Deseja realmente excluir este usuário?");

    if (!confirmed) return;

    try {
      await deletarUsuario(id);

      await loadUsuarios();
    } catch (error) {
      console.error("Erro ao excluir usuário", error);
    }
  }

  return (
    <PageContainer>
      <div className="space-y-6 -ml-6">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <Users className="text-blue-700" size={28} />
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-800!">
                Usuários
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Gerencie os usuários cadastrados no sistema
              </p>
            </div>
          </div>

          <Button
            onClick={() => setOpen(true)}
            className="h-11 rounded-xl px-5 text-sm font-medium shadow-sm flex gap-2 items-center"
          >
            <Plus size={18} />
            <span>Add</span>
          </Button>
        </div>

        <UsuarioTable usuarios={usuarios} onDelete={handleDelete} />

        <Modal open={open} title="Novo Usuário" onClose={() => setOpen(false)}>
          <div className="p-1">
            <UsuarioForm onSubmit={handleCreate} />
          </div>
        </Modal>
      </div>
    </PageContainer>
  );
}
