import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./ModalPostagens.css";
import FormPostagens from "../formpostagens/FormPostagens";

function ModalPostagem() {
  return (
    <Popup
      trigger={
        <button className="border rounded px-4 py-2 hover:bg-white hover:text-pink-500">
          Nova Postagem
        </button>
      }
      modal
    >
      <FormPostagens />
    </Popup>
  );
}

export default ModalPostagem;
