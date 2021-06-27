import React from 'react'
import '../../App.css'
import classes from './CustomFooter.module.css'
export default function CustomFooter() {
    return (
        <div className={["bg_dark",classes.footer_box].join(' ')}>
            <p className={["c_light",classes.txt_footer].join(' ')}>Made with &#10084; by <span className={"c_primary"}>Vikas Soni</span> | &#169; Inspired by others.</p>
        </div>
    )
}
