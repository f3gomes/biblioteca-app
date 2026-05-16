export interface Livro {
  id_livro: number;
  titulo: string;
  isbn: string;
  ano_publicacao: number;
  editora: string;
  quantidade_total: number;
  quantidade_disponivel: number;
  categoria: string;
  descricao: string;
  data_cadastro: string;
}

export interface CriarLivroDTO {
  titulo: string;
  isbn: string;
  ano_publicacao: number;
  editora: string;
  quantidade_total: number;
  quantidade_disponivel: number;
  categoria: string;
  descricao: string;
}
