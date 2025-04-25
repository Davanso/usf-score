import React from "react";

import {
  FaSearch,
  FaStar,
  FaUser,
  FaQuestion,
  FaVolleyballBall,
  FaBasketballBall,
} from "react-icons/fa";
import { IoIosFootball, IoIosSettings } from "react-icons/io";
import { MdScoreboard } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-[#181818] text-white w-full px-20 py-2">
      {/* Linha 1 */}
      <div className="flex justify-between items-center px-4 py-3 gap-4 flex-wrap">
        {/* Logo */}
        <div className="text-xl font-semibold flex items-center gap-2">
          <MdScoreboard size={60} className="text-white" />
          {/* Placeholder logo */}
          <span>USF SCORE</span>
        </div>

        {/* Busca */}
        <div className="flex-1 max-w-[500px]">
          <div className="flex items-center bg-[#1e1e1e] rounded px-3 py-2">
            <FaSearch size={25} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Pesquise por partidas, competições, times, jogadores e mais"
              className="bg-transparent outline-none w-full text-sm placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Ações */}
        <div className="flex items-center gap-4 text-gray-300">
          <button className="bg-white text-black px-5 py-2 rounded text-xl font-medium">
            <FaUser size={25} className="inline mr-1" />
            ENTRAR
          </button>
          <FaStar size={22} />
          <FaQuestion size={22} />
          <IoIosSettings size={25} />
        </div>
      </div>

      {/* Esportes */}
      <div className="overflow-x-auto px-4 py-2 border-t border-[#2a2a2a]">
        <div className="flex gap-6 items-center text-1xl whitespace-nowrap">
          {/* Futebol */}
          <div className="flex items-center gap-1 text-white font-semibold">
            <IoIosFootball size={20} /> Futebol{" "}
            <span className="bg-gray-700 px-1 rounded text-xs">18</span>
          </div>
          {/* Basquete */}
          <div className="flex items-center gap-1 text-gray-300">
            <FaBasketballBall size={20} /> Basquete {""}
            <span className="bg-gray-700 px-1 rounded text-xs">6</span>
          </div>
          {/* Vôlei */}
          <div className="flex items-center gap-1 text-gray-300">
            <FaVolleyballBall size={20} /> Vôlei {""}
            <span className="bg-gray-700 px-1 rounded text-xs">2</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
