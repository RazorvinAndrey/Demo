import {usersAPI} from "../api/Api";
import {updateObjectInArray} from "../utils/helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUserCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingProgress ? [...state.followingInProgress, action.userId] :
                    [state.followingInProgress.filter(id => id != action.userId)]
            }
        }

        default:
            return state;
    }
}

export const acceptFollow = (userId) => ({type: FOLLOW, userId})

export const acceptUnFollow = (userId) => ({type: UNFOLLOW, userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount})

export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const toggleFollowingProgress = (followingProgress, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    followingProgress,
    userId
})

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
}
export const unfollow = (id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        let data = await usersAPI.follow(id)
        if (data.resultCode === 0) {
            dispatch(acceptUnFollow(id))
        }
        dispatch(toggleFollowingProgress(false, id));
    }
}

export const follow = (id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        let data = await usersAPI.unFollow(id)
        if (data.resultCode === 0) {
            dispatch(acceptFollow(id))
        }
        dispatch(toggleFollowingProgress(false, id));
    }
}

export default usersReducer;