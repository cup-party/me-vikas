import React from 'react'
import icon from '../../../assets/images/icon_gmail.png'
import classes from './SocialMedia.module.css'
export default function SocialMedia() {
    return (
        <div>
            <img className={classes.iconImg} src={icon} alt="social media"/>
        </div>
    )
}
