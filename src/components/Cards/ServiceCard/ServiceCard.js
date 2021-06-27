import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import classes from './ServiceCard.module.css'

export default function ServiceCard({ heading, image }) {
    return (
        <Col xs={12} sm={6} lg={4}>
            <div className={[classes.cardBox, 'c_light'].join(' ')}>
                <Row>
                    <img className={[classes.cardImage].join(' ')} src={image} alt="skill icon" />
                </Row>
                <Row>
                    <h2 className={[classes.cardHeading].join(' ')}>
                        {heading}
                    </h2>
                </Row>
            </div>
        </Col>
    )
}
