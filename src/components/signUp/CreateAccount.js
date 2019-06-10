import React, { Component } from 'react';
import { Card, Form, Input, Row, Col, Button, } from 'antd'
import { Link } from 'routes'
const FormItem = Form.Item;
export default class extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const { handleSubmit, compareToFirstPassword, handleConfirmBlur, status, handleClick } = this.props
        return (
            <div className="sign-up-container">

                <div className="sign-up-body">
                    <div className="marginTop8" bordered={false}>
                        <div className="marginBottom12 H2-Black-Center">
                            Create an Account
            </div>
                        <div className="Body-Dark-Grey-Center marginBottom28">We're live at the University of Iowa! Only students with an "@uiowa.edu" email address can create an account. Bummed? Let us know!</div>
                        <Form onSubmit={handleSubmit}>
                            <Row gutter={16}>
                                <Col md={12} lg={12}>
                                    <FormItem className="marginBottom32">
                                        <div className="label-form">First Name</div>
                                        {getFieldDecorator('firstname', {
                                            rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
                                        })(
                                            <Input placeholder="Peter" />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col md={12} lg={12}>
                                    <FormItem >
                                        <div className="label-form">Last Name</div>
                                        {getFieldDecorator('lastname', {
                                            rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                                        })(
                                            <Input placeholder="Park" />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <FormItem className="marginBottom32" >
                                <div className="label-form">Student Email</div>
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid E-mail!',
                                    }, {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    }],
                                })(
                                    <Input placeholder="peterpark@uiowa.edu" />
                                )}
                            </FormItem>
                            <FormItem className="marginBottom32">
                                <div className="label-form">Password</div>
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: 'Please input your password!',
                                    }],
                                })(
                                    <Input type="password" placeholder="Type your new password" />
                                )}
                            </FormItem>
                            <FormItem className="marginBottom32">
                                <div className="label-form">Confirm Password</div>
                                {getFieldDecorator('confirm', {
                                    rules: [{
                                        required: true, message: 'Please confirm your password!',
                                    }, {
                                        validator: compareToFirstPassword,
                                    }],
                                })(
                                    <Input type="password" onBlur={handleConfirmBlur} placeholder="Confirm your password" />
                                )}
                            </FormItem>
                            <FormItem className="sign-up-button Button-White-Center">
                                <Button className="Button-White-Center" loading={status === "running"} type="primary" htmlType="submit">SIGN UP</Button>
                            </FormItem>
                            <div className="Button-Dark-Grey-Center">Already have an account?

                                    <a onClick={handleClick}>{` Sign In`}</a>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}


