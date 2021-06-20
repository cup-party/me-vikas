import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../../App.css'
import classes from './TopJumbotron.module.css'
import objImg from '../../../assets/images/float_obj_jumbo.png'
export default function TopJumbotron() {
    return (
        <div id="me" className={['bg_dark', classes.box].join(' ')}>
            <Container>
                <Row className={classes.main_row}>
                    <Col className={classes.col_left} xs={12} sm={8}>
                        <img width="120" className={[classes.obj_img].join(' ')} src={objImg} alt="" />
                        <div className={'c_light'}>
                            <p className={classes.txt_block}>Hello, I am</p>
                        </div>
                        <div className={'c_light'}>
                            <p className={classes.txt_block}>VIKAS</p>
                        </div>
                        <div className={['c_light'].join(' ')}>
                            <p className={[classes.txt_block, classes.txt_inline].join(' ')}>
                                And, I'm
                            </p>
                            <p className={['c_primary', classes.txt_change, classes.txt_inline].join(' ')}>a Developer|</p>
                        </div>
                    </Col>
                    <Col className={['d_flex_center'].join(' ')} xs={12} sm={4}>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
