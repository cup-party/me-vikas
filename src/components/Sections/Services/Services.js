import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import classes from './Services.module.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from '../../Cards/ServiceCard/ServiceCard'

import responsive_icon from '../../../assets/images/services/responsive-icon.png'
import spa_icon from '../../../assets/images/services/spa-icon.png'
import ui_icon from '../../../assets/images/services/ui-icon.png'

export default function Services() {
    return (
        <div id="services" className={['bg_dark', classes.box].join(' ')}>
            <Container>
                <SectionHeading heading="Services" />
                <Row className={classes.main_row}>
                    <ServiceCard heading="Single Page App" image={spa_icon} />
                    <ServiceCard heading="UI Development" image={ui_icon} />
                    <ServiceCard heading="Responsive Design" image={responsive_icon} />
                </Row>
            </Container>
        </div>
    )
}
