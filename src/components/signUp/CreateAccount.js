import React, { Component } from 'react';
import { Card, Form, Input, Row, Col, Button, } from 'antd'
const FormItem = Form.Item;
export default class extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const { handleSubmit } = this.props
        return (
            <div className="sign-up-container">
                <div className="sign-up-title Headline-1CenterBlack-Style">
                    Create an Account
            </div>
                <div className="sign-up-body">
                    <Card>


                        <Form onSubmit={handleSubmit}>
                            <Row gutter={16}>
                                <Col md={12} lg={12}>
                                    <FormItem className="marginBottom32">
                                        <div className="label-form">First Name</div>
                                        {getFieldDecorator('firstname', {
                                            rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col md={12} lg={12}>
                                    <FormItem >
                                        <div className="label-form">Last Name</div>
                                        {getFieldDecorator('lastname', {
                                            rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <FormItem className="marginBottom32" >
                                <div className="label-form">Email</div>
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid E-mail!',
                                    }, {
                                        message: 'Please input your E-mail!',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem className="marginBottom24">
                                <div className="label-form">Password</div>
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: 'Please input your password!',
                                    }],
                                })(
                                    <Input type="password" placeholder="Type your new password" />
                                )}
                            </FormItem>

                            <FormItem className="sign-up-button">
                                <Button type="primary" htmlType="submit">SIGN UP</Button>
                            </FormItem>
                        </Form>
                    </Card>
                </div>
            </div>
        )
    }
}


