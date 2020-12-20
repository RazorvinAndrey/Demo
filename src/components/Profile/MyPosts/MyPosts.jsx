import React from 'react'
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Command/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
    let AddPost = (value) => {
        props.addPost(value.newPost);
    }
    let postElements = props.posts.map(p => <Post like={p.likesCount} comment={p.commentCount}
                                                  massage={p.massage} key={p.id} id={p.id}/>);
    return (
        <div className={s.postsBlock}>
            <AddPostFormRedux onSubmit={AddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
});

const AddPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={s.grid}>
                <Field component={Textarea} name={'newPost'} placeholder='Enter your post...'
                validate={[required, maxLength10]}/>
                <button>Add message</button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddPostForm)
export default MyPosts;