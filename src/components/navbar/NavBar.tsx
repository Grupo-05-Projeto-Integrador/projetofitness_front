function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-[#090D28] text-white box-border max-h-18">
        <div className="container flex justify-between items-center text-lg">
          <img
            src="src/assets/LOGO3.png"
            className="max-h-24 w-auto pt-1"
            alt="Logo"
          />
          <div className="flex gap-8">
            <p className="font-sans text-base text-[#ea337b]">HOME</p>
            <p className="font-montserrat text-base">SOBRE</p>
            <p className="font-montserrat text-base">POSTAGENS</p>
            <p className="font-montserrat text-base">CATEGORIAS</p>
            <p className="font-montserrat text-base">PERFIL</p>
            <p className="font-montserrat text-base">SAIR</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
