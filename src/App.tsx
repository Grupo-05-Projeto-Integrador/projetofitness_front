import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import "./App.css";
import ListaCategoria from "./components/categoria/listaCategoria/ListaCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens";
import FormPostagem from "./components/postagens/formpostagens/FormPostagens";
import Sobre from "./pages/sobre/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/cadastrarpostagem" element={<FormPostagem />} />
            <Route path="/editarpostagem/:id" element={<FormPostagem />} />
            <Route path="/postagens" element={<ListaPostagens />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route
              path="/deletarcategoria/:id"
              element={<DeletarCategoria />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
