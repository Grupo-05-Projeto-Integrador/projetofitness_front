import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagens/ModalPostagens";

function Home() {
  return (
    <>
      <div className="relative w-full h-[500px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/imges/Banner Image.jpg')" }}
        ></div>

        <div className="relative text-center z-10">
          <h2 className="text-5xl font-bold">Se Desafie todos os dias!</h2>
          <p className="text-xl">
            Poste aqui o seu #TAPAGO e inspire outras pessoas.
          </p>
          <div className="flex justify-around gap-4">
            <div
              className="rounded text-white 
                                              border-white border-solid border-1 py-2 px-4"
            >
              <ModalPostagem />
            </div>
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
