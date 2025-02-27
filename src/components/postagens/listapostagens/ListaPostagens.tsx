import { useEffect, useState } from "react";
import { buscar } from "../../../service/Service";
import CardPostagens from "../cardpostagens/CardPostagens";
import { DNA } from "react-loader-spinner";
import Postagem from "../../../models/Postagens";

function ListaPostagens() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  async function buscarPostagens() {
    try {
      await buscar("/postagens", setPostagens);
    } catch (error) {
      console.error("Erro ao buscar postagens", error);
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, []);

  return (
    <>
      {postagens.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          <div
            className="container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {postagens.map((postagem) => (
              <CardPostagens key={postagem.id} postagem={postagem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaPostagens;
