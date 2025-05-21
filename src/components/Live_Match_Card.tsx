import React from "react";

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

const LiveMatchCard: React.FC<{ match: MatchData }> = ({ match }) => (
  <div className="bg-[#111] flex flex-col items-center px-4 py-4 rounded-md">
    <div className="flex items-center justify-between w-full">
      <div className="text-center w-1/3">
        <img
          src={match.teams.home.logo}
          alt={match.teams.home.name}
          className="w-10 h-10 mx-auto mb-1"
        />
        <p className="text-sm truncate">{match.teams.home.name}</p>
      </div>

      <div className="text-center w-1/3">
        <p className="text-2xl font-bold text-red-500">
          {match.goals.home} - {match.goals.away}
        </p>
        <p className="text-sm text-red-400">{match.status.elapsed} min</p>
      </div>

      <div className="text-center w-1/3">
        <img
          src={match.teams.away.logo}
          alt={match.teams.away.name}
          className="w-10 h-10 mx-auto mb-1"
        />
        <p className="text-sm truncate">{match.teams.away.name}</p>
      </div>
    </div>
  </div>
);

export default LiveMatchCard;
