import React from "react";
import Postagem from "../../../models/Postagens";

interface CardPostagensProps {
  postagem: Postagem;
}

const CardPostagens: React.FC<CardPostagensProps> = ({ postagem }) => {
  return (
    <div className="border rounded p-4 shadow-md">
      <h2 className="text-xl font-bold">{postagem.titulo}</h2>
      <p>{postagem.texto}</p>
      <p>
        <strong>Categoria:</strong>{" "}
        {postagem.categoria?.descricao ?? "Sem categoria"}
      </p>
      <p>
        <strong>Usuário:</strong>{" "}
        {postagem.usuario?.nome ?? "Usuário Desconhecido"}
      </p>
    </div>
  );
};

export default CardPostagens;
