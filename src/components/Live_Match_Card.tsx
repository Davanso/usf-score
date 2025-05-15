import React, { useEffect, useState } from "react";
import { getLiveBrazilianMatch } from "../../services/apiFootball";

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

const MatchCard: React.FC<{ match: MatchData }> = ({ match }) => (
  <div className="bg-[#111] flex flex-col items-center px-4 py-4 rounded-md mb-4">
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
  </div>
);

const MatchHighlights: React.FC = () => {
  const [matches, setMatches] = useState<MatchData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLiveBrazilianMatch();
      const matchList = Array.isArray(data) ? data : [data];
      setMatches(matchList);
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!matches.length) {
    return (
      <div className="text-white text-center mt-10">
        Carregando partidas ao vivo...
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 mt-10 w-full max-w-[850px] min-w-0 md:min-w-[400px] max-h-[1395px] flex flex-col rounded-2xl gap-4 shadow-md bg-[#181818] overflow-y-hidden text-white overflow-auto mx-auto">
      <div className="text-center font-bold text-lg border-b border-red-700 mb-4">
        Partidas Ao Vivo
      </div>

      {matches.map((match, index) => (
        <div key={match.fixture?.id || index}>
          <div className="text-center text-sm text-gray-400 mb-1">
            {match.league?.name || "Liga desconhecida"}
          </div>
          <MatchCard match={match} />
        </div>
      ))}
    </div>
  );
};

export default MatchHighlights;
