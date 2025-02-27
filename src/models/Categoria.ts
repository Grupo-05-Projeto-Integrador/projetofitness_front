import Postagem from "./Postagens";

export default interface Categoria {
  id: number;
  descricao: string;
  postagem?: Postagem[] | null;
}
