import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../aceses/photos/oldrich-muller.jpg'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <span>
                <NavLink to={'/profile/' + user.id}>
                    <div className={s.item}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                    </div>
                </NavLink>

                <div className={s.item}>
                    {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={
                        () => {
                            unfollow(user.id)}}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={
                            () => {
                                follow(user.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div className={s.item}>{user.name}</div>
                    <div className={s.item}>{user.status}</div>
                </span>
                <span>
                    <div className={s.item}>{"user.location.city"}</div>
                    <div className={s.item}>{"user.location.country"}</div>
                </span>
            </span>
        </div>
    )

}
export default User