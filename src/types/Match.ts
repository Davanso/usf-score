export interface Team {
  name: string;
  logo: string;
}

export interface Event {
  time: { elapsed: number };
  team: { name: string };
  player: { name: string };
  type: string;
}

export interface Match {
  teams: {
    home: Team;
    away: Team;
  };
  goals: {
    home: number;
    away: number;
  };
  events?: Event[];
  status: {
    elapsed: number;
  };
  league: {
    name: string;
    country?: string;
  };
  fixture: {
    id: number;
  };
}
