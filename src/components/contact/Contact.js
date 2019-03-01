import React, { Component } from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd'

const FormItem = Form.Item;
const { TextArea } = Input;
const linkedInIcon = '/static/images/icon-social-linkedin.svg'
const facebookIcon = '/static/images/icon-social-facebook.svg'
const instagramIcon = '/static/images/icon-social-instagram.svg'
export default class extends Component {
    render() {
        const { getFieldDecorator, } = this.props.form;
        const { handleSubmit } = this.props
        return (
            <div className="contact-container">

                <Col className="contact-left" lg={13}>
                    <div className="contact-left__container">
                        <div className="get-in-touch">
                            Get In Touch
                            </div>

                        <div className="contact-desc Body-16-Left">
                            We're happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below.
                            </div>

                        <Card bordered={false}>
                            <Form onSubmit={handleSubmit}>
                                <FormItem className="marginBottom24">
                                    <div className="label-form">Your name</div>
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
                                    })(
                                        <Input placeholder="Enter your name" />
                                    )}
                                </FormItem>

                                <FormItem>
                                    <div className="label-form">Your Email</div>
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            type: 'email', message: 'The input is not valid E-mail!',
                                        }, {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        }],
                                    })(
                                        <Input placeholder="Enter your email" />
                                    )}
                                </FormItem>

                                <div className="bio-info marginBottom24">
                                    <div className="label-form">Your Message</div>
                                    <FormItem >

                                        {getFieldDecorator('body', {
                                            rules: [{ whitespace: true }, {
                                                required: true,
                                                message: 'Please input email content',
                                            }],
                                        })(
                                            <TextArea placeholder="Enter Your Message" />
                                        )}
                                    </FormItem>
                                </div>

                                <FormItem className="send-button">
                                    <Button className="Button-2" type="primary" htmlType="submit">SEND</Button>
                                </FormItem>
                            </Form>
                        </Card>
                    </div>
                </Col>

                <Col lg={11}>
                    <div className="contact-right">
                        <div className="Text-Style">Contact Information</div>
                        <div className="contact-address">
                            {`322 N. Clinton St.
Iowa City, IA 52245

(641) 451-1736
info@comigo.co`}
                        </div>

                        <div className="Text-Style">Follow Us</div>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/company/comigoco/" target="_blank">
                                <img alt="icon" src={linkedInIcon} />
                            </a>
                            <a href="https://www.instagram.com/comigo.co/" target="_blank">
                                <img alt="icon" src={instagramIcon} />
                            </a>


                            <a href="https://www.facebook.com/comigo.co/" target="_blank">
                                <img alt="icon" src={facebookIcon} />
                            </a>

                        </div>
                    </div>
                </Col>

            </div>
        )
    }
}


