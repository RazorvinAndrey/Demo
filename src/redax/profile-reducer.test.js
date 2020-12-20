import {addPostActionCreator, deletePost, profileReducer} from "./profile-reducer";

let state = {
    posts: [
        {id:1, massage:'Yooo', likesCount:12, commentCount:6},
        {id:2, massage:'Men, you...', likesCount:5, commentCount:2},
        {id:3, massage:'Facking buetifull!', likesCount:2, commentCount:8},
        {id:4, massage:'Venera ebat dura...', likesCount:20, commentCount:13},
    ]}

test('new post should be added', () => {
    //1.test data
    let action = addPostActionCreator('kamasutra');
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(5);
});

test('delete post', () => {
    //1.test data
    let action = deletePost(1);
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(3);
});
