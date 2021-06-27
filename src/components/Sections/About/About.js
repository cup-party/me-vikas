import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import classes from './About.module.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import paw_image from '../../../assets/images/items/paw-steps.png'
export default function About() {
    return (
        <div id="about" className={['bg_dark', classes.box].join(' ')}>
            <Container>
                <SectionHeading heading="About Me" />
                <Row className={classes.main_row}>
                    <Col className={classes.col_left} xs={12} sm={6}>
                        {/* content */}
                        <div className={classes.sectionContentBox}>
                            <h3 className={[classes.leftParaHeading, 'c_light'].join(' ')}>
                                You can't use up creativity.
                                <br></br>
                                The more you use, the more you have in your significant mind.
                            </h3>
                            <p className={[classes.leftPara, 'c_lighter'].join(' ')}>
                                Hi, I am a software engineer, uses creative approaches in solving problems.
                                <br></br>
                                My focus of interest is on the front-end part of applications but I also do the back-end part as having good problem-solving skills.
                            </p>
                        </div>
                    </Col>
                    <Col className={[classes.col_right_1].join(' ')} xs={8} sm={4}>
                        <img className={classes.pawImg} src={paw_image} alt="" />
                    </Col>
                    <Col className={[classes.col_right_2].join(' ')} xs={4} sm={2}>
                        <Nav>
                            <Nav.Link href="#contact">
                                <button className={classes.btnReachMe}>Reach Me</button>
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
