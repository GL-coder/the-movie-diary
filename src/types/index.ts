export type StatusesType = {
  favorite: boolean;
  watched: boolean;
  next: boolean;
  delete: boolean;
};

export type RatingsType = {
  favorite: number;
  next: number;
};

export type MovieDataType = {
  Poster: string;
  Title: string;
  Released: string;
  Genre: string;
  Runtime: string;
  Actors: string;
  Director: string;
  Production: string;
  Country: string;
  linkTo: string;
  ratings: RatingsType;
  statuses: StatusesType;
};

export type AppStateType = {
  page: string;
  movieFilter: string;
  moviesData: Array<MovieDataType>;
  selectedMovie: MovieDataType | null;
};
