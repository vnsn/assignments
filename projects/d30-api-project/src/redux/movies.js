import axios from "axios";

const initialState = {
    movieList: [],
    currMovie: {
        title: "",
        id: "",
        releaseDate: ""
    },
    castList: [],
    loading: true,
    errMsg: ""
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MOVIES":
            return {
                ...state,
                movieList: action.movies,
                loading: false
            };
        case "SAVE_MOVIE":
            return {
                ...state,
                currMovie: action.currMovie
            };
        case "GET_CAST":
            return {
                ...state,
                castList: action.cast,
                loading: false
            };
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            };
        default:
            return state;
    }
}

export const getMovies = () => {
    const tmdbMovieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=183f0e181e572ee212574833f29d2c1c&language=en-US&include_adult=false&include_video=false&release_date.gte=1990&release_date.lte=2018&vote_average.gte=6&with_genres=28&sort_by=popularity.desc&page=1";

    return dispatch => {
        axios.get(tmdbMovieUrl).then(response => {
            dispatch({
                type: "GET_MOVIES",
                movies: response.data.results
            })
        })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: err.message
                })
            })
    }
}

export const chooseRandomMovie = (movieList) => {
    // return a random movie object
    // Math.floor( Math.random() * (y-x) + x ) 
    return movieList[Math.floor(Math.random() * movieList.length)];
}

export const saveMovieData = (moviePick) => {
    // console.log("moviepick in save data:");
    // console.log(moviePick.id);
    // console.log(moviePick.release_date);
    // console.log(moviePick.title);
    return {
        type: "SAVE_MOVIE",
        currMovie: {
            id: moviePick.id,
            releaseDate: moviePick.release_date,
            title: moviePick.title
        }
    }
}

export const getCast = (movieID) => {
    const tmdbUrl = "https://api.themoviedb.org/3/movie/";
    const credits = "/credits?"
    const api_key = "api_key=183f0e181e572ee212574833f29d2c1c";
    const castRequest = tmdbUrl + movieID + credits + api_key;

    // console.log(castRequest);

    return dispatch => {
        axios.get(castRequest).then(response => {
            dispatch({
                type: "GET_CAST",
                cast: response.data.cast
            })
        })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: err.message
                })
            })
    }
}

export default movieReducer;

/*
API NOTES
    // https://developers.themoviedb.org/3/discover/movie-discover for parameter info
    // https://developers.themoviedb.org/3/genres/get-movie-list
    // genres included in game: 28: action, 35: comedy, 10751: family
    // 28,12,16,35,18,10751,10749,878


    const tmdbMovieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=183f0e181e572ee212574833f29d2c1c&language=en-US&include_adult=false&include_video=false&release_date.gte=1990&release_date.lte=2018&vote_average.gte=6&with_genres=28%7C35%7C10751&sort_by=popularity.desc&page=1";



    state.movieStore
    state.score
*/