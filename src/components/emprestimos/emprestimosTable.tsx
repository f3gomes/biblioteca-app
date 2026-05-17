import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock3,
  Pencil,
  Trash2,
  User,
} from "lucide-react";

import type { Emprestimo } from "../../types/emprestimo";

import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface Props {
  emprestimos: Emprestimo[];
  onDelete: (id: number) => void;
  onEdit?: (emprestimo: Emprestimo) => void;
}

export function EmprestimosTable({ emprestimos, onDelete, onEdit }: Props) {
  function formatDate(date: string | null) {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("pt-BR");
  }

  function getStatusStyle(status: string) {
    switch (status.toUpperCase()) {
      case "DEVOLVIDO":
        return "bg-emerald-100 text-emerald-700";

      case "ATRASADO":
        return "bg-red-100 text-red-700";

      default:
        return "bg-amber-100 text-amber-700";
    }
  }

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full min-w-300">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Usuário
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Livro
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Empréstimo
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Devolução Prevista
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Devolução Real
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
            {emprestimos.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="py-12 text-center text-sm text-slate-500"
                >
                  Nenhum empréstimo encontrado.
                </td>
              </tr>
            ) : (
              emprestimos.map((emprestimo) => (
                <tr
                  key={emprestimo.id_emprestimo}
                  className="transition-colors hover:bg-slate-50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                        <User size={18} className="text-slate-600" />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-800">
                          {emprestimo.usuario}
                        </p>

                        <p className="text-sm text-slate-500">
                          ID #{emprestimo.id_emprestimo}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <BookOpen size={16} className="text-slate-400" />

                      <span>{emprestimo.livro}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Calendar size={15} className="text-slate-400" />

                      <span>{formatDate(emprestimo.data_emprestimo)}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Clock3 size={15} className="text-slate-400" />

                      <span>
                        {formatDate(emprestimo.data_prevista_devolucao)}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={15} className="text-slate-400" />

                      <span>{formatDate(emprestimo.data_devolucao)}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                        emprestimo.status,
                      )}`}
                    >
                      {emprestimo.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="secondary"
                        className="h-9 rounded-lg"
                        onClick={() => onEdit?.(emprestimo)}
                      >
                        <Pencil size={16} />
                      </Button>

                      <Button
                        variant="danger"
                        className="h-9 rounded-lg"
                        onClick={() => onDelete(emprestimo.id_emprestimo)}
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
