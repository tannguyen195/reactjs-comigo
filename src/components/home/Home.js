import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { Button, Card, Row, Col, Form, Input } from 'antd'
import Footer from '../common/footer/Footer'
import posed from 'react-pose';
import { videoURL } from '/constants'
const graphicImage1 = '/static/images/image-graphic-1.svg'
const graphicImage2 = '/static/images/image-graphic-2.svg'
const FormItem = Form.Item;
const comigoIcon = '/static/images/logo.svg'
const Header = posed.div({
    exit: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        delay: 200
    }
});
const apps = [
    {
        image: "https://comigo-media.s3.amazonaws.com/images/1541061867321_cover",
        name: "Northside Bags",
        type: "Website"
    },
    {
        image: "https://dl.airtable.com/UDRSJWP1SVeNPHs6ss1I_full_Animated%20Series.png",
        name: "Animated Series",
        type: "Website"
    },
    {
        image: "https://static.wixstatic.com/media/cd3c79_3348c5ab13234cfeb581e19f45b39791~mv2.jpg/v1/fill/w_316,h_375,al_c,lg_1,q_80/cd3c79_3348c5ab13234cfeb581e19f45b39791~mv2.webp",
        name: "Hype Tribe",
        type: "Website"
    }
]

const collaborators = [
    {
        image: "https://comigo-media.s3.amazonaws.com/images/1541061611075_cover",
        name: "Isabel Reed",
        type: "Animated Series"
    },
    {
        image: "https://comigo-media.s3.amazonaws.com/images/1541061677664_cover",
        name: "Garik Himebaugh",
        type: "Eco-Stylist"
    },
    {
        image: "https://comigo-media.s3.amazonaws.com/images/1541061760809_cover",
        name: "Storm Shearer",
        type: "Tart Design"
    }
]
class Home extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const { handleSubcribe } = this.props;
        return (
            <div className="home-container">
                <div className="home">
                    <Header initialPose="exit" pose="enter" className="home-title Title-X-Large-Left-LandingPage">
                        <div className="home-header">

                            <div className="pole"></div>
                            Big ideas,  <span className="together"> together. </span>


                        </div>
                    </Header>
                    <div className="home-body">
                        <div className="home-body__1">
                            <div className="video-container">
                                <ReactPlayer
                                    width='100%'
                                    height='100%'
                                    url={videoURL}
                                    playing
                                    loop
                                    config={{
                                        youtube: {
                                            playerVars: { showinfo: 0, rel: 0 }
                                        }
                                    }}
                                />
                            </div>
                            <div className="intro">
                                <div className="Body-16-Left desc">{`Comigo is a platform to find new collaborators on your very own campus. Connect with them to work on one-of-a-kind ideas.`}</div>

                                <Link prefetch to="/why">
                                    <a>
                                        <Button type="primary">Learn more</Button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="home-body__2 mid">
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

                        <div className="home-body__3 paddingTop40 mid">
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
                    </div>
                </div>


                <div className="home-feature">
                    <div className="Title-Medium-Center-Black-LandingPage feature-title">
                        Featured projects and collaborators.
                    </div>

                    <div className="feature-block-container">

                        <div className="block-left">
                            <Card bordered={false}>
                                {
                                    apps.map((item, index) => {
                                        return <Card.Grid key={index} className="feature-item" >

                                            <img alt="avatar" src={item.image} />
                                            <div className="Title-Card">
                                                {item.name}</div>
                                            <div className="Sub-Title-Card">
                                                {item.type}</div>
                                        </Card.Grid>
                                    })
                                }
                                <Card.Grid className="feature-item number-item" >
                                    <div className="feature-number">158</div>
                                    <div className="Title-Card">
                                        Projects </div>
                                </Card.Grid>

                            </Card>
                        </div>

                        <div className="block-right">
                            <Card bordered={false}>
                                {
                                    collaborators.map((item, index) => {
                                        return <Card.Grid key={index} className="feature-item" >

                                            <img alt="avatar" src={item.image} />
                                            <div className="Title-Card">
                                                {item.name}</div>
                                            <div className="Sub-Title-Card">
                                                {item.type}</div>
                                        </Card.Grid>
                                    })
                                }

                                <Card.Grid className="feature-item number-item" >
                                    <div className="feature-number">242</div>
                                    <div className="Title-Card">
                                        Collaborators </div>
                                </Card.Grid>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="home-coming">
                    <img src={comigoIcon} alt="logo" />

                    <div className="Title-Small-Center-Grey-LandingPage coming-desc">Comigo is coming soon to your campus!</div>
                </div>

                <div className="home-notified">
                    <div className="Title-Small-Center-Black-LandingPage notified-desc">Get notified when we’re live on your campus.</div>
                    <Form onSubmit={handleSubcribe}>
                        <div className="form-subscribe">
                            <FormItem>
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid E-mail!',
                                    }, {
                                        message: 'Please input your E-mail!',
                                    }],
                                })(
                                    <Input placeholder="Type your email here" />
                                )}
                            </FormItem>

                            <Button type="primary" htmlType="submit">Subscribe</Button>

                        </div>
                    </Form >
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home
