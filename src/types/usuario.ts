export interface Usuario {
  id_usuario: number;
  nome: string;
  email: string;
  telefone: string;
  status: string;
  data_cadastro: string;
}

export interface CriarUsuarioDTO {
  nome: string;
  email: string;
  telefone: string;
}
