const liveBrazilianMatchMock = {
  teams: {
    home: {
      name: "São Paulo",
      logo: "https://media.api-sports.io/football/teams/126.png",
    },
    away: {
      name: "Guarani",
      logo: "https://media.api-sports.io/football/teams/138.png",
    },
  },
  goals: {
    home: 2,
    away: 1,
  },
  events: [
    {
      time: { elapsed: 15 },
      team: { name: "São Paulo" },
      player: { name: "Rogério Ceni" },
      type: "Goal",
    },
    {
      time: { elapsed: 33 },
      team: { name: "Guarani" },
      player: { name: "Messi" },
      type: "Goal",
    },
    {
      time: { elapsed: 55 },
      team: { name: "São Paulo" },
      player: { name: "Rogério Ceni" },
      type: "Goal",
    },
  ],
  status: { elapsed: 87 },
  league: {
    name: "Brasileirão Série A",
    country: "Brasil",
  },
  fixture: {
    id: 12345,
    status: {
      elapsed: 87,
    },
  },
};

export default liveBrazilianMatchMock;
