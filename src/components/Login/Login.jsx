import React from 'react'
import {reduxForm, Field} from "redux-form";
import {Input} from "../Command/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redax/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../Command/FormsControl/FormsControl.module.css'


const LoginForm = (props) =>{
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                     <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={'rememberMe'} component={Input}/>Remember me
                </div>
                {props.error && <div className={s.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const ReduxLoginForm = reduxForm({form:'login'})(LoginForm)

export const Login = (props) =>{
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login)
