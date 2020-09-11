import axios from "axios";

    export const FETCH_SMURFS = "FETCH_SMURFS";
    export const FETCH_SMURFS_SUCCESS ="FETCH_SMURFS_SUCCESS";
    export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
    export const ADD_SMURFS = "ADD_SMURFS";
    export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
    export const ADD_SMURFS_ERROR = "ADD_SMURFS_ERROR";

    export const fetchSmurfs = () => {
        return (dispatch) => {
            dispatch({ type: FETCH_SMURFS });
            axios.get("http://localhost:3333/smurfs")
                .then(response => {
                    dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data})
                })
                .catch(error => {
                    dispatch({ type: FETCH_SMURFS_ERROR, payload: { message: "Wendy killed all the Smurfs! What's happened to my skoooool?!"}})
                })
        }
    }


    export const addSmurfs = () => {
        
    }