import React from "react";
import { Match } from "../types/Match";

interface Props {
  match: Match;
}

const LiveMatchCard: React.FC<Props> = ({ match }) => {
  return (
    <div className="bg-[#111] flex flex-col items-center px-2 py-2 sm:py-4 rounded-md mb-3 sm:mb-4 w-full sm:w-[90%] mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between w-full gap-4 sm:gap-0">
        <div className="flex flex-col items-center justify-center text-center w-full sm:w-1/3">
          <img
            src={match.teams.home.logo || "/placeholder.png"}
            alt={match.teams.home.name}
            className="w-10 h-10 mb-1"
          />
          <p className="text-sm break-words w-full px-1">
            {match.teams.home.name}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center w-full sm:w-1/3">
          <p className="text-2xl font-bold text-red-500">
            {match.goals.home} - {match.goals.away}
          </p>
          <p className="text-xs text-gray-400">
            {match.status && typeof match.status.elapsed === "number"
              ? `${match.status.elapsed}'`
              : "--"}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center w-full sm:w-1/3">
          <img
            src={match.teams.away.logo || "/placeholder.png"}
            alt={match.teams.away.name}
            className="w-10 h-10 mb-1"
          />
          <p className="text-sm break-words w-full px-1">
            {match.teams.away.name}
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-2 text-center break-words px-2">
        {match.league.name}
      </p>
    </div>
  );
};

export default LiveMatchCard;
