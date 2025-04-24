import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <Header currentPage={currentPage} setPage={setCurrentPage} />
      <main className="p-4">
        {currentPage === "home" && <Home section="home" />}
        {currentPage === "scores" && <Home section="scores" />}
      </main>
    </>
  );
}

export default App;
