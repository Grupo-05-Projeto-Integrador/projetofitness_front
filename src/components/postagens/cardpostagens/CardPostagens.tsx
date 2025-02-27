import { Link } from "react-router-dom";
import Postagens from "../../../models/Postagens";

interface Props {
  postagens: Postagens;
}

function CardPostagens({ postagens }: Props) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md bg-navy max-w-md mx-auto">
      <div className="flex items-center p-3 border-b">
        <img
          src="https://i.imgur.com/pK6vSCy.png"
          className="h-10 w-10 rounded-full border border-gray-300"
          alt="User Avatar"
        />
        <h3 className="ml-3 font-semibold text-gray-800">
          {postagens.usuario?.nome}
        </h3>
      </div>

      <img
        src={postagens.imagem}
        alt="Imagem do Post"
        className="w-3xl object-cover"
      />

      <div className="p-1">
        <h4 className="font-bold text-lg">{postagens.titulo}</h4>
        <p className="text-gray-700 text-sm mt-1">{postagens.texto}</p>
        <p className="text-gray-500 text-xs mt-2">
          📌 Categoria: {postagens.categoria?.descricao || "Sem categoria"}
        </p>
      </div>

      <div className="flex justify-between border-t px-4 py-2 text-sm text-gray-700">
        <Link to="" className="hover:text-blue-600">
          <button className="px-4 py-1 border border-gray-300 rounded-md">
            Editar
          </button>
        </Link>
        <Link to="" className="hover:text-red-600">
          <button className="px-4 py-1 border border-gray-300 rounded-md">
            Deletar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagens;
