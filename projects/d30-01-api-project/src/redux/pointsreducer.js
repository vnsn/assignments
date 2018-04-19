
const initialState = {
    questions: 0,
    correct: 0
}

const pointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_QUESTIONS":
            return {
                ...state,
                questions: state.questions + 1,
            };

        case "INCREMENT_CORRECT":
            return {
                ...state,
                correct: state.correct + 1,
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
