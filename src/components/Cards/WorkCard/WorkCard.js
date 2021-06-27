import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import classes from './WorkCard.module.css'

export default function WorkCard({ image, heading, text = "" }) {
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        let isTooMuchText = (text.length > 70) ? true : false;
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            isTooMuchText ?
                <span className={classes.text}>
                    {isReadMore ? text.slice(0, 45) : text}
                    <span onClick={toggleReadMore} className={[classes.read_or_hide, 'c_primary'].join(' ')}>
                        {
                            isReadMore
                                ? " ...read more"
                                : " show less"
                        }
                    </span>
                </span> : text
        );
    };
    return (
        <Col xs={12} sm={6} lg={4}>
            <Card className={classes.box} style={{ width: '18rem' }}>
                <Card.Img className={classes.cardImage} variant="top" src={image} />
                <Card.Body className={"c_light"}>
                    <Card.Title className={[classes.cardHeading].join(' ')}>{heading}</Card.Title>
                    <Card.Text className={[classes.cardText, 'c_lighter'].join(' ')}>
                        <ReadMore>
                            {text}
                        </ReadMore>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
