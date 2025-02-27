import { useState, useEffect } from "react";
import { buscar } from "../../../service/Service"; // Ajuste o caminho conforme necessário

interface Categoria {
  id: number;
  descricao: string;
}

function FormPostagem() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [postagem, setPostagem] = useState({
    titulo: "",
    texto: "",
    foto: "", // Campo para o link da imagem
    categoria: "",
  });

  useEffect(() => {
    async function carregarCategorias() {
      try {
        await buscar("/categorias", setCategorias);
      } catch (error) {
        console.error("Erro ao buscar categorias", error);
      }
    }
    carregarCategorias();
  }, []);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setPostagem({
      ...postagem,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("Dados enviados:", postagem);

    // Simula envio (substituir pelo código real de requisição)
    setTimeout(() => {
      alert("Postagem cadastrada com sucesso!");
    }, 1000);
  }

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">Cadastrar Postagem</h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Título da Postagem</label>
          <input
            type="text"
            placeholder="Título"
            name="titulo"
            required
            value={postagem.titulo}
            onChange={handleChange}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="texto">Texto da Postagem</label>
          <input
            type="text"
            placeholder="Texto"
            name="texto"
            required
            value={postagem.texto}
            onChange={handleChange}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Link da Imagem</label>
          <input
            type="text"
            placeholder="Cole o link da imagem"
            name="foto"
            value={postagem.foto}
            onChange={handleChange}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        {/* Pré-visualização da imagem */}
        {postagem.foto && (
          <img
            src={postagem.foto}
            alt="Pré-visualização"
            className="w-full max-w-xs h-40 object-cover mx-auto border rounded-md"
          />
        )}

        <div className="flex flex-col gap-2">
          <p>Categoria da Postagem</p>
          <select
            name="categoria"
            id="categoria"
            value={postagem.categoria}
            onChange={handleChange}
            className="border p-2 border-slate-800 rounded"
          >
            <option value="" disabled selected>
              Selecione uma Categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.descricao}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormPostagem;
