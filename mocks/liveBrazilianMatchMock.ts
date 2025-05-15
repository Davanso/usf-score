const liveBrazilianMatchMock = [
  {
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
    goals: { home: 2, away: 1 },
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
    league: { name: "Brasileirão Série A", country: "Brasil" },
    fixture: { id: 12345, status: { elapsed: 87 } },
  },
  {
    teams: {
      home: {
        name: "Flamengo",
        logo: "https://media.api-sports.io/football/teams/127.png",
      },
      away: {
        name: "Botafogo",
        logo: "https://media.api-sports.io/football/teams/120.png",
      },
    },
    goals: { home: 1, away: 1 },
    events: [
      {
        time: { elapsed: 10 },
        team: { name: "Flamengo" },
        player: { name: "Pedro" },
        type: "Goal",
      },
      {
        time: { elapsed: 70 },
        team: { name: "Botafogo" },
        player: { name: "Tiquinho Soares" },
        type: "Goal",
      },
    ],
    status: { elapsed: 75 },
    league: { name: "Carioca", country: "Brasil" },
    fixture: { id: 12346, status: { elapsed: 75 } },
  },
  {
    teams: {
      home: {
        name: "Palmeiras",
        logo: "https://media.api-sports.io/football/teams/121.png",
      },
      away: {
        name: "Santos",
        logo: "https://media.api-sports.io/football/teams/128.png",
      },
    },
    goals: { home: 0, away: 0 },
    events: [],
    status: { elapsed: 40 },
    league: { name: "Paulista", country: "Brasil" },
    fixture: { id: 12347, status: { elapsed: 40 } },
  },
  {
    teams: {
      home: {
        name: "Corinthians",
        logo: "https://media.api-sports.io/football/teams/131.png",
      },
      away: {
        name: "Ponte Preta",
        logo: "https://media.api-sports.io/football/teams/139.png",
      },
    },
    goals: { home: 3, away: 2 },
    events: [
      {
        time: { elapsed: 5 },
        team: { name: "Corinthians" },
        player: { name: "Renato Augusto" },
        type: "Goal",
      },
      {
        time: { elapsed: 25 },
        team: { name: "Ponte Preta" },
        player: { name: "Bruno Rodrigues" },
        type: "Goal",
      },
      {
        time: { elapsed: 35 },
        team: { name: "Corinthians" },
        player: { name: "Yuri Alberto" },
        type: "Goal",
      },
      {
        time: { elapsed: 60 },
        team: { name: "Corinthians" },
        player: { name: "Fausto Vera" },
        type: "Goal",
      },
      {
        time: { elapsed: 75 },
        team: { name: "Ponte Preta" },
        player: { name: "Zé Roberto" },
        type: "Goal",
      },
    ],
    status: { elapsed: 85 },
    league: { name: "Paulista", country: "Brasil" },
    fixture: { id: 12348, status: { elapsed: 85 } },
  },
  {
    teams: {
      home: {
        name: "Cruzeiro",
        logo: "https://media.api-sports.io/football/teams/135.png",
      },
      away: {
        name: "Atlético-MG",
        logo: "https://media.api-sports.io/football/teams/1062.png",
      },
    },
    goals: { home: 0, away: 2 },
    events: [
      {
        time: { elapsed: 12 },
        team: { name: "Atlético-MG" },
        player: { name: "Hulk" },
        type: "Goal",
      },
      {
        time: { elapsed: 65 },
        team: { name: "Atlético-MG" },
        player: { name: "Paulinho" },
        type: "Goal",
      },
    ],
    status: { elapsed: 90 },
    league: { name: "Mineiro", country: "Brasil" },
    fixture: { id: 12349, status: { elapsed: 90 } },
  },
  {
    teams: {
      home: {
        name: "Fortaleza",
        logo: "https://media.api-sports.io/football/teams/15719.png",
      },
      away: {
        name: "Ceará",
        logo: "https://media.api-sports.io/football/teams/129.png",
      },
    },
    goals: { home: 1, away: 0 },
    events: [
      {
        time: { elapsed: 44 },
        team: { name: "Fortaleza" },
        player: { name: "Moises" },
        type: "Goal",
      },
    ],
    status: { elapsed: 60 },
    league: { name: "Cearense", country: "Brasil" },
    fixture: { id: 12350, status: { elapsed: 60 } },
  },
  {
    teams: {
      home: {
        name: "Cruzeiro",
        logo: "https://media.api-sports.io/football/teams/135.png",
      },
      away: {
        name: "Atlético-MG",
        logo: "https://media.api-sports.io/football/teams/1062.png",
      },
    },
    goals: { home: 0, away: 2 },
    events: [
      {
        time: { elapsed: 12 },
        team: { name: "Atlético-MG" },
        player: { name: "Hulk" },
        type: "Goal",
      },
      {
        time: { elapsed: 65 },
        team: { name: "Atlético-MG" },
        player: { name: "Paulinho" },
        type: "Goal",
      },
    ],
    status: { elapsed: 90 },
    league: { name: "Mineiro", country: "Brasil" },
    fixture: { id: 12349, status: { elapsed: 90 } },
  },
  {
    teams: {
      home: {
        name: "Cruzeiro",
        logo: "https://media.api-sports.io/football/teams/135.png",
      },
      away: {
        name: "Atlético-MG",
        logo: "https://media.api-sports.io/football/teams/1062.png",
      },
    },
    goals: { home: 0, away: 2 },
    events: [
      {
        time: { elapsed: 12 },
        team: { name: "Atlético-MG" },
        player: { name: "Hulk" },
        type: "Goal",
      },
      {
        time: { elapsed: 65 },
        team: { name: "Atlético-MG" },
        player: { name: "Paulinho" },
        type: "Goal",
      },
    ],
    status: { elapsed: 90 },
    league: { name: "Mineiro", country: "Brasil" },
    fixture: { id: 12349, status: { elapsed: 90 } },
  },
];

export default liveBrazilianMatchMock;
