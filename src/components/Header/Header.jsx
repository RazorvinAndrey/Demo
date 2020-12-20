import React, { Component } from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://www.logo.wine/a/logo/Pornhub/Pornhub-Logo.wine.svg'/>
            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'} activeClassName={s.active}>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;