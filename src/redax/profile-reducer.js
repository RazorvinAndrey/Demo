import {profileAPI} from "../api/Api";

const ADD_POST = 'ADD-POST'
let SET_USER_PROFILE = 'SET-USER-PROFILE'
let SET_STATUS = 'SET-STATUS'
let DELETE_POST = 'DELETE-POST'


let initialState = {
    posts: [
        {id:1, massage:'Yooo', likesCount:12, commentCount:6},
        {id:2, massage:'Men, you...', likesCount:5, commentCount:2},
        {id:3, massage:'Facking buetifull!', likesCount:2, commentCount:8},
        {id:4, massage:'Venera ebat dura...', likesCount:20, commentCount:13},
    ],
    newPostText: '',
    profile: null,
    status: '',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            return {...state,
                posts: [...state.posts, {id: 5, massage: action.newPost, likesCount: 0, commentCount: 0}]}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId) }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => {
    return {type: ADD_POST, newPost}
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}

export const deletePost = (postId) => {
    return {type: DELETE_POST, postId}
}

export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}

export const getUserProfile = (id) => async (dispatch) =>{
    let response = await profileAPI.getProfile(id)
    dispatch(setUserProfile(response))
}

export const getStatus = (id) => async (dispatch) =>{
    let response = await profileAPI.getStatus(id)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
