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
