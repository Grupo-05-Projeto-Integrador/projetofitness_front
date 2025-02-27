import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Postagens {
  data: string | number | Date;
  imagem: string | undefined;
  id?: number;
  titulo: string;
  texto: string;
  foto: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
