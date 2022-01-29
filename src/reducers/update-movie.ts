import { MovieDataType } from "./../types/";

const updateMovieData = (
  moviesData: Array<MovieDataType>,
  item: MovieDataType | null,
  index: number
) => {
  if (item === null) {
    return [...moviesData.slice(0, index), ...moviesData.slice(index + 1)];
  }

  return [...moviesData.slice(0, index), item, ...moviesData.slice(index + 1)];
};

export default updateMovieData;