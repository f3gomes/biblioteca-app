import { Pencil, Trash2 } from "lucide-react";

import type { Livro } from "../../types/livro";

import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface Props {
  livros: Livro[];
  onDelete: (id: number) => void;
  onEdit?: (livro: Livro) => void;
}

export function LivroTable({ livros, onDelete, onEdit }: Props) {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full min-w-175">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                ID
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Livro
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Categoria
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Disponíveis
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Ações
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {livros.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-12 text-center text-sm text-slate-500"
                >
                  Nenhum livro encontrado.
                </td>
              </tr>
            ) : (
              livros.map((livro) => (
                <tr
                  key={livro.id_livro}
                  className="transition-colors hover:bg-slate-50"
                >
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">
                    #{livro.id_livro}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-semibold text-slate-800">
                          {livro.titulo}
                        </p>

                        <p className="text-sm text-slate-500">
                          Livro cadastrado no sistema
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      {livro.categoria}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        livro.quantidade_disponivel > 0
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {livro.quantidade_disponivel}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="secondary"
                        className="h-9 rounded-lg"
                        onClick={() => onEdit?.(livro)}
                      >
                        <Pencil size={16} />
                      </Button>

                      <Button
                        variant="danger"
                        className="h-9 rounded-lg"
                        onClick={() => onDelete(livro.id_livro)}
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
