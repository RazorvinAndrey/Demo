import React, { Component } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../Command/Preloader/Preloader";
import userPhoto from "../../../aceses/photos/oldrich-muller.jpg";
import workPhoto1 from '../../../aceses/photos/images.jpeg'
import workPhoto2 from '../../../aceses/photos/png-transparent-internet-troll-smile-trollface-smile-face-people-smiley.png'
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.fon}>
                <img src='https://www.ampravda.ru/files/articles-2/87378/f5ouao9p9c16-640.jpg'/>
            </div>
            <div className={s.disc}>
                <div>
                    <div className={s.ava}>
                        <img src={props.profile.data.photos.small != null ? props.profile.data.photos.small : userPhoto}/>
                    </div>
                    <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
                    <br/>
                    <div className={s.grid}>
                        <div>Статус поиска работы:</div>
                        <div className={s.status}>
                            <img src={props.profile.data.lookingForAJob != true ? workPhoto1 : workPhoto2}/>
                        </div>
                        {props.profile.data.lookingForAJobDescription}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;