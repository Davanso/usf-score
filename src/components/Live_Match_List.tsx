import { useEffect, useState } from "react";
import LiveMatchCard from "./Live_Match_Card";
import { getLiveBrazilianMatch } from "../../services/apiFootball";
import { Match } from "../types/Match";

const LiveMatchesList = () => {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const data = await getLiveBrazilianMatch();
      const arrayData = Array.isArray(data) ? data : [data];
      setMatches(arrayData);
    };

    fetchMatches();
  }, []);

  if (matches.length === 0) {
    return (
      <div className="text-white text-center mt-10">
        Carregando partidas ao vivo...
      </div>
    );
  }

  return (
    <div
      className="
        p-4 sm:p-6 md:p-8
        mt-10
        w-full max-w-[1000px] min-w-0
        flex flex-col rounded-2xl gap-3 sm:gap-4 shadow-md
        bg-[#181818] overflow-y-hidden text-white
        overflow-auto mx-auto mb-10
      "
    >
      <div className="text-center font-bold text-lg border-b border-red-700 mb-4">
        Partidas Ao Vivo
      </div>

      <div className="space-y-3 sm:space-y-4">
        {matches.map((match) => (
          <LiveMatchCard key={match.fixture.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default LiveMatchesList;
