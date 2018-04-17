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
    wrongPool: [],
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

        case "SET_WRONG_PEOPLE_POOL":
            return {
                ...state,
                wrongPool: action.wrongPool,
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

            // get popular people to use as pool of wrong answers
            const popularUrlBase = "https://api.themoviedb.org/3/person/popular";
            const language = "?language=en-US&";
            const api_key = "api_key=183f0e181e572ee212574833f29d2c1c&";

            const output = {
                movies: movieResponse.data.results,
                wrongPool: []
            }
            for (let pageNum = 1; pageNum <= 6; pageNum++) {
                let popularPeopleRequest = popularUrlBase + language + api_key + pageNum;

                axios.get(popularPeopleRequest)
                    .then(popularResponse => {
                        for (let j = 0; j < popularResponse.data.results.length; j++) {
                            if (!popularResponse.data.results[j].adult) {
                                output.wrongPool.push({
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
                    type: "SET_WRONG_PEOPLE_POOL",
                    wrongPool: output.wrongPool
                })
                dispatch(createQuestion(output.movies, output.wrongPool));
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

const getWrongAnswer = (castList, wrongPool) => {
    // get random person from pool of potential wrong answers
    // and make sure that personID is not included in the cast array
    do {
        var randomWrongIndex = Math.floor(Math.random() * wrongPool.length);
    } while (castList.some((member) => member.id === wrongPool[randomWrongIndex]));
    return wrongPool[randomWrongIndex];

}

export const createQuestion = (movieList, wrongPool) => {
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

                for (let i = cast_no_dup.length - 1, temp = null, j = 0; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1))
                    temp = cast_no_dup[i];
                    cast_no_dup[i] = cast_no_dup[j];
                    cast_no_dup[j] = temp;
                }

                // console.log(cast_no_dup)

                for (let i = 0; i < namesNeeded; i++) {
                    let answerObj = {
                        id: cast_no_dup[i].id,
                        name: cast_no_dup[i].name,
                        correctAnswer: false
                    }
                    choices.push(answerObj);
                }

                let wrongAnswer = getWrongAnswer(castList, wrongPool);

                choices = [...choices, { id: wrongAnswer.id, name: wrongAnswer.name, correctAnswer: true }];

                // console.log("before shuffle");
                // console.log(choices);

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


Learning: 

Obviously using Redux and dispatching actions to the store.

How to do a second axios.get based on information obtained from the first request.
How to work around limitations / design of the API.
How to do nested ".then"s, i.e., "callback hell"

How to use lifecycle methods - OMG with the updating and refreshing.

How to structure methods such that I could do my simple MVP / proof of concept and then re-use them with minimal effort for the more complicated thing.

Lots of practice getting random elements from an array.

    state.movieStore
    state.score
*/

/* getWrongAnswer Notes
    //need a "wrong answer" actor
    // query to get most recently added person, i.e., the number of people in the db:
    // https://api.themoviedb.org/3/person/latest?api_key=183f0e181e572ee212574833f29d2c1c&language=en-US

    // As of 2018-APR-12, there are 2022078 people in the db. 
    // Using 2,000,000 as max just because it's a nice round number.

    // query to get the person with id 2000000:  "https://api.themoviedb.org/3/person/2000000?api_key=183f0e181e572ee212574833f29d2c1c&language=en-US"

    // Math.floor( Math.random() * (y-x) + x ) 
*/



// export const getMovies = () => {
//     const tmdbMovieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=183f0e181e572ee212574833f29d2c1c&language=en-US&include_adult=false&include_video=false&release_date.gte=1990&release_date.lte=2018&vote_average.gte=6&with_genres=28&sort_by=popularity.desc&page=1";

//     return dispatch => {
//         axios.get(tmdbMovieUrl).then(response => {
//             dispatch({
//                 type: "GET_MOVIES",
//                 movies: response.data.results
//             })
//         })
//             .catch(err => {
//                 dispatch({
//                     type: "ERR_MSG",
//                     errMsg: err.message
//                 })
//             })
//     }
// }



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


// const tmdbPersonUrl = personUrlBase + randomPersonID + language + api_key;
// let popularPeopleRequest = popularUrlBase + language + api_key + pageNum;

// const popularPeopleRequest = "https://api.themoviedb.org/3/person/popular?language=en-US&api_key=183f0e181e572ee212574833f29d2c1c&page=1";


// const getWrongAnswer = (castList) => {
//     // max_person is the max person ID in the db - see note
//     let max_person = 2000000;

//     // get random personID between 0 and max_person
//     // and make sure that personID is not included in the cast array
//     do {
//         var randomPersonID = Math.floor(Math.random() * max_person);
//     } while (castList.some((member) => member.id === randomPersonID));

//     //ARGH - ALSO NEED TO MAKE SURE THE PERSON IS NOT AN "ADULT" ACTOR.
//     // And make sure the person actually exists.

//     const personUrlBase = "https://api.themoviedb.org/3/person/";
//     const language = "?language=en-US&";
//     const api_key = "api_key=183f0e181e572ee212574833f29d2c1c";

//     const tmdbPersonUrl = personUrlBase + randomPersonID + language + api_key;

//     // const popularPeopleRequest = "https://api.themoviedb.org/3/person/popular?language=en-US&page=1&api_key=183f0e181e572ee212574833f29d2c1c";

//     return axios.get(tmdbPersonUrl);
// }
