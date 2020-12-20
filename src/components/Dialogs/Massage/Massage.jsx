import React, { Component } from 'react'
import s from './Massage.module.css'

const Massage = (props) =>{
    return(
        <div className={s.messages}>-->{props.massage}</div>
    )
}

export default Massage