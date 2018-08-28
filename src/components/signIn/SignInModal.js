import React from 'react'
import { Form, Input, Button, Modal, Icon } from 'antd';

const FormItem = Form.Item
const IconEgg = '/static/images/icon.svg'
class SignInModal extends React.Component {

    render() {
        const {

            visibleSignIn,

            handleSignIn,
            toggleSignInModal
        } = this.props

        const { getFieldDecorator, } = this.props.form

        return (
            <div>


                <Modal
                    width={540}
                    visible={visibleSignIn}
                    title='' footer={null}
                    onCancel={toggleSignInModal}
                    className="modal-body"
                >
                    <div className="sign-in-container">
                        <img alt="egg" src={IconEgg} />
                        <h4 className="H4BlackCenter">Welcome back!</h4>

                        <div className="form-container">

                            <Form onSubmit={handleSignIn} className="login-form">
                                <FormItem>
                                    {getFieldDecorator('userName', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input className="Body2RegularBlack80Left" placeholder="Email or Username" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input className="Body2RegularBlack80Left" type="password" placeholder="Password" />
                                    )}
                                </FormItem>

                                <div className="bottom-sign-in">
                                    <a className="login-form-forgot NavigationDarkGreyCenter" >Forgot password</a>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        LOG IN
          </Button>
                                    <div className="BodyRegularGreyRight signup">Don't have an account? <a>Sign up</a></div>
                                </div>


                            </Form>
                        </div>
                    </div>
                </Modal >
            </div>
        )
    }
}

export default SignInModal