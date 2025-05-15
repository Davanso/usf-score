import React, { useState, useEffect } from "react";
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
import { useLogin } from "../hooks/useLogin";
import { COMPETITIONS } from "./Main_Competitions";

const Header = () => {
  // Estado para armazenar o usuário
  const { user, loginWithGoogle, logout, loading } = useLogin();

  const [favorites, setFavorites] = useState<number[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Efeito para armazenar os favoritos no localStorage
  useEffect(() => {
    const loadFavorites = () => {
      const stored = localStorage.getItem("favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    };

    loadFavorites();

    window.addEventListener("storage", loadFavorites);
    return () => window.removeEventListener("storage", loadFavorites);
  }, []);

  // Função para alternar o estado do dropdown
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <header className="bg-[#181818] text-white w-full px-20 py-2">
      {/* Linha 1 */}
      <div className="flex justify-between items-center px-4 py-3 gap-4 flex-wrap">
        {/* Logo */}
        <div className="text-xl font-semibold flex items-center gap-2">
          <MdScoreboard size={60} className="text-white" />
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
          {user ? (
            <div className="flex items-center gap-2 bg-white text-black px-4 py-1 rounded cursor-pointer">
              <img
                src={user.photo}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium">{user.name}</span>
              <button
                onClick={logout}
                className="ml-2 text-xs text-black hover:text-red-500 cursor-pointer"
              >
                sair
              </button>
            </div>
          ) : (
            <button
              onClick={loginWithGoogle}
              className="bg-white text-black px-5 py-2 rounded-2xl text-xl font-medium cursor-pointer hover:bg-gray-200 transition duration-200 ease-in-out "
              disabled={loading}
            >
              <FaUser size={25} className="inline mr-1" />
              {loading ? "Carregando..." : "ENTRAR"}
            </button>
          )}
          <div className="relative">
            <button onClick={toggleDropdown}>
              <FaStar size={22} className="hover:text-yellow-400 transition" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-[#2a2a2a] rounded-2xl shadow-lg z-50 text-sm text-white">
                <div className="px-4 py-2 font-semibold border-b border-gray-600">
                  Favoritos
                </div>
                {favorites.length === 0 ? (
                  <div className="px-4 py-2 text-gray-400">Nenhum favorito</div>
                ) : (
                  <ul className="max-h-60 overflow-y-auto rounded-2xl">
                    {favorites.map((id) => {
                      const comp = COMPETITIONS.find(
                        (c: { id: number }) => c.id === id
                      );
                      return comp ? (
                        <li
                          key={id}
                          className="px-4 py-2 hover:bg-red-900 flex items-center gap-2"
                        >
                          {comp.icon}
                          {comp.name}
                        </li>
                      ) : null;
                    })}
                  </ul>
                )}
              </div>
            )}
          </div>

          <FaQuestion size={22} />
          <IoIosSettings size={25} />
        </div>
      </div>

      {/* Esportes */}
      <div className="overflow-x-auto px-4 py-2 border-t border-[#2a2a2a]">
        <div className="flex gap-6 items-center text-1xl whitespace-nowrap">
          <div className="flex items-center gap-1 text-white font-semibold border-1 border-[#00000] rounded-2xl p-1.5 cursor-pointer hover:bg-gray-500">
            <IoIosFootball size={20} /> Futebol{" "}
            <span className="bg-gray-700 px-1 rounded text-xs">18</span>
          </div>
          <div className="flex items-center gap-1 text-gray-300">
            <FaBasketballBall size={20} /> Basquete{" "}
            <span className="bg-gray-700 px-1 rounded text-xs">6</span>
          </div>
          <div className="flex items-center gap-1 text-gray-300">
            <FaVolleyballBall size={20} /> Vôlei{" "}
            <span className="bg-gray-700 px-1 rounded text-xs">2</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
