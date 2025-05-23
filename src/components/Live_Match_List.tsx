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
        p-2 sm:p-3 md:p-4
        mt-6
        w-full max-w-[800px] min-w-0
        flex flex-col rounded-2xl gap-2 sm:gap-3 shadow-md
        bg-[#181818] text-white
        max-h-[950px] mx-auto mb-6
      "
    >
      <div className="text-center font-bold text-lg border-b border-red-700 mb-3">
        Partidas Ao Vivo
      </div>

      <div className="space-y-2 sm:space-y-3">
        {matches.map((match) => (
          <LiveMatchCard key={match.fixture.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default LiveMatchesList;
