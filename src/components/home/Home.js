import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { Button, Card, Row, Col, Form, Input } from 'antd'
import Footer from '../common/footer/Footer'
const FormItem = Form.Item;
const comigoIcon = '/static/images/logo.svg'
const gridStyle = {
    width: '50%',
    textAlign: 'center',
};

class Home extends Component {

    render() {
        const { getFieldDecorator, handleSubmit } = this.props.form;
        return (
            <div className="home-container">
                <div className="home">
                    <div className="home-header">
                        <div className="pole"></div>
                        <div className="home-title Title-X-Large-Left-LandingPage">Big ideas, <span className="together">together.</span></div>
                    </div>
                    <div className="home-body">
                        <div className="home-body__1">
                            <div className="video-container">
                                <ReactPlayer width='100%'
                                    height='100%'
                                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
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
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>

                            </Card>
                        </div>

                        <div className="block-right">
                            <Card bordered={false}>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
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
