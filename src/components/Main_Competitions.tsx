import React, { useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaChevronUp,
  FaChevronDown,
  FaTrophy,
} from "react-icons/fa";
import { GB, ES, IT, DE, FR, BR, US } from "country-flag-icons/react/3x2";

interface Competition {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const competitions: Competition[] = [
  { id: 1, name: "Brasileirão", icon: <BR className="w-6 h-4" /> },
  { id: 2, name: "La Liga", icon: <ES className="w-6 h-4" /> },
  { id: 3, name: "Premier League", icon: <GB className="w-6 h-4" /> },
  { id: 4, name: "Bundesliga", icon: <DE className="w-6 h-4" /> },
  { id: 5, name: "Serie A", icon: <IT className="w-6 h-4" /> },
  { id: 6, name: "Ligue 1", icon: <FR className="w-6 h-4" /> },
  { id: 7, name: "MLS", icon: <US className="w-6 h-4" /> },
  { id: 8, name: "Copa do Mundo", icon: <FaTrophy className="w-6 h-4" /> },
];

const MainCompetitions: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]); // Estado para controlar comp. favoritas
  const [showAll, setShowAll] = useState(false); // Estado para controlar exibição de todas as competições

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // Para alternar a exibição de todas as competições
  const visibleCompetitions = showAll ? competitions : competitions.slice(0, 4);

  return (
    <div className="p-8 fixed left-10 top-45 w-80 flex flex-col rounded-2xl gap-4 shadow-md bg-[#181818] text-white">
      {/* Título do componente */}
      <h2 className="text-center text-xl font-bold mb-4">
        Principais competições
      </h2>

      {/* Lista de competições */}
      {visibleCompetitions.map((competition) => (
        <div
          key={competition.id}
          className="flex items-center justify-between p-1.5 rounded-lg shadow-md hover:bg-[#2a2a2a] transition duration-200 ease-in-out cursor-pointer"
        >
          {/* Informações da competição */}
          <div className="flex items-center space-x-4">
            <span className="text-1xl">{competition.icon}</span>
            <span className="text-lg font-semibold">{competition.name}</span>
          </div>

          {/* Botão de favorito */}
          <button
            className="text-xl cursor-pointer"
            onClick={() => toggleFavorite(competition.id)}
          >
            {favorites.includes(competition.id) ? (
              <FaStar className="text-yellow-500" />
            ) : (
              <FaRegStar className="text-gray-400" />
            )}
          </button>
        </div>
      ))}

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

export default MainCompetitions;
