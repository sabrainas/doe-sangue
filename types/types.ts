export interface UserData {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  tipo: string;
  celular: string;
  regiao: string;
  senha: string;
}

export interface Hemocenter {
  id: number;
  nome: string;
  data: string;
  cidade: string;
  tipo: string;
  nivel: number;
}

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  tipo: string;
  celular: string;
  regiao: string;
  senha: string;
}

export interface Requisicao {
  id: number;
  tipo: string;
  local: string;
  descricao: string;
  dataCriacao: string;
  usuario: Usuario;
  agendamentos: string[];
}

export interface Agendamento {
  id: number;
  verificacao: string;
  data: string;
  requisicao: Requisicao;
  usuario: Usuario;
}