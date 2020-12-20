import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }

        }
        default:
            return state;
    }
}

export const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (diapatch) => {
    let promise = diapatch(getAuthUserData())
    Promise.all([promise])
        .then(() => (
            diapatch(setInitializedSuccess())
        ))
}


export default appReducer;