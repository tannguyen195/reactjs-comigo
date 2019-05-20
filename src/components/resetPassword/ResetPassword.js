import React, { Component } from 'react';
import { Button, Input, Form, } from 'antd'

export default class extends Component {

    render() {
        const { handleResetPassword,
            validateToNextPassword,
            compareToFirstPassword,
            handleConfirmBlur,
            errorMessage,
            status } = this.props
        const {
            getFieldDecorator,
        } = this.props.form;
        return (
            <div className="reset">
                <Form onSubmit={handleResetPassword}>
                    <div className="">Reset Password</div>
                    <div className="paddingTop40 reset-item">
                        <div className="input-title LabelDarkGreyLeft">New Password</div>

                        <Form.Item>

                            {getFieldDecorator('newPassword', {
                                rules: [{
                                    required: true, message: 'Please input your password!',
                                }, {
                                    validator: validateToNextPassword,
                                }],
                            })(
                                <Input type="password"
                                    className="Body2RegularBlack80Left" />
                            )}
                        </Form.Item>



                    </div>
                    <div className="paddingTop40 reset-item">
                        <div className="input-title LabelDarkGreyLeft">Confirm password</div>

                        <Form.Item>
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: 'Please confirm your password!',
                                }, {
                                    validator: compareToFirstPassword,
                                }],
                            })(
                                <Input type="password" className="Body2RegularBlack80Left" onBlur={handleConfirmBlur} />
                            )}
                        </Form.Item>
                    </div>

                    <div>
                        {
                            status === "error" && errorMessage && errorMessage
                        }
                    </div>
                    <Form.Item className="button-reset ">
                        <Button htmlType="submit" type="primary">
                            <div className="ButtonWhiteCenter"> RESET PASSWORD</div>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}


