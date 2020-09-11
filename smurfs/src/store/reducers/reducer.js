
import { 
    FETCH_SMURFS,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_ERROR,
    ADD_SMURFS,
    ADD_SMURFS_SUCCESS,
    ADD_SMURFS_ERROR
} from "../actions"

const initialState = {
    name: "",
    age: null,
    height: "",
    id: null,
    loadingSmurfs: true,
    errorMessage: ""
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS: 
            return {
                ...state,
                loadingSmurfs: true
            }
        case FETCH_SMURFS_ERROR:
            return {
                ...state,
                loadingSmurfs: false,
                errorMessage: action.payload.message
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                
            }
        default:
            return state
    }
}