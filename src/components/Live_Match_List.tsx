// src/components/LiveMatchesList.tsx

import React, { useEffect, useState } from "react";
import LiveMatchCard from "./Live_Match_Card";
import { getLiveBrazilianMatch } from "../../services/apiFootball";

// Mesmo tipo usado no LiveMatchCard
interface Props {
  match: {
    teams: {
      home: { name: string; logo: string };
      away: { name: string; logo: string };
    };
    goals: { home: number; away: number };
    status: { elapsed: number };
    league: {
      name: string;
      country?: string;
    };
  };
}

const LiveMatchesList = () => {
  const [matches, setMatches] = useState<Props[]>([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const data = await getLiveBrazilianMatch();

      // Transforma em array para manter compatibilidade com renderização múltipla
      setMatches([data]);
    };

    fetchMatches();
  }, []);

  if (matches.length === 0)
    return <div className="text-white">Nenhuma partida ao vivo.</div>;

  return (
    <div className="space-y-4">
      {matches.map((match, index) => (
        <LiveMatchCard key={index} match={match} />
      ))}
    </div>
  );
};

export default LiveMatchesList;
