import React, { Component } from 'react';
import { Card, Form, Input, Select, Row, Col, Button, Alert } from 'antd'
import { Link } from 'routes'
const FormItem = Form.Item;
const appLogo = '/static/images/logo-app.png'
const logoIcon = '/static/images/logo.svg'
class Login extends Component {

    render() {

        const { getFieldDecorator } = this.props.form;
        const { handleSubmit, status, message, toggleForgotModal } = this.props
        return (
            <div className="login-container max-width">

                <div className="sign-in-body" bordered={false}>
                    <div className="app-logo">
                        <img alt="logo" src={logoIcon} />
                    </div>
                    <div className="sign-in-title H2-Black-Center">
                        Welcome to Comigo  </div>

                    <Form onSubmit={handleSubmit}>
                        <FormItem className="marginBottom32" >

                            {getFieldDecorator('email', {
                                rules: [{
                                    required: true, type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input placeholder="Email" />
                            )}
                        </FormItem>
                        <FormItem
                            hasFeedback
                            className="marginBottom24"

                            help={status === "error" && message}>

                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: 'Please input your password!',
                                }],
                            })(
                                <Input
                                    type="password"
                                    placeholder="Password" />
                            )}
                        </FormItem>

                        <FormItem className="signup-button">
                            <Button className="Button-White-Center" loading={status === 'running'} type="primary" htmlType="submit">Sign In</Button>
                        </FormItem>
                        <div className="forgot__button marginBottom8">
                            <a className="Button-Dark-Grey-Center" onClick={toggleForgotModal}>Forgot your password?</a>
                        </div>

                        <div className="Button-Dark-Grey-Center" >Don't have an account?
                         <Link to="/signUp" prefetch>
                                <a>{` Sign Up`}</a>
                            </Link> </div>

                    </Form>
                </div>
            </div>

        )
    }
}

export default Login
