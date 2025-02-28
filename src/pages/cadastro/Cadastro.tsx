import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    altura: "",
    peso: "",
  });

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo));
    } else {
      navigate("/cadastro");
    }
  }, [navigate]);

  const calcularIMC = () => {
    const altura = parseFloat(usuario.altura);
    const peso = parseFloat(usuario.peso);
    return (peso / (altura * altura)).toFixed(2);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="p-10 bg-white shadow-md rounded-md text-center">
        <h2 className="text-2xl font-bold mb-4">Perfil do Usuário</h2>
        <p>
          <b>Nome:</b> {usuario.nome}
        </p>
        <p>
          <b>Email:</b> {usuario.email}
        </p>
        <p>
          <b>Altura:</b> {usuario.altura} m
        </p>
        <p>
          <b>Peso:</b> {usuario.peso} kg
        </p>
        <p>
          <b>IMC:</b> {calcularIMC()}
        </p>
      </div>
    </div>
  );
}

export default Perfil;
