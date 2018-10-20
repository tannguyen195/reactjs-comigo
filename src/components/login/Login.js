import React, { Component } from 'react';
import { Card, Form, Input, Select, Row, Col, Button, Alert } from 'antd'
const FormItem = Form.Item;
const appLogo = '/static/images/logo-app.png'
const logoIcon = '/static/images/logo.svg'
class Login extends Component { 

    render() {
        const { getFieldDecorator } = this.props.form;
        const { handleSubmit, status, errMessage } = this.props
        return (
            <div className="login-container max-width">

                <Card className="sign-in-body" bordered={false}>
                    <div className="app-logo">
                        <img alt="logo" src={logoIcon} />
                    </div>
                    <div className="sign-in-title Title-Medium-Center">
                        Log In   </div>
                 
                    <Form onSubmit={handleSubmit}>
                        <FormItem className="marginBottom32" >
                            <div className="label-form">Email</div>
                            {getFieldDecorator('email', {
                                rules: [{
                                    required: true, type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input placeholder="Type your email" />
                            )}
                        </FormItem>
                        <FormItem className="marginBottom24">
                            <div className="label-form">Password</div>
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: 'Please input your password!',
                                }],
                            })(
                                <Input type="password" placeholder="Type your password" />
                            )}
                        </FormItem>

                        <FormItem className="signup-button">
                            <Button loading={status === 'running'} type="primary" htmlType="submit">SIGN IN</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>

        )
    }
}

export default Login
