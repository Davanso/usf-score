import axios from "axios";

const api = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-apisports-key": import.meta.env.VITE_API_FOOTBALL_KEY,
  },
});

export const getTeamLogo = async (teamName: string) => {
  try {
    const response = await api.get(`/teams`, {
      params: { search: teamName },
    });

    const team = response.data.response[0]?.team;
    return team?.logo || null;
  } catch (error) {
    console.error("Error fetching team logo:", error);
    return null;
  }
};

// Buscar partida ao vivo com time brasileiro
export const getLiveBrazilianMatch = async () => {
  const { data } = await api.get("/fixtures", { params: { live: "all" } });

  const matches = data.response;

  interface Match {
    teams: {
      home: { name: string };
      away: { name: string };
    };
    league: {
      country: string;
    };
  }

  const brazilianMatch = matches.find((match: Match) => {
    return (
      match.teams.home.name.toLowerCase().includes("brazil") ||
      match.teams.away.name.toLowerCase().includes("brazil") ||
      match.league.country.toLowerCase() === "brazil"
    );
  });

  return brazilianMatch || matches[0]; // Se não achar, retorna o primeiro
};

// Buscar as odds
export const getOdds = async (fixtureId: number) => {
  try {
    const { data } = await api.get("/odds?live=all&bookmaker=6", {
      params: { fixture: fixtureId },
    });
    return data.response[0]?.bookmakers || null;
  } catch (error) {
    console.error("Error fetching odds:", error);
    return null;
  }
};
