
const initialState = {
    questions: 13,
    correct: 13
}

const pointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_QUESTIONS":
            return {
                ...state,
                questions: state.questions++,
                loading: false
            };

        case "INCREMENT_CORRECT":
            return {
                ...state,
                correct: state.correct++,
                loading: false
            };
        default:
            return state;
    }
}


export const incrementQuestions = () => {
    return dispatch => {
        dispatch({
            type: "INCREMENT_QUESTIONS",
        })
    }
}

export const incrementCorrect = () => {
    return dispatch => {
        dispatch({
            type: "INCREMENT_CORRECT",
        })
    }
}


export default pointsReducer;
