import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Massage from "./Massage/Massage";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Command/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength = maxLengthCreator(30);
const  Dialogs = (props) =>{

    let dialogElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/> );
    let massageElements = props.messages.map( massage => <Massage massage={massage.massage} key={massage.id} id={massage.id}/> );
    let addNewMessage = (value) =>{
        props.addMessage(value.newMesagwBody);
    }
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {massageElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>


        </div>
    );
}

const AddMessageForm = (props) =>{
    return(
    <form onSubmit={props.handleSubmit}>
        <div className={s.grid}>
            <Field component={Textarea} name={'newMesagwBody'} placeholder='Enter your message...' validate={[required, maxLength]}/>
            <button>Add message</button>
        </div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)
export default Dialogs