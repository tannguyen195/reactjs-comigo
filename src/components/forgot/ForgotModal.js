import React from 'react'
import { Form, Input, Button, Row, Col, Modal } from 'antd';

const FormItem = Form.Item


class ForgotModal extends React.Component {


    render() {
        const {

            toggleForgotModal,
            visibleForgot,
            handleForgot
        } = this.props

        const { getFieldDecorator } = this.props.form
     
        return (
            <div>

                <Modal

                    width={540}
                    closable={false}
                    visible={visibleForgot}
                    title='' footer={null}
                    onCancel={toggleForgotModal} x
                    className="modal-body"
                >
                    <Form onSubmit={handleForgot}>
                        <div className="forgot-title H2-Black-Center">Forgot your password?</div>
                        <div className="bref Body-Dark-Grey-Center">Enter the email address associated with your account, and we’ll email you a link to reset your password.</div>
                        <div style={{ marginTop: 0 }} className="form-login">
                            <FormItem style={{ marginBottom: '24px' }}>
                                {getFieldDecorator('emailForgot', {
                                    rules: [{
                                        type: 'email', message: `It not a valid email address`,
                                    }, {
                                        required: true, message: `Please enter your email`,
                                    }],
                                })(
                                    <Input placeholder="Email Address" />
                                )}
                            </FormItem>
                        </div>
                        <Row type="flex" justify="space-between">

                            <Col span={10}>
                                <FormItem className="button-forgot email">
                                    <Button className="Button-White-Center" htmlType="submit" type="primary">
                                        <div > RESET PASSWORD</div>
                                    </Button>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Modal>
            </div>

        )
    }
}

export default ForgotModal