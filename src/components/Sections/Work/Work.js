import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import classes from './Work.module.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import WorkCard from '../../Cards/WorkCard/WorkCard'

import becoImg from '../../../assets/images/work/beco-web.png'
import quarAppImg from '../../../assets/images/work/quarguard-app.png'
import cupWebAppImg from '../../../assets/images/work/food-app.png'
import blogImg from '../../../assets/images/work/blog-web.png'
import ecomImg from '../../../assets/images/work/ecom-web.png'
import quickImg from '../../../assets/images/work/quicksite-web.png'

export default function Work({ heading }) {
    return (
        <div id="work" className={['bg_dark', classes.box].join(' ')}>
            <Container>
                <SectionHeading heading="Work" />
                <Row className={classes.main_row}>
                    <WorkCard
                        image={cupWebAppImg}
                        heading="CupParty - Web App"
                        text="This food ordering replaces the physical Menu Card in a restaurant
                         and allows users to order food from the table itself." />

                    <WorkCard
                        image={quickImg}
                        heading="Quicksite Template"
                        text="This web template is developed for a website development product." />

                    <WorkCard
                        image={quarAppImg}
                        heading="Quarguard - App"
                        text="This Android App is used to monitor quarantine patients affected
                         by COVID-19. Authorities can track the patients and patient can also 
                         send image, message, voice note, symptoms etc." />

                    <WorkCard
                        image={becoImg}
                        heading="Beecofriendly.in"
                        text="The website for the startup which promotes and encourages people
                         to use eco-friendly products and save environment." />

                    <WorkCard
                        image={blogImg}
                        heading="Blog Template"
                        text="Above template is for a Blogging Website enabling users to share and comment on blogs." />

                    <WorkCard
                        image={ecomImg}
                        heading="E-Commerce Template"
                        text="The above template is a clone of a well known e-commerce platform Flipkart." />

                </Row>
            </Container>
        </div>
    )
}
