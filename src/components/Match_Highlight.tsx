import React, { useEffect, useState } from "react";
import { getLiveBrazilianMatch, getOdds } from "../../services/apiFootball";
import { FaFutbol } from "react-icons/fa";

interface Team {
  name: string;
  logo: string;
}

interface Event {
  time: { elapsed: number };
  team: { name: string };
  player: { name: string };
  type: string;
}

interface MatchData {
  teams?: {
    home?: Team;
    away?: Team;
  };
  goals?: {
    home?: number;
    away?: number;
  };
  events?: Event[];
  status?: {
    elapsed?: number;
  };
  league?: {
    name?: string;
  };
  fixture?: {
    id?: number;
  };
}

const MatchHighlights: React.FC = () => {
  const [match, setMatch] = useState<MatchData | null>(null);
  const [odds, setOdds] = useState<{ label: string; odd: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLiveBrazilianMatch();

      // Se for um array, pega a primeira partida. Se for objeto, usa direto.
      const matchData = Array.isArray(data) ? data[0] : data;

      setMatch(matchData);

      if (matchData?.fixture?.id) {
        const oddsData = await getOdds(matchData.fixture.id);
        setOdds(oddsData);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 600000);
    return () => clearInterval(interval);
  }, []);

  if (!match) {
    return (
      <div className="text-white text-center mt-10">
        Carregando partida ao vivo...
      </div>
    );
  }

  const goals = match.events?.filter((event) => event.type === "Goal") || [];

  return (
    <div className="p-8 mt-10 w-[400px] h-[670px] flex flex-col rounded-2xl gap-4 shadow-md bg-[#181818] text-white overflow-hidden mx-auto">
      <div className="text-center font-bold text-lg border-b border-gray-700">
        Ao Vivo - {match.league?.name || "Liga desconhecida"}
      </div>

      <div className="bg-[#111] flex flex-col items-center px-4 py-4 rounded-md">
        <div className="flex items-center justify-between w-full">
          <div className="text-center w-1/3">
            <img
              src={match.teams?.home?.logo}
              alt={match.teams?.home?.name}
              className="w-10 h-10 mx-auto mb-1"
            />
            <p className="text-sm truncate">{match.teams?.home?.name}</p>
          </div>

          <div className="text-center w-1/3">
            <p className="text-2xl font-bold text-red-500">
              {match.goals?.home ?? "-"} - {match.goals?.away ?? "-"}
            </p>
            <p className="text-sm text-red-400">
              {match.status?.elapsed
                ? `${match.status.elapsed} min`
                : "Ao vivo"}
            </p>
          </div>

          <div className="text-center w-1/3">
            <img
              src={match.teams?.away?.logo}
              alt={match.teams?.away?.name}
              className="w-10 h-10 mx-auto mb-1"
            />
            <p className="text-sm truncate">{match.teams?.away?.name}</p>
          </div>
        </div>

        <div className="mt-4 w-full">
          <h3 className="text-center text-sm font-bold text-gray-300 mb-2">
            Gols da Partida
          </h3>
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            {goals.map((event, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-1"
              >
                {/* Jogador do time da casa, alinhado à direita */}
                <div className="w-1/3 text-right pr-0.5">
                  {event.team.name === match.teams?.home?.name && (
                    <span>
                      {event.player.name} {event.time.elapsed}&apos;
                    </span>
                  )}
                </div>

                {/* Ícone de bola no centro */}
                <div className="flex justify-center text-green-500 w-[18px]">
                  <FaFutbol />
                </div>

                {/* Jogador do time visitante, alinhado à esquerda */}
                <div className="w-1/3 text-left pl-0.5">
                  {event.team.name === match.teams?.away?.name && (
                    <span>
                      {event.player.name} {event.time.elapsed}&apos;
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#222] px-4 py-3 space-y-3 rounded-md">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-300">Resultado final</span>
          <div className="bg-[#ff4c0e] text-white text-xs px-2 py-1 rounded-md font-bold">
            Betano
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 text-center text-sm">
          {Array.isArray(odds) && odds.length > 0 ? (
            odds.map((item, idx) => (
              <div className="bg-[#111] rounded-md py-2" key={idx}>
                <p className="text-white">{item.odd}</p>
                <p className="text-gray-400 text-xs mt-1">{item.label}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-3 text-xs">
              Odds não disponíveis
            </p>
          )}
        </div>

        <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
          <p>Aposte com responsabilidade 18+</p>
          <a
            href="https://www.betano.bet.br/"
            className="text-blue-400 hover:underline"
          >
            Odds adicionais
          </a>
        </div>
      </div>
    </div>
  );
};

export default MatchHighlights;
