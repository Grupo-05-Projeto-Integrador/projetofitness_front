import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscarUsuarioPorId } from "../../service/Service";

function Perfil() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState<any>(null);

  useEffect(() => {
    async function fetchUsuario() {
      try {
        if (!id) return;
        const resposta = await buscarUsuarioPorId(`/usuarios/${id}`);
        setUsuario(resposta);
      } catch (error) {
        console.error("Erro ao buscar usuário", error);
      }
    }

    fetchUsuario();
  }, [id]);

  const calcularIMC = (peso: number, altura: number) => {
    return (peso / (altura * altura)).toFixed(2);
  };

  if (!usuario) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-400 text-lg">Carregando...</p>
      </div>
    );
  }

  const imc = calcularIMC(usuario.peso, usuario.altura);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-400">
        Perfil do Usuário
      </h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <p className="text-lg">
          <strong className="text-pink-400">Nome:</strong> {usuario.nome}
        </p>
        <p className="text-lg">
          <strong className="text-pink-400">Email:</strong> {usuario.email}
        </p>
        <p className="text-lg">
          <strong className="text-pink-400">Altura:</strong> {usuario.altura} m
        </p>
        <p className="text-lg">
          <strong className="text-pink-400">Peso:</strong> {usuario.peso} kg
        </p>
        <p className="text-lg">
          <strong className="text-pink-400">IMC:</strong> {imc}
        </p>
      </div>
    </div>
  );
}

export default Perfil;
