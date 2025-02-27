import Arkimedes from "../public/imges/Arkimedes.jpg";
import Francisco from "../public/imges/Francisco.jpeg";
import Rebeka from "../public/imges/Rebeka.jpeg";
import lucas from "../public/imges/lucas.jpeg";
import Yasmim from "../public/imges/Yasmim.jpeg";

export default function Sobre() {
  // Simulação de dados
  const cargos = [
    { id: 1, nome: "Desenvolvedor", img: Arkimedes },
    { id: 2, nome: "Desenvolvedor", img: Francisco },
    {
      id: 3,
      nome: "Master",
      img: Rebeka,
    },
    {
      id: 4,
      nome: "PO - Product Owner",
      img: lucas,
    },
    { id: 5, nome: "Tester", img: Yasmim },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Cargos da Empresa</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cargos.map((cargo) => (
          <div
            key={cargo.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4"
          >
            <img
              src={cargo.img}
              alt={cargo.nome}
              className="w-full h-70 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold text-center mt-4">
              {cargo.nome}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
