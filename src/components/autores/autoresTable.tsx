import { BookUser, Globe, Pencil, Trash2 } from "lucide-react";

import type { Autor } from "../../types/autor";

import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface Props {
  autores: Autor[];
  onDelete: (id: number) => void;
  onEdit?: (autor: Autor) => void;
}

export function AutorTable({ autores, onDelete, onEdit }: Props) {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full min-w-212.5">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Autor
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Nacionalidade
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Ações
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {autores.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="py-12 text-center text-sm text-slate-500"
                >
                  Nenhum autor encontrado.
                </td>
              </tr>
            ) : (
              autores.map((autor) => (
                <tr
                  key={autor.id_autor}
                  className="transition-colors hover:bg-slate-50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                        <BookUser size={18} className="text-slate-600" />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-800">
                          {autor.nome}
                        </p>

                        <p className="text-sm text-slate-500">
                          ID #{autor.id_autor}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Globe size={15} className="text-slate-400" />

                      <span>{autor.nacionalidade}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="secondary"
                        className="h-9 rounded-lg"
                        onClick={() => onEdit?.(autor)}
                      >
                        <Pencil size={16} />
                      </Button>

                      <Button
                        variant="danger"
                        className="h-9 rounded-lg"
                        onClick={() => onDelete(autor.id_autor)}
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
