import updateMovieData from './update-movie';

const onChangeMovieRating = ({moviesData, selectedMovie}, {keyValue, newValue}) => {
    const updatedRatings = {
      ...selectedMovie.ratings,
      [keyValue]: newValue >= 1000 ? 999 : newValue,
    };

    const updatedMovie = {
        ...selectedMovie,
        ratings: updatedRatings
    };

    const movieIndex = moviesData.findIndex(({linkTo}) => linkTo === updatedMovie.linkTo);

    return {
        moviesData: updateMovieData(moviesData, updatedMovie, movieIndex),
        selectedMovie: updatedMovie
    }
}

export default onChangeMovieRating;