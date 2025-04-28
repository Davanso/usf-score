import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import heat_map_neymar from "../assets/heat_map_neymar.png";
import neymar_png from "../assets/neymar_png.png";
import cr7_png from "../assets/cr7_png.png";
import messi_png from "../assets/messi_png.png";
import depay_png from "../assets/depay_png.png";
import rato_png from "../assets/rato_png.png";

interface Player {
  id: number;
  name: string;
  team: string;
  rating: number;
  imageUrl: string;
}

const players: Player[] = [
  {
    id: 1,
    name: "Neymar Jr",
    team: "Barcelona",
    rating: 9.8,
    imageUrl: neymar_png,
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    team: "Real Madrid",
    rating: 9.7,
    imageUrl: cr7_png,
  },
  {
    id: 3,
    name: "Lionel Messi",
    team: "Barcelona",
    rating: 9.5,
    imageUrl: messi_png,
  },
  {
    id: 4,
    name: "Memphis Depay",
    team: "Corinthians",
    rating: 9.4,
    imageUrl: depay_png,
  },
  {
    id: 5,
    name: "Wellington Rato",
    team: "Vitória",
    rating: 3.3,
    imageUrl: rato_png,
  },
];

const BestPlayers: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const visiblePlayers = showAll ? players : players.slice(0, 3);

  return (
    <div
      className={`p-8 ml-auto mt-10 mr-10 w-[400px] flex flex-col rounded-2xl gap-4 shadow-md bg-[#181818] text-white transition-all duration-300 ${
        showAll ? "max-h-[800px]" : "max-h-[600px]"
      } overflow-hidden`}
    >
      {/* Título do componente */}
      <h2 className="text-center text-xl font-bold mb-2">Melhores jogadores</h2>

      {/* Lista de jogadores */}
      <div className="flex flex-col gap-3 cursor-pointer">
        {visiblePlayers.map((player, index) => (
          <div
            key={player.id}
            className="flex flex-col gap-2 p-2 rounded-lg hover:bg-[#2a2a2a] transition"
          >
            {/* Informações do jogador */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold">{index + 1}</span>
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">{player.name}</span>
                  <span className="text-xs text-gray-400">{player.team}</span>
                </div>
              </div>
              <div className="text-blue-400 font-bold">{player.rating}</div>
            </div>

            {/* Renderizar o mapa de calor abaixo do jogador 1 */}
            {index === 0 && (
              <div className="mt-4">
                <img
                  src={heat_map_neymar}
                  alt="Heatmap"
                  className="rounded-xl w-full h-[220px] object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botão de expandir/recolher */}
      <button
        className="flex items-center justify-center mt-4 text-sm font-medium text-blue-300 hover:text-white cursor-pointer"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? (
          <>
            Mostrar menos <FaChevronUp className="ml-2" />
          </>
        ) : (
          <>
            Mostrar mais <FaChevronDown className="ml-2" />
          </>
        )}
      </button>
    </div>
  );
};

export default BestPlayers;
