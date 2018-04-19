import axios from "axios";

const initialState = {
    movieTitle: "",
    movieID: "",
    castList: [],
    loading: true,
    errMsg: ""
}

const castReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CAST":
            return {
                ...state,
                movieID: action.id,
                movieTitle: action.title,
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


export default castReducer;
