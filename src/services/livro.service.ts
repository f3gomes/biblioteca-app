import { api } from "./api";
import type { Livro, CriarLivroDTO } from "../types/livro";

export async function listarLivros() {
  const response = await api.get<Livro[]>("/livros");

  return response.data;
}

export async function buscarLivro(id: number) {
  const response = await api.get<Livro>(`/livros/${id}`);

  return response.data;
}

export async function criarLivro(data: CriarLivroDTO) {
  const response = await api.post("/livros", data);

  return response.data;
}

export async function atualizarLivro(id: number, data: CriarLivroDTO) {
  const response = await api.put(`/livros/${id}`, data);

  return response.data;
}

export async function deletarLivro(id: number) {
  const response = await api.delete(`/livros/${id}`);

  return response.data;
}
