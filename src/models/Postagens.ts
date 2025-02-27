import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Postagem {
  id?: number; // Torna opcional ao cadastrar nova postagem
  titulo: string;
  texto: string;
  foto: string;
  categoria: Categoria | null; // Permite null para evitar erro
  usuario: Usuario | null; // Permite null para evitar erro
}
