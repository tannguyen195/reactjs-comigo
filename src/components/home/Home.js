import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { Button, Card, Row, Col, Form, Input } from 'antd'
import Footer from '../common/footer/Footer'
import posed from 'react-pose';

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

class Home extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
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
                                <ReactPlayer width='100%'
                                    height='100%'
                                    url='https://www.youtube.com/embed/ysz5S6PUM-U' playing />
                            </div>
                            <div className="intro">
                                <div className="Body-16-Left desc">{`Comigo is a platform to find new collaborators on your very own campus. Connect with them to work on one-of-a-kind ideas.`}</div>
                                <Button type="primary">Learn more</Button>
                            </div>
                        </div>
                        <div className="home-body__2">
                            <div className="Title-Medium-Left-LandingPage paddingBottom16 paddingTop40">
                                Project starters
                            </div>
                            <div className="Sub-Title-Medium-Left body__2-desc">{`the movers, shakers,
and makers.`}</div>
                        </div>

                        <div className="home-body__3 paddingTop40">
                            <div className="Title-Medium-Left-LandingPage paddingBottom16 paddingTop40">
                                Collaborators
                            </div>
                            <div className="Sub-Title-Medium-Left body__2-desc">{`the supportive, skilled,
and curious.`}</div>
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
                                <Card.Grid className="feature-item" >

                                    <img alt="avatar" src={"https://www.sketchappsources.com/resources/source-image/twitterlogo_1x.png"} />
                                    <div className="Title-Card">
                                        Twitter</div>
                                    <div className="Sub-Title-Card">
                                        Mobile App</div>
                                </Card.Grid>
                                <Card.Grid className="feature-item" >

                                    <img alt="avatar" src={"https://www.sketchapp.com/images/pages/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png"} />
                                    <div className="Title-Card">
                                        Sketch</div>
                                    <div className="Sub-Title-Card">
                                        Window App</div>
                                </Card.Grid>
                                <Card.Grid className="feature-item" >

                                    <img alt="avatar" src={"https://www.parmapress24.it/wp-content/uploads/2018/09/instagram-1581266_960_720.jpg"} />
                                    <div className="Title-Card">
                                        Instagram</div>
                                    <div className="Sub-Title-Card">
                                        Mobile App</div>
                                </Card.Grid>
                                <Card.Grid className="feature-item number-item" >
                                    <div className="feature-number">158</div>
                                    <div className="Title-Card">
                                        Projects </div>
                                </Card.Grid>

                            </Card>
                        </div>

                        <div className="block-right">
                            <Card bordered={false}>
                                <Card.Grid className="feature-item" >

                                    <img alt="avatar" src={"https://comigo-media.s3.amazonaws.com/images/1540195950547_cover"} />
                                    <div className="Title-Card">
                                        Tan Nguyen
                                    </div>
                                    <div className="Sub-Title-Card">
                                        Front-end Developer
                                    </div>
                                </Card.Grid>
                                <Card.Grid className="feature-item" >

                                    <img alt="avatar" src={"https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/44197859_1879537722160787_6430537181462265856_o.jpg?_nc_cat=104&_nc_ht=scontent.fsgn5-4.fna&oh=60e3ce2fee8db2c652ec69e3ef4c3190&oe=5C46E98C"} />
                                    <div className="Title-Card">
                                        Bin Tran
                                    </div>
                                    <div className="Sub-Title-Card">
                                        UI/UX Designer
                                    </div>
                                </Card.Grid>
                                <Card.Grid className="feature-item" >

                                    <img alt="avatar" src={"https://comigo-media.s3.amazonaws.com/images/1540197236628_cover"} />
                                    <div className="Title-Card">
                                        Phat Pham</div>
                                    <div className="Sub-Title-Card">
                                        Back-end Developer </div>
                                </Card.Grid>
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



                    <Form >
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
