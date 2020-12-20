import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sideBarReducer from "./sidebar-reducer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
            profilePage: {
                posts: [
                    {id:1, massage:'Yooo', likesCount:12, commentCount:6},
                    {id:2, massage:'Men, you...', likesCount:5, commentCount:2},
                    {id:3, massage:'Facking buetifull!', likesCount:2, commentCount:8},
                    {id:4, massage:'Venera ebat dura...', likesCount:20, commentCount:13},
                ],
                newPostText: '',


            },
            massagesPage: {
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
                newMessageText: '',
            },
            sidebarPage: {

            },
        },
    _callSubscriber() {

    },

    getState(){
      return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.massagesPage = messageReducer(this._state.massagesPage, action);
        this._state.sidebarPage = sideBarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    },

};


export default store;
window.store = store;