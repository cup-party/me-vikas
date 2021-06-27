import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SectionHeading from '../SectionHeading/SectionHeading'
import classes from './Contact.module.css'
import icon_gmail from '../../../assets/images/social/icon_gmail.png'
import icon_linkedin from '../../../assets/images/social/icon_linkedin.png'
import icon_twitter from '../../../assets/images/social/icon_twitter.png'

export default function Contact() {
    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

        return <a href={`mailto:${email}${params}`}>{children}</a>;
    };
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <div id="contact" className={['bg_dark', classes.box].join(' ')}>
            <Container>
                <SectionHeading heading="Contact" />
                <Row className={classes.main_row}>
                    <Col className={classes.col_left} xs={12} sm={6}>
                        {/* content */}
                        <div className={classes.sectionContentBox}>
                            <h3 className={[classes.leftParaHeading, 'c_light'].join(' ')}>
                                Any type of Query and Discussion...
                        </h3>
                            <p className={[classes.leftPara, 'c_lighter'].join(' ')}>
                                Let's connect.
                            </p>
                        </div>
                        <div>
                            <div className={classes.iconBox}>
                                <Mailto email="vikassoni.soni22@gmail.com" subject="Let's Connect" body="Your Query...">
                                    <img className={classes.iconImg} src={icon_gmail} alt="Gmail" />
                                </Mailto>
                            </div>
                            <div className={classes.iconBox}>
                                <img onClick={() => openInNewTab('https://www.linkedin.com/in/vikas-soni-660209165')} className={classes.iconImg} src={icon_linkedin} alt="Linked In" />
                            </div>
                            <div className={classes.iconBox}>
                                <img onClick={() => openInNewTab('https://twitter.com/vikas_soni22')} className={classes.iconImg} src={icon_twitter} alt="Twitter" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
