/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import liveBrazilianMatchMock from "../mocks/liveBrazilianMatchMock";
import oddsMock from "../mocks/oddsMock";

const USE_MOCK = true;

const api = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-apisports-key": import.meta.env.VITE_API_FOOTBALL_KEY,
  },
});

export const getOdds = async (fixtureId: number) => {
  if (USE_MOCK) {
    return oddsMock;
  }

  try {
    const { data } = await api.get("/odds", {
      params: { live: "all", bookmaker: 6, fixture: fixtureId },
    });

    const bookmaker = data.response?.[0]?.bookmakers?.[0]; // Pega o primeiro bookmaker

    if (!bookmaker || !bookmaker.bets) return [];

    const formattedOdds = bookmaker.bets.flatMap((bet: any) =>
      bet.values.map((val: any) => ({
        label: `${bet.label} - ${val.value}`,
        odd: val.odd,
      }))
    );

    return formattedOdds;
  } catch (error) {
    console.error("Erro ao buscar odds:", error);
    return [];
  }
};

export const getLiveBrazilianMatch = async (): Promise<any[]> => {
  // Prioriza jogos do Brasil.
  // Se não houver, tenta buscar partidas das principais ligas mundiais.
  // Se ainda assim não houver, retorna qualquer partida ao vivo.

  if (USE_MOCK) {
    return Array.isArray(liveBrazilianMatchMock)
      ? liveBrazilianMatchMock
      : [liveBrazilianMatchMock];
  }

  try {
    const { data } = await api.get("/fixtures", {
      params: { live: "all" },
    });

    const matches = Array.isArray(data?.response) ? data.response : [];

    const isBrazilian = (match: any) =>
      match.teams.home.name.toLowerCase().includes("brazil") ||
      match.teams.away.name.toLowerCase().includes("brazil") ||
      match.league.country.toLowerCase() === "brazil";

    const brazilianMatches = matches.filter(isBrazilian);

    if (brazilianMatches.length > 0) {
      return brazilianMatches;
    }

    // IDs das principais ligas: Premier League, La Liga, Serie A, Bundesliga, Ligue 1
    const topLeagueIds = [39, 140, 135, 78, 61];

    const topLeagueMatches = matches.filter((match: any) =>
      topLeagueIds.includes(match.league.id)
    );

    return topLeagueMatches.length > 0 ? topLeagueMatches : matches;
  } catch (error) {
    console.error("Erro ao buscar partidas ao vivo:", error);
    return [];
  }
};
