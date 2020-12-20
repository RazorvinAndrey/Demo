import React, { Component } from 'react'
import {addMessageActionCreator} from "../../redax/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: (newMesagwBody) => {
            dispatch(addMessageActionCreator(newMesagwBody));
        }
    }
}


let mapStateToProps = (state) => {
    return{
        dialogs: state.massagesPage.dialogs,
        messages: state.massagesPage.massages,
        newMessageText: state.massagesPage.newMessageText,
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)