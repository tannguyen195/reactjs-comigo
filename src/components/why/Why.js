import React, { Component } from 'react';
import { Button, Card, Row, Col, Form, Input } from 'antd'
import { Link } from 'routes'
import Footer from '../common/footer/Footer'
import ReactPlayer from 'react-player'
import { videoURL } from '/constants'
const graphicImage1 = '/static/images/image-graphic-1.svg'
const graphicImage2 = '/static/images/image-graphic-2.svg'


class Why extends Component {

    render() {

        return (
            <div className="why-container">
                <div className="why">
                    <div className="Title-X-Large-Left-LandingPage why-header "> Why Comigo?</div>
                    <div className="video-container">
                        <ReactPlayer
                            width='100%'
                            height='100%'
                            url={videoURL}
                            playing
                            loop
                        />
                    </div>

                    <div className="why__text-block">
                        <div className="text-header Title-Medium-Left-LandingPage">
                            <div className="color-mono">We get student ideas</div>
                            off the ground.
                    </div>
                        <div className="text-content Body-18-Left">
                            College is the time to be adventurous. Comigo gives you peer support – a brainstorming buddy, volunteer, or cofounder – to get your ideas off the ground.
                        </div>
                    </div>

                    <div className="why__text-block">
                        <div className="text-header Title-Medium-Left-LandingPage">
                            <div className="color-mono">Growing collaborative</div>
                            campus communities.
                    </div>
                        <div className="text-content Body-18-Left">
                            When good ideas are born, they should be met student support and grown in collaborative campus communities.
    Look at this app we built, this project we launched, this startup we founded! Peer support never looked so good – students helping students build big ideas, together.
</div>
                    </div>
                    <div className="why__graphic paddingTop80">
                        <div>
                            <img src={graphicImage2} alt="graphic" />
                        </div>
                        <div>
                            <div className="Title-Medium-Left-LandingPage paddingBottom16 paddingTop40">
                                Project starters
                            </div>
                            <div className="Sub-Title-Medium-Left body__2-desc">{`the movers, shakers,
and makers.`}</div>
                        </div>

                    </div>

                    <div className="paddingTop40 why__graphic">
                        <div>
                            <div className="Title-Medium-Left-LandingPage paddingBottom16 paddingTop40">
                                Collaborators
                            </div>
                            <div className="Sub-Title-Medium-Left body__2-desc">{`the supportive, skilled,
and curious.`}</div>
                        </div>

                        <div>
                            <img src={graphicImage1} alt="graphic" />
                        </div>
                    </div>

                    <div className="why__text-block">
                        <div className="text-header Title-Medium-Left-LandingPage">
                            <div className="color-mono">Be gone,</div>
                            campus silos.
                    </div>
                        <div className="text-content Body-18-Left">
                            “Silos” make cross-departmental communication tricky. Finding support from peers in different departments often means effortful networking and navigating bureaucratic channels. Don’t waste your time finding peer support. Connect directly with the most fascinating peers across your campus on Comigo.
</div>
                    </div>


                </div>
                <div className="why__coming">
                    <div className="Title-Small-Center-Black-LandingPage coming-desc">
                        Crowdsourced peer support & team-building, campus by campus.
                            </div>
                    <Link prefetch to="/signUp">
                        <a  className="start-button">
                            <Button type="primary">
                                Get Started
                        </Button>
                        </a>

                    </Link>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Why
