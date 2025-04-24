import React from "react";

type HeaderProps = {
  currentPage: string;
  setPage: (page: string) => void;
};

const Header = ({ currentPage, setPage }: HeaderProps) => {
  return (
    <header className="w-full bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        {/* <FootballIcon className="text-blue-600 w-6 h-6" /> */}
        <span className="text-xl font-semibold text-gray-800">FutScore</span>
      </div>
      <nav className="flex gap-4 text-sm">
        <button
          onClick={() => setPage("home")}
          className={`${
            currentPage === "home" ? "text-blue-600 font-bold" : "text-gray-700"
          }`}
        >
          Início
        </button>
        <button
          onClick={() => setPage("scores")}
          className={`${
            currentPage === "scores"
              ? "text-blue-600 font-bold"
              : "text-gray-700"
          }`}
        >
          Jogos
        </button>
      </nav>
    </header>
  );
};

export default Header;
