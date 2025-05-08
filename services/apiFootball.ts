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

  const { data } = await api.get("/odds?live=all&bookmaker=6", {
    params: { fixture: fixtureId },
  });
  return data.response[0]?.bookmakers || null;
};

export const getLiveBrazilianMatch = async () => {
  if (USE_MOCK) {
    return liveBrazilianMatchMock;
  }

  const { data } = await api.get("/fixtures", { params: { live: "all" } });
  const matches = data.response;

  // Prioriza uma partida com time brasileiro no topo da lista
  const sortedMatches = [...matches].sort((a: any, b: any) => {
    const isBrazilian = (match: any) =>
      match.teams.home.name.toLowerCase().includes("brazil") ||
      match.teams.away.name.toLowerCase().includes("brazil") ||
      match.league.country.toLowerCase() === "brazil";

    const aIsBrazilian = isBrazilian(a) ? -1 : 1;
    const bIsBrazilian = isBrazilian(b) ? -1 : 1;

    return aIsBrazilian - bIsBrazilian;
  });

  return sortedMatches;
};
