/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import liveBrazilianMatchMock from "../mocks/liveBrazilianMatchMock";
import oddsMock from "../mocks/oddsMock";

const USE_MOCK = false;

const api = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-apisports-key": import.meta.env.VITE_API_FOOTBALL_KEY,
  },
});

export const getLiveBrazilianMatch = async () => {
  if (USE_MOCK) {
    return liveBrazilianMatchMock;
  }

  const { data } = await api.get("/fixtures", { params: { live: "all" } });
  const matches = data.response;

  const brazilianMatch = matches.find(
    (match: any) =>
      match.teams.home.name.toLowerCase().includes("brazil") ||
      match.teams.away.name.toLowerCase().includes("brazil") ||
      match.league.country.toLowerCase() === "brazil"
  );

  return brazilianMatch || matches[0];
};

export const getOdds = async (fixtureId: number) => {
  if (USE_MOCK) {
    return oddsMock;
  }

  const { data } = await api.get("/odds?live=all&bookmaker=6", {
    params: { fixture: fixtureId },
  });
  return data.response[0]?.bookmakers || null;
};
