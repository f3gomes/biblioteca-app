import { api } from "./api";

import type { Autor, CriarAutorDTO } from "../types/autor";

export async function listarAutores() {
  const response = await api.get<Autor[]>("/autores");

  return response.data;
}

export async function buscarAutor(id: number) {
  const response = await api.get<Autor>(`/autores/${id}`);

  return response.data;
}

export async function criarAutor(data: CriarAutorDTO) {
  const response = await api.post("/autores", data);

  return response.data;
}

export async function atualizarAutor(id: number, data: CriarAutorDTO) {
  const response = await api.put(`/autores/${id}`, data);

  return response.data;
}

export async function deletarAutor(id: number) {
  const response = await api.delete(`/autores/${id}`);

  return response.data;
}
