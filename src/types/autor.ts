export interface Autor {
  id_autor: number;
  nome: string;
  nacionalidade: string;
  data_nascimento: string;
}

export interface CriarAutorDTO {
  nome: string;
  nacionalidade: string;
  data_nascimento: string;
}
