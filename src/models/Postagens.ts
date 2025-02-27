import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Postagens {
  id: number;
  titulo: string;
  texto: string;
  foto: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
