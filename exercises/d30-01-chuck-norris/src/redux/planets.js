import axios from "axios";

const initialState = {
    castList: [],
    loading: true,
    errMsg: ""
}

const planetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PLANETS":
            return {
                ...state,
                castList: action.planets,
                loading: false
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        default:
            return state;
    }
}

// const swapiUrl = "https://swapi.co/api/planets/";
// const tmdbUrl = "https://api.themoviedb.org/3/movie/";
// const movieID = "354912/";
// const credits = "credits?"
// const api_key = "api_key=183f0e181e572ee212574833f29d2c1c";

const chuckUrl = "http://api.icndb.com/jokes/random?exclude=[explicit]"

// console.log( tmdbUrl + movieID + credits + api_key);

export const getPlanets = () => {
    return dispatch => {
        // axios.get(swapiUrl)
        // axios.get(tmdbUrl + movieID + credits + api_key)
        axios.get(chuckUrl)
            .then(response => {
                //dispatch an action
                console.log(response.cast);
                dispatch({
                    type: "GET_PLANETS",
                    // planets: response.data.results
                    // planets: response.data.cast
                    planets: response.data.value.joke
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

export default planetReducer;

