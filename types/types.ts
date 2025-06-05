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