import React, { useEffect, useState } from "react";
import { getTeamLogo } from "../../services/apiFootball";

// COMPONENTE DE ESCUDO
const TeamLogo: React.FC<{ teamName: string }> = ({ teamName }) => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogo = async () => {
      const logo = await getTeamLogo(teamName);
      setLogoUrl(logo);
    };

    fetchLogo();
  }, [teamName]);

  return (
    <div className="text-center">
      {logoUrl ? (
        <img src={logoUrl} alt={teamName} className="w-10 h-10 mx-auto mb-1" />
      ) : (
        <div className="w-10 h-10 bg-gray-700 mx-auto mb-1 rounded" />
      )}
      <p className="text-sm">{teamName}</p>
    </div>
  );
};

const MatchHighlights: React.FC = () => {
  return (
    <div className="p-8 mt-10 w-[400px] h-[350px] flex flex-col rounded-2xl gap-4 shadow-md bg-[#181818] text-white overflow-hidden">
      {/* Título */}
      <div className="text-center font-bold text-lg border-b border-gray-700 ">
        Destacado
      </div>

      {/* Placar e times */}
      <div className="bg-[#111] flex justify-between items-center px-4 py-4 rounded-md">
        {/* Prop para passar o nome/escudo do time */}
        <TeamLogo teamName="Corinthians" />

        <div className="text-center">
          <p className="text-2xl font-bold text-red-500">0 - 0</p>
          <p className="text-sm text-red-400">1º tempo</p>
        </div>

        {/* Prop para passar o nome/escudo do time */}
        <TeamLogo teamName="Palmeiras" />
      </div>

      {/* Odds e botão da casa */}
      <div className="bg-[#222] px-4 py-3 space-y-3 rounded-md">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-300">Resultado final</span>
          <div className="bg-[#ff4c0e] text-white text-xs px-2 py-1 rounded-md font-bold">
            Betano
          </div>
        </div>

        {/* Botões de aposta */}
        <div className="grid grid-cols-3 gap-2 text-center text-sm">
          <div className="bg-[#111] rounded-md py-2">
            <p className="text-green-400">▲ 2.60</p>
            <p className="text-gray-400 text-xs mt-1">1</p>
          </div>
          <div className="bg-[#111] rounded-md py-2">
            <p className="text-red-400">▼ 2.27</p>
            <p className="text-gray-400 text-xs mt-1">X</p>
          </div>
          <div className="bg-[#111] rounded-md py-2">
            <p className="text-white">4.20</p>
            <p className="text-gray-400 text-xs mt-1">2</p>
          </div>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
          <p>Aposte com responsabilidade 18+</p>
          <a href="#" className="text-blue-400 hover:underline">
            Odds adicionais
          </a>
        </div>
      </div>
    </div>
  );
};

export default MatchHighlights;
