import axios from "axios";

const initialState = {
    movieList: [],
    currMovie: {
        title: "",
        id: "",
        releaseDate: ""
    },
    castList: [],
    answers: [],
    answerPool: [],
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

        case "INITIALIZE_APP":
            return {
                ...state,
                movieList: action.movies,
                loading: false
            };

        case "SET_ANSWER_POOL":
            return {
                ...state,
                answerPool: action.answerPool,
                loading: false
            };
        case "CREATE_QUESTION":
            return {
                ...state,
                currMovie: action.currMovie,
                castList: action.cast,
                answers: action.answers,
                loading: false
            }
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

export const initializeApp = () => {
    const tmdbMovieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=183f0e181e572ee212574833f29d2c1c&language=en-US&include_adult=false&include_video=false&release_date.gte=1990&release_date.lte=2018&vote_average.gte=6&with_genres=28%7C35%7C10751&sort_by=popularity.desc&page=1";

    return dispatch => {
        axios.get(tmdbMovieUrl).then(movieResponse => {
            dispatch({
                type: "GET_MOVIES",
                movies: movieResponse.data.results
            })

            // get popular people to use as pool of answers
            const popularUrlBase = "https://api.themoviedb.org/3/person/popular";
            const language = "?language=en-US&";
            const api_key = "api_key=183f0e181e572ee212574833f29d2c1c&";

            const output = {
                movies: movieResponse.data.results,
                answerPool: []
            }
            for (let pageNum = 1; pageNum <= 6; pageNum++) {
                let popularPeopleRequest = popularUrlBase + language + api_key + pageNum;

                axios.get(popularPeopleRequest)
                    .then(popularResponse => {
                        for (let j = 0; j < popularResponse.data.results.length; j++) {
                            if (!popularResponse.data.results[j].adult) {
                                output.answerPool.push({
                                    name: popularResponse.data.results[j].name,
                                    id: popularResponse.data.results[j].id
                                })
                            }
                        }

                    })
            } //end for loop
            return output;

        })
            .then(output => {
                // console.log(output);
                dispatch({
                    type: "SET_ANSWER_POOL",
                    answerPool: output.answerPool
                })
                dispatch(createQuestion(output.movies, output.answerPool));
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: `Initialize: ${err.message}`
                })
            })
    }
}

const getCast = (movieID) => {
    const tmdbUrl = "https://api.themoviedb.org/3/movie/";
    const credits = "/credits?"
    const api_key = "api_key=183f0e181e572ee212574833f29d2c1c";
    const castRequest = tmdbUrl + movieID + credits + api_key;
    return axios.get(castRequest);
}

const getAnswer = (castList, answerPool) => {
    // get random person from pool of potential answers
    // and make sure that personID is not included in the cast array
    do {
        var randomAnswerIndex = Math.floor(Math.random() * answerPool.length);
    } while (castList.some((member) => member.id === answerPool[randomAnswerIndex]));
    return answerPool[randomAnswerIndex];

}

export const createQuestion = (movieList, answerPool) => {
    // return a random movie object
    // Math.floor( Math.random() * (y-x) + x ) 
    let moviePick = movieList[Math.floor(Math.random() * movieList.length)];

    return dispatch => {
        getCast(moviePick.id)
            .then(castResponse => {
                const castList = castResponse.data.cast;
                const namesNeeded = 3;
                let choices = [];

                // console.log(castList);
                let cast_no_dup = Array.from(new Set(castList));
                // console.log(cast_no_dup);

                // shuffle array
                for (let i = cast_no_dup.length - 1, temp = null, j = 0; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1))
                    temp = cast_no_dup[i];
                    cast_no_dup[i] = cast_no_dup[j];
                    cast_no_dup[j] = temp;
                }

                // console.log(cast_no_dup)

                // now that array is shuffled, just pull the first 3 elements for "3 random elements"
                for (let i = 0; i < namesNeeded; i++) {
                    let answerObj = {
                        id: cast_no_dup[i].id,
                        name: cast_no_dup[i].name,
                        correctAnswer: false
                    }
                    choices.push(answerObj);
                }

                // get an actor who was NOT in the movie
                // this will be the CORRECT answer to the question
                let answer = getAnswer(castList, answerPool);

                choices = [...choices, { id: answer.id, name: answer.name, correctAnswer: true }];
                // console.log("before shuffle");
                // console.log(choices);

                // shuffle the array of answer choices so the right answer is not always in the same spot
                for (let i = choices.length - 1, temp = null, j = 0; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1))
                    temp = choices[i];
                    choices[i] = choices[j];
                    choices[j] = temp;
                }
                // console.log("after shuffle");
                // console.log(choices);

                dispatch({
                    type: "CREATE_QUESTION",
                    currMovie: {
                        id: moviePick.id,
                        releaseDate: moviePick.release_date,
                        title: moviePick.title
                    },
                    cast: castList,
                    answers: choices
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Get Cast: " + err.message
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

    // to get one actor from the API by ID
    // const tmdbPersonUrl = personUrlBase + randomPersonID + language + api_key;


Learning: 
Obviously using Redux and dispatching actions to the store.

How to do a second axios.get based on information obtained from the first request.
How to work around limitations / design of the API.
How to do nested ".then"s, i.e., "callback hell"

How to use lifecycle methods - OMG with the updating and refreshing.

How to structure methods such that I could do my simple MVP / proof of concept and then re-use them with minimal effort for the more complicated thing.

Lots of practice getting random elements from an array.

from Bob: to access the different stores
    state.movieStore
    state.pointsStore
*/

/* 
To "randomly" pick 3 elements from array without duplicates, but doesn't work.
  for (var i = 0; i < namesNeeded; i++) {
                    let nameAlreadyChosen = false;
                    let randomCastIndex = Math.floor(Math.random() * castList.length);
                    for (var j = 0; j < choices.length; j++) {
                        if (choices[i].id === castList[randomCastIndex].id) {
                            nameAlreadyChosen = true;
                           i--;
                        }
                    }
                    if (!nameAlreadyChosen) {
                        let answerObj = {
                            id: castList[randomCastIndex].id, 
                            name: castList[randomCastIndex].name,
                            correctAnswer: true
                        }
                        choices.push(answerObj);
                    }
                }
*/