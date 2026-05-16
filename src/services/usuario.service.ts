import { api } from "./api";

import type { Usuario, CriarUsuarioDTO } from "../types/usuario";

export async function listarUsuarios() {
  const response = await api.get<Usuario[]>("/usuarios");

  return response.data;
}

export async function buscarUsuario(id: number) {
  const response = await api.get<Usuario>(`/usuarios/${id}`);

  return response.data;
}

export async function criarUsuario(data: CriarUsuarioDTO) {
  const response = await api.post("/usuarios", data);

  return response.data;
}

export async function atualizarUsuario(id: number, data: Partial<Usuario>) {
  const response = await api.put(`/usuarios/${id}`, data);

  return response.data;
}

export async function deletarUsuario(id: number) {
  const response = await api.delete(`/usuarios/${id}`);

  return response.data;
}
