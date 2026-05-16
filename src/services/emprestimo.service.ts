import { api } from "./api";

import type { Emprestimo, CriarEmprestimoDTO } from "../types/emprestimo";

export async function listarEmprestimos() {
  const response = await api.get<Emprestimo[]>("/emprestimos");

  return response.data;
}

export async function buscarEmprestimo(id: number) {
  const response = await api.get<Emprestimo>(`/emprestimos/${id}`);

  return response.data;
}

export async function criarEmprestimo(data: CriarEmprestimoDTO) {
  const response = await api.post("/emprestimos", data);

  return response.data;
}

export async function devolverLivro(id: number) {
  const response = await api.put(`/emprestimos/devolver/${id}`);

  return response.data;
}

export async function deletarEmprestimo(id: number) {
  const response = await api.delete(`/emprestimos/${id}`);

  return response.data;
}
