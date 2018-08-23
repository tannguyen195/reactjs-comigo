import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

import { Link } from 'routes'
const androidIcon = ('/static/images/icon-android.svg')
const appleIcon = ('/static/images/icon-apple.svg')
const facebookIcon = ('/static/images/icon-facebook.svg')
const googleIcon = ('/static/images/icon-google.svg')
const twitterIcon = ('/static/images/icon-twitter.svg')
const content = `© My Nest Egg 2018.

"My Nest Egg" is the trade name of My Nest Egg Asset Management Inc. The products and services advertised are designed specifically for investors in the provinces of Alberta, British Columbia, Quebec, Manitoba, Ontario and PEI and may not be available to all investors. Products and services are only offered in accordance with applicable laws and regulations. This website is neither an offer to sell nor a solicitation of an offer to sell securities in any jurisdiction.

Nothing on this website should be considered as an offer or recommendation to trade in any security. Financial services are only provided to investors who become Nest Wealth Asset Management Inc. ("Nest Wealth") clients by entering into a written agreement. My Nest Egg is registered with the applicable securities commissions as a Portfolio Manager in AB, SK, BC, QC, MB,PE,NS NB,NL and in ON as a Portfolio Manager; Exempt Market Dealer and Investment Fund Manager. Any investor choosing to obtain financial advisory services from Nest Wealth is urged to read all agreements in their entirety and carefully consider whether such agreements are suitable for their individual facts and circumstances.`
class Footer extends Component {
    render() {
        return (

            <footer className="footer-container" >
                <section className="footer-section">
                    <Row>
                        <Col md={6} lg={6} className="footer-item-block">
                            <div className="item-title LabelDarkGreyLeft">
                                About
                        </div>
                            <a className="BodyRegularWhiteLeft item-route">
                                Who We Are
                        </a>
                            <a className="BodyRegularWhiteLeft item-route">
                                FAQ
                        </a>
                            <a className="BodyRegularWhiteLeft item-route">
                                Support
                        </a>
                            <a className="BodyRegularWhiteLeft item-route">
                                Contact Us
                        </a>
                        </Col>
                        <Col md={6} lg={6} className="footer-item-block">
                            <div className="item-title LabelDarkGreyLeft">
                                Learn more
                        </div>
                            <a className="BodyRegularWhiteLeft item-route">
                                General Education
                        </a>
                            <a className="BodyRegularWhiteLeft item-route">
                                Market Updates
                        </a>
                            <a className="BodyRegularWhiteLeft item-route">
                                FAQ
                        </a>
                        </Col>
                        <Col md={6} lg={6} className="footer-item-block">
                            <div className="item-title LabelDarkGreyLeft">
                                Legal
                        </div>
                            <a className="BodyRegularWhiteLeft item-route">
                                Terms of use
                        </a>
                            <a className="BodyRegularWhiteLeft item-route">
                                Privacy policy
                        </a>
                            <a className="BodyRegularWhiteLeft item-route">
                                MIAA / RDS
                        </a>
                            <a className="BodyRegularWhiteLeft item-route">
                                MIAA Valet
                        </a>
                        </Col>
                        <Col md={6} lg={6} className="footer-item-block">
                            <div className="item-title LabelDarkGreyLeft">
                                Get the app
                        </div>
                            <div className="footer-icon-row">
                                <img alt="apple" src={appleIcon} />
                                <img alt="android" src={androidIcon} />
                            </div>

                            <div className="item-title LabelDarkGreyLeft padding-top">
                                Follow us
                        </div>
                            <div className="footer-icon-row ">
                                <img alt="facebook" src={facebookIcon} />
                                <img alt="twitter" src={twitterIcon} />
                                <img alt="google" src={googleIcon} />
                            </div>
                        </Col>



                    </Row>
                    <Row className="footer-row-2">
                        <Col md={12} lg={12} className="footer-item-block">
                            <div className="item-title LabelDarkGreyLeft">
                                Question?
                        </div>
                            <a className="BodyRegularWhiteLeft item-route">
                                (203)-769-5300
                        </a>
                            <a className="BodyRegularWhiteLeft item-route">
                                support@mynestegginvest.com
                        </a>

                        </Col>
                        <Col md={12} lg={12} className="footer-item-block">
                            <div className="item-title LabelDarkGreyLeft">
                                INTERESTED IN OUR NEWSLETTER?
                        </div>
                            <div className="subcribe-button">
                                <Button className="ButtonWhiteCenter" type="primary">SUBCRIBE NOW</Button>
                            </div>

                        </Col>
                    </Row>

                    <section className="footer-content-section CaptionRegularDarkGreyLeft">
                        {content}
                    </section>
                </section>
            </footer >

        )
    }
}

export default Footer;
