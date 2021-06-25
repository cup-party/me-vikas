import React from 'react'
import '../../App.css'
import classes from './CustomFooter.module.css'
export default function CustomFooter() {
    return (
        <div className={["bg_dark",classes.footer_box].join(' ')}>
            <p className={["c_light",classes.txt_footer].join(' ')}>Created by <span className={"c_primary"}>Vikas Soni</span> | &#169; All rights reserved.</p>
        </div>
    )
}
