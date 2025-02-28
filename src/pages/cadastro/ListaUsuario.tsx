import { useEffect, useState } from "react";
import { listarUsuarios } from "../../service/Service";
import Usuario from "../../models/Usuario";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await listarUsuarios("/usuarios/all");
        setUsuarios(response);
      } catch (error) {
        console.error("Erro ao buscar usuários", error);
      }
    }
    fetchData();
  }, []);

  function calcularIMC(peso: number, altura: number) {
    return (peso / (altura * altura)).toFixed(2);
  }

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-4">Lista de Usuários</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {usuarios.map((usuario) => (
          <div
            key={usuario.id}
            className="bg-gray-800 p-4 rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold">{usuario.nome}</h3>
            <p>Email: {usuario.email}</p>
            <p>Altura: {usuario.altura}m</p>
            <p>Peso: {usuario.peso}kg</p>
            <p>IMC: {calcularIMC(usuario.peso, usuario.altura)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaUsuarios;
