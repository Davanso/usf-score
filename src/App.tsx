import React from "react";
import Header from "./components/Header";
import MainCompetitions from "./components/Main_Competitions";
import BestPlayers from "./components/Best_Players";
import MatchHighlights from "./components/Match_Highlight";
import LiveMatchesList from "./components/Live_Match_List";

function App() {
  return (
    <div className="bg-[#000000] min-h-screen">
      <Header />
      <div className="flex w-full justify-between px-10">
        {/* MainCompetitions na esquerda */}
        <MainCompetitions />

        {/* Live games no centro */}
        <LiveMatchesList />

        {/* MatchHighlights e BestPlayers na direita*/}
        <div className="flex flex-col items-end gap-6">
          <MatchHighlights />
          <BestPlayers />
        </div>
      </div>
    </div>
  );
}

export default App;
