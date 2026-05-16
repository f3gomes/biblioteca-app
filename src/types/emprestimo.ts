export interface Emprestimo {
  id_emprestimo: number;
  usuario: string;
  livro: string;
  data_emprestimo: string;
  data_prevista_devolucao: string;
  data_devolucao: string | null;
  status: string;
}

export interface CriarEmprestimoDTO {
  id_usuario: number;
  id_livro: number;
  data_prevista_devolucao: string;
}
