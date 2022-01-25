const onCheckDetails = (state, activeLinkTo) => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    const checkMovieInData = state.moviesData.find(({linkTo}) => linkTo === activeLinkTo);

    if (checkMovieInData === undefined) {
        return {
            moviesData: [
                state.selectedMovie,
                ...state.moviesData
            ],
            page: 'details'
        }
    }else {
        return {
          selectedMovie: checkMovieInData,
          page: "details"
        };
    }
}

export default onCheckDetails;