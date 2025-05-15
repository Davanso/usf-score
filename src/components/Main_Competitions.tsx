// MainCompetitions.tsx
import React, { useState, useCallback } from "react";
import { FaChevronUp, FaChevronDown, FaTrophy } from "react-icons/fa";
import CompetitionItem from "./Competition_Item";
import { GB, ES, IT, DE, FR, BR, US } from "country-flag-icons/react/3x2";

export interface Competition {
  id: number;
  name: string;
  icon: React.ReactNode;
}

export const COMPETITIONS: Competition[] = [
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
  // Estado para armazenar os favoritos
  const [favorites, setFavorites] = useState<number[]>(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  // Estado para controlar a exibição de todas as competições
  const [showAll, setShowAll] = useState(false);

  // Efeito para armazenar os favoritos no localStorage
  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const toggleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  const visibleCompetitions = showAll ? COMPETITIONS : COMPETITIONS.slice(0, 4);

  return (
    <section
      className={
        `p-8 mt-10 ml-10 w-72 flex flex-col rounded-2xl gap-4 shadow-md bg-[#181818] text-white ` +
        `transition-all duration-300 overflow-y-hidden ${
          showAll ? "max-h-[600px]" : "max-h-[380px]"
        }`
      }
    >
      <h2 className="text-center text-xl font-bold mb-4">
        Principais Competições
      </h2>
      <ul className="flex flex-col gap-2 overflow-y-auto">
        {visibleCompetitions.map((comp) => (
          <CompetitionItem
            key={comp.id}
            competition={comp}
            isFavorite={favorites.includes(comp.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </ul>
      <button
        className="flex items-center justify-center mt-4 text-sm font-medium text-blue-300 hover:text-white focus:outline-none cursor-pointer"
        onClick={toggleShowAll}
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
    </section>
  );
};

export default MainCompetitions;
