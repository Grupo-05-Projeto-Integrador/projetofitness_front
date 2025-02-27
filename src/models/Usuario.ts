import Postagem from "./Postagens";

export default interface Usuario {
  id: number;
  nome: string;
  email: string;
  altura: number;
  peso: number;
  imc: number;
  postagem?: Postagem[] | null;
}
