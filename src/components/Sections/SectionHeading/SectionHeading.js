import React from 'react'
import classes from './SectionHeading.module.css'

export default function SectionHeading({heading}) {
    return (
        <div>
        <h3 className={[classes.sectionHeading, 'c_light'].join(' ')}>
            {heading}
        </h3>
        <div className={[classes.line, 'bg_primary'].join(' ')}>
        </div>
    </div>
    )
}
