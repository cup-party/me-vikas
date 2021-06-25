import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../../App.css'
import classes from './TopJumbotron.module.css'
import objImg from '../../../assets/images/float_obj_jumbo.png'

export default function TopJumbotron() {
    let it = 0;
    let arrIt = 0;
    let i = 0;
    let j = 0;
    let typewriter_txt_arr = ['an Engineer', 'a Developer', 'a Designer', 'a Coder'];
    const speed = 150; /* The speed/duration of the effect in milliseconds */

    useEffect(() => {
        document.getElementById("typewriter_txt").innerHTML = ""
        typeWriter()
    }, [])


    function typeWriter() {
        if (i < typewriter_txt_arr[j].length) {
            document.getElementById("typewriter_txt").innerHTML += typewriter_txt_arr[j].charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            i = 0
            j = (j + 1) % typewriter_txt_arr.length;
            document.getElementById("typewriter_txt").innerHTML = ""
            setTimeout(typeWriter, speed);
        }
    }

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
                            <p id="typewriter_txt" className={['c_primary', classes.txt_change, classes.txt_inline].join(' ')}></p>
                            <p className={['c_primary', classes.txt_change, classes.txt_inline].join(' ')}>|</p>
                        </div>
                    </Col>
                    <Col className={['d_flex_center'].join(' ')} xs={12} sm={4}>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
