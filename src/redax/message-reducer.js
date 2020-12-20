const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id:1, name:'Stepan'},
        {id:2, name:'Iban'},
        {id:3, name:'Nastya'},
        {id:4, name:'Dima'},
        {id:5, name:'Max'},
        {id:6, name:'Aleona'},
    ],
    massages: [
        {id:1, massage:'Hi'},
        {id:2, massage:'You podor'},
        {id:3, massage:'Fack? Men...'},
        {id:4, massage:'Venera ebat dura...'},
    ],
}

const messageReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_MESSAGE:{
            let body = action.newMesagwBody;
            return  {...state,
                massages: [...state.massages, {id: 5, massage: body}]}
        }

        default:
            return state;
    }
}
export const addMessageActionCreator = (newMesagwBody) => {
    return {type: ADD_MESSAGE, newMesagwBody};
}

export default messageReducer;