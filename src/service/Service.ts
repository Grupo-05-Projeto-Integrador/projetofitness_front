import axios from "axios";

const api = axios.create({
  baseURL: "https://projetointegradorfitness.onrender.com/",
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const buscar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};

export const cadastrar = async (
  url: string,
  dados: object,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setDados: Function
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const atualizar = async (
  url: string,
  dados: object,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setDados: Function
) => {
  const resposta = await api.put(url, dados);
  setDados(resposta.data);
};

export const deletar = async (url: string) => {
  await api.delete(url);
};
