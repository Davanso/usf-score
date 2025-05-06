import React, { useEffect, useState } from "react";
import { getLiveBrazilianMatch, getOdds } from "../../services/apiFootball";

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
  events: {
    time: {
      elapsed: number; // Minuto do gol
    };
    team: {
      name: string; // Nome do time que marcou
    };
    player: {
      name: string; // Nome do jogador que marcou
    };
    type: string; // Tipo do evento (ex.: "Goal")
  }[];
  status: {
    elapsed: number;
  };
  league: {
    name: string;
  };
}

const MatchHighlights: React.FC = () => {
  // Estado para armazenar os dados da partida
  const [match, setMatch] = useState<MatchData | null>(null);
  const [odds, setOdds] = useState<{ label: string; odd: string }[]>([]);

  // Efeito para buscar os dados da partida ao vivo
  useEffect(() => {
    const fetchData = async () => {
      const data = await getLiveBrazilianMatch(); // Chamada à API para buscar a partida ao vivo
      setMatch(data); // Atualiza o estado com os dados da partida

      if (data?.fixture?.id) {
        const oddsData = await getOdds(data.fixture.id);
        setOdds(oddsData);
      }
    };

    fetchData(); // Busca inicial dos dados
    const interval = setInterval(fetchData, 60000); // Atualiza os dados a cada 60 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  // Exibe uma mensagem de carregamento enquanto os dados não são carregados
  if (!match) {
    return (
      <div className="text-white text-center mt-10">
        Carregando partida ao vivo...
      </div>
    );
  }

  return (
    <div className="p-8 mt-10 w-[400px] h-[580px] flex flex-col rounded-2xl gap-4 shadow-md bg-[#181818] text-white overflow-hidden mx-auto">
      {/* Título do componente */}
      <div className="text-center font-bold text-lg border-b border-gray-700">
        Ao Vivo - {match.league.name} {/* Nome da liga */}
      </div>{" "}
      {/* Placar da partida */}
      <div className="bg-[#111] flex flex-col items-center px-4 py-4 rounded-md">
        <div className="flex items-center justify-between w-full">
          {/* Escudo e nome do time da casa */}
          <div className="text-center w-1/3">
            <img
              src={match.teams.home.logo} // Logo do time da casa
              alt={match.teams.home.name} // Nome do time como texto alternativo
              className="w-10 h-10 mx-auto mb-1"
            />
            <p className="text-sm truncate">{match.teams.home.name}</p>{" "}
            {/* Nome do time */}
          </div>

          {/* Placar e status da partida */}
          <div className="text-center w-1/3">
            <p className="text-2xl font-bold text-red-500">
              {match.goals.home} - {match.goals.away} {/* Placar */}
            </p>
            <p className="text-sm text-red-400">
              {match.status?.elapsed
                ? `${match.status.elapsed} min`
                : "Ao vivo"}{" "}
              {/* Minutos decorridos */}
            </p>
          </div>

          {/* Escudo e nome do time visitante */}
          <div className="text-center w-1/3">
            <img
              src={match.teams.away.logo} // Logo do time visitante
              alt={match.teams.away.name} // Nome do time como texto alternativo
              className="w-10 h-10 mx-auto mb-1"
            />
            <p className="text-sm truncate">{match.teams.away.name}</p>{" "}
            {/* Nome do time */}
          </div>
        </div>

        {/* Lista de autores dos gols */}
        <div className="mt-4 w-full">
          <h3 className="text-center text-sm font-bold text-gray-300">
            Gols da Partida
          </h3>
          {match.events
            .filter((event) => event.type === "Goal") // Filtra apenas eventos de gol
            .map((event, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center text-sm text-gray-300"
              >
                <span>{event.time.elapsed}&apos;</span> {/* Minuto do gol */}
                <span className="pl-10 justify-center">
                  {event.player.name} {/* Nome do jogador */}
                </span>{" "}
                <span>{event.team.name}</span> {/* Nome do time */}
              </div>
            ))}
        </div>
      </div>
      {/* Simulação de odds ao vivo */}
      <div className="bg-[#222] px-4 py-3 space-y-3 rounded-md">
        {/* Título das odds */}
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-300">Resultado final</span>
          <div className="bg-[#ff4c0e] text-white text-xs px-2 py-1 rounded-md font-bold">
            Betano {/* Nome da casa de apostas */}
          </div>
        </div>

        {/* Odds para o resultado final */}
        <div className="grid grid-cols-1 gap-2 text-center text-sm">
          {Array.isArray(odds) && odds.length > 0 ? (
            odds.map((item, idx) => (
              <div className="bg-[#111] rounded-md py-2" key={idx}>
                <p className="text-white">{item.odd}</p>
                <p className="text-gray-400 text-xs mt-1">{item.label}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-3 text-xs">
              Odds não disponíveis
            </p>
          )}
        </div>

        {/* Rodapé com informações adicionais */}
        <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
          <p>Aposte com responsabilidade 18+</p>
          <a
            href="https://www.betano.bet.br/" // Link para a casa de apostas
            className="text-blue-400 hover:underline"
          >
            Odds adicionais
          </a>
        </div>
      </div>
    </div>
  );
};

export default MatchHighlights;
