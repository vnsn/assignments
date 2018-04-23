import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const bountyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        case "GET_BOUNTIES":
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case "ADD_BOUNTY":
            return {
                ...state,
                data: [...state.data, action.newBounty],
                loading: false
            }
        case "EDIT_BOUNTY":
            return {
                ...state,
                loading: false,
                data: state.data.map(bounty => {
                    if (bounty._id === action.id) {
                        return action.editedBounty
                    } else return bounty;
                })
            }
        case "DELETE_BOUNTY":
            return {
                ...state,
                loading: false,
                data: state.data.filter(bounty =>
                    bounty._id !== action.id)
            }
        default:
            return state;
    }
}


export const getBounties = () => {
    return dispatch => {
        axios.get("/bounties")
            .then(response => {
                dispatch({
                    type: "GET_BOUNTIES",
                    newBounty: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "GET: " + err
                })
            })
    }
}

export const addBounty = (newBounty) => {
    return dispatch => {
        axios.post("/bounties/", newBounty)
            .then(response => {
                dispatch({
                    type: "ADD_BOUNTY",
                    newBounty: response.data
                })
            })
    }
}

export const deleteBounty = (id) => {
    return dispatch => {
        axios.delete("/bounties/" + id)
            .then(response => {
                dispatch({
                    type: "DELETE_BOUNTY",
                    id
                })
            })
    }
}

export const editBounty = (id, editedBounty) => {
    return dispatch => {
        axios.put("/bounties/" + id, editedBounty)
            .then(response => {
                dispatch({
                    type: "EDIT_BOUNTY",
                    editedBounty: response.data,
                    id
                })
            })
    }
}


export default bountyReducer;
