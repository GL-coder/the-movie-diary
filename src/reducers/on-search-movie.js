const onSearchMovie = ({ moviesData }, { fullMovieData, title }) => {
  if (title.length > 0 && fullMovieData.Response === "True") {
    const checkMovieInData = moviesData.find(
      ({ Poster, Title }) =>
        Poster === fullMovieData.Poster && Title === fullMovieData.Title
    );

    if (checkMovieInData === undefined) {
      const {
        Poster,
        Title,
        Released,
        Genre,
        Runtime,
        Actors,
        Director,
        Production,
        Country,
      } = fullMovieData;

      const movieData = {
        Poster,
        Title,
        Released,
        Genre,
        Runtime,
        Actors,
        Director,
        Production,
        Country,
      };

      const linkTo = Title.replace(/\s/g, "_");

      const newMovie = {
        ...movieData,
        linkTo,
        ratings: {
          favorite: 1,
          next: 1,
        },
        statuses: {
            favorite: false,
            watched: false,
            next: false,
            delete: true
        }
      };

      return { selectedMovie: newMovie };
    } else {
      return { selectedMovie: checkMovieInData };
    }
  } else {
    return {
      selectedMovie: { linkTo: null },
    };
  }
};

export default onSearchMovie;