import React from 'react'
import Paginator from "../Command/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUserCount, pageSize, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       pageSize={pageSize} totalUserCount={totalUserCount}/>
            {
                props.users.map(u => <User user={u} followingInProgress={props.followingInProgress}
                                           unfollow={props.unfollow} follow={props.follow}
                                           key={u.id}/>
                )
            }
        </div>
    )
}
export default Users