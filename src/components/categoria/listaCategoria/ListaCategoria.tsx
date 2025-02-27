import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategoria/CardCategoria";
import { buscar } from "../../../service/Service";

function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  async function buscarCategoria() {
    try {
      await buscar("/categoria", setCategoria);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarCategoria();
  }, [categoria.length]);

  return (
    <>
      {categoria.length === 0 && (
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
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;

function handleLogout() {
  throw new Error("Function not implemented.");
}
