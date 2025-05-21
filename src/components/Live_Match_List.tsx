// src/components/LiveMatchesList.tsx

import { useEffect, useState } from "react";
import LiveMatchCard from "./Live_Match_Card";
import { getLiveBrazilianMatch } from "../../services/apiFootball";

interface Team {
  name: string;
  logo: string;
}

interface MatchData {
  teams: {
    home: Team;
    away: Team;
  };
  goals: {
    home: number;
    away: number;
  };
  status: {
    elapsed: number;
  };
  league: {
    name: string;
    country?: string;
  };
  fixture: {
    id: number;
  };
}

const LiveMatchesList = () => {
  const [matches, setMatches] = useState<MatchData[]>([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const data = await getLiveBrazilianMatch();

      const matchArray = Array.isArray(data) ? data : [data];
      setMatches(matchArray); // ✅ Aqui agora é sempre array
    };

    fetchMatches();
  }, []);

  if (matches.length === 0)
    return <div className="text-white">Nenhuma partida ao vivo.</div>;

  return (
    <div className="space-y-4">
      {matches.map((match) => (
        <LiveMatchCard key={match.fixture.id} match={match} />
      ))}
    </div>
  );
};

export default LiveMatchesList;
