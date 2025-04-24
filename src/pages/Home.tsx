import React from "react";

type HomeProps = {
  section: "home" | "scores";
};

const Home = ({ section }: HomeProps) => {
  return (
    <div>
      {section === "home" && (
        <div>
          {/* Aqui vai o conteúdo da home */}
          <p>Bem-vindo ao FutScore!</p>
        </div>
      )}
      {section === "scores" && (
        <div>
          {/* Aqui vai a lista de jogos ou estatísticas */}
          <p>Veja os placares dos jogos!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
