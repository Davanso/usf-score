/* eslint-disable react/prop-types */
// CompetitionItem.tsx
import React, { memo } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import type { Competition } from "./Main_Competitions";

interface CompetitionItemProps {
  competition: Competition;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const CompetitionItem: React.FC<CompetitionItemProps> = memo(
  ({ competition, isFavorite, onToggleFavorite }) => (
    <li className="flex items-center justify-between p-2 rounded-lg hover:bg-[#2a2a2a] transition-colors cursor-pointer overflow-y-hidden">
      <div className="flex items-center space-x-3">
        {competition.icon}
        <span className="text-lg font-semibold">{competition.name}</span>
      </div>
      <button
        aria-label={
          isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
        }
        aria-pressed={isFavorite}
        onClick={() => onToggleFavorite(competition.id)}
        className="text-xl focus:outline-none cursor-pointer"
      >
        {isFavorite ? (
          <FaStar className="text-yellow-500" />
        ) : (
          <FaRegStar className="text-gray-400" />
        )}
      </button>
    </li>
  )
);

// Definir display name para o memo evitar erro react/display-name
CompetitionItem.displayName = "CompetitionItem";

export default CompetitionItem;
