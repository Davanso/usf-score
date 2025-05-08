import React from "react";

interface Props {
  match: {
    fixture: {
      status: {
        elapsed: number;
      };
    };
    teams: {
      home: { name: string; logo: string };
      away: { name: string; logo: string };
    };
    goals: { home: number; away: number };
    status: { elapsed: number };
    league: { name: string; country: string };
  };
}

const LiveMatchCard = ({ match }: Props) => {
  return (
    <div className="bg-[#1e1e1e] rounded-2xl gap-4 w-150 h-[1325px] mt-10 mb-10 shadow-md p-4 text-white">
      {/* País e Liga */}
      <div className="text-sm text-gray-400 mb-2 p-2">
        {match.league.country} • {match.league.name}
      </div>

      {/* Times e placar */}
      <div className="flex items-center justify-between gap-4 bg-[#181818] rounded-2xl p-2">
        {/* Lado esquerdo: tempo + logos */}
        <div className="flex flex-col justify-center items-center w-12">
          <span className="text-1xl text-red-500 font-semibold">
            {match.fixture.status.elapsed}&apos;
          </span>
        </div>

        {/* Times */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={match.teams.home.logo}
                alt={match.teams.home.name}
                className="w-6 h-6"
              />
              <span className="text-sm">{match.teams.home.name}</span>
            </div>
            {/* Lado direito: Gols Home */}
            <div className="flex items-center gap-2 mr-3">
              <span className="text-lg font-bold">{match.goals.home}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <img
                src={match.teams.away.logo}
                alt={match.teams.away.name}
                className="w-6 h-6"
              />
              <span className="text-sm">{match.teams.away.name}</span>
            </div>
            {/* Lado direito: Gols Away */}
            <div className="flex items-center gap-2 mr-3">
              <span className="text-lg font-bold">{match.goals.away}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatchCard;
