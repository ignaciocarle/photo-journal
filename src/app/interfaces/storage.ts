export interface Film {
  iso: string,
  shotsCap: number,
  shotsFired: number,
  reel: Shot[],
}

export interface Shot {
  id?: number,
  mode: string,
  aperture: string,
  speed: string,
  exposure: string,
  flash: string,
  comments: string,
  accessories: string,
}

export interface AppDb {
  user: User,
  films: Film[],
}

export interface User {
  username: string,
}