import { BadgeCheck, Mail, Pencil, Phone, Trash2, User } from "lucide-react";

import type { Usuario } from "../../types/usuario";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface Props {
  usuarios: Usuario[];
  onDelete: (id: number) => void;
  onEdit?: (usuario: Usuario) => void;
}

export function UsuarioTable({ usuarios, onDelete, onEdit }: Props) {
  function formatDate(date: string | null) {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("pt-BR");
  }

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full min-w-237.5">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Usuário
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                E-mail
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Telefone
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Cadastro
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Status
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Ações
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {usuarios.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-12 text-center text-sm text-slate-500"
                >
                  Nenhum usuário encontrado.
                </td>
              </tr>
            ) : (
              usuarios.map((usuario) => (
                <tr
                  key={usuario.id_usuario}
                  className="transition-colors hover:bg-slate-50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-xl bg-slate-100">
                        <User size={18} className="text-slate-600" />
                      </div>

                      <div className="flex gap-2 items-center">
                        <p className="text-sm text-slate-500">
                          #{usuario.id_usuario}
                        </p>

                        <p className="font-semibold text-slate-800">
                          {usuario.nome}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <Mail size={15} className="text-slate-400" />

                      <span>{usuario.email}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <Phone size={15} className="text-slate-400" />

                      <span>{usuario.telefone}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {formatDate(usuario.data_cadastro)}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                        usuario.status === "ATIVO"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      <BadgeCheck size={13} />

                      {usuario.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="secondary"
                        disabled={!onEdit}
                        className="h-9 rounded-lg disabled:text-slate-400"
                        onClick={() => onEdit?.(usuario)}
                      >
                        <Pencil size={16} />
                      </Button>

                      <Button
                        variant="danger"
                        className="h-9 rounded-lg"
                        onClick={() => onDelete(usuario.id_usuario)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
