function Home() {
  return (
    <div
      className="bg-[length:100%_120%] bg-center min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('imges/sporty-woman2.png')",
      }}
    >
      <div className="w-full flex justify-center">
        <div className="container grid grid-cols-2 text-white py-10">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
            <div className="flex justify-around gap-4">
              <div className="rounded text-white border-white border-2 py-2 px-4 cursor-pointer hover:bg-white hover:text-indigo-900 transition">
                Nova Postagem
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
