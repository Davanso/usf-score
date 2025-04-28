import React from "react";
import Header from "./components/Header";
import MainCompetitions from "./components/Main_Competitions";
import BestPlayers from "./components/Best_Players";

function App() {
  return (
    <div className="bg-[#000000] min-h-screen">
      <Header />
      <MainCompetitions />
      <BestPlayers />
    </div>
  );
}

export default App;
