import React, { Component } from 'react';
import { Modal, Col, Card, Form, Input, Button } from 'antd'
const FormItem = Form.Item
export default class extends Component {
    render() {

        const {
            handleSubmitRequest,
            statusRequest } = this.props;
        const { getFieldDecorator } = this.props.form
        return (

            <div className="collaborator__request ">
                <div className="H2-Black-Left paddingBottom16">Invite Collaborators</div>
                <Form onSubmit={handleSubmitRequest}>
                    <div className="request__form-container">

                        <FormItem >

                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email',
                                    required: true,
                                    message: `Please input collaborator's email!`,
                                    whitespace: true
                                }],
                            })(
                                <Input placeholder="University Email or Name" className="email__input" />
                            )}
                        </FormItem>

                        <FormItem >

                            {getFieldDecorator('role', {
                                rules: [{
                                    required: true,
                                    message: `Please input collaborator's role!`,
                                    whitespace: true
                                }],
                            })(
                                <Input placeholder="Role" className="role__input" />
                            )}
                        </FormItem>



                    </div>
                    <div className="send__button">
                        <Button
                            loading={statusRequest === "running"}
                            htmlType="submit"
                            className=" Button-White-Center"
                            type="primary">
                            SEND INVITE
                                </Button>
                    </div>
                </Form>
            </div>


        )
    }
}


