import React, { Component } from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redax/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";;



class ProfileComponent extends React.Component {

    componentDidMount() {
        debugger
        let id = this.props.match.params.userId;
        if(!id){
            id = this.props.authorizedUserId;
            if(!id){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(id);
        this.props.getStatus(id);
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
)

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
)(ProfileComponent)


