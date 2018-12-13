import React, { Component } from 'react';
import { Modal, Col, Card, Form, Input, Button } from 'antd'
const FormItem = Form.Item
export default class extends Component {
    render() {

        const {
            visibleRequestCollaborator,
            toggleRequestCollaborator,
            handleSubmitRequest,
            status } = this.props;
        const { getFieldDecorator } = this.props.form
        return (

            <Modal
                width={920}
                title=""
                visible={visibleRequestCollaborator}
                onOk={toggleRequestCollaborator}
                onCancel={toggleRequestCollaborator}
                footer={null}
            >
                <div className="collaborator__request-container ">
                    <div className="Title-Medium-Center paddingBottom16">Send a collaboration request</div>
                    <div className="Body-16  desc">{`Add the people who have helped in little ways along the way.
                        Please fill out the form below:`}</div>
                    <div className="request__form-container">
                        <Form onSubmit={handleSubmitRequest}>
                            <FormItem >
                                <div className="label-form">University Email or Name</div>
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email',
                                        required: true,
                                        message: `Please input collaborator's email!`,
                                        whitespace: true
                                    }],
                                })(
                                    <Input className="email__input" />
                                )}
                            </FormItem>

                            <FormItem >
                                <div className="label-form">Role</div>
                                {getFieldDecorator('role', {
                                    rules: [{
                                        required: true,
                                        message: `Please input collaborator's role!`,
                                        whitespace: true
                                    }],
                                })(
                                    <Input className="role__input" />
                                )}
                            </FormItem>
                            <Button
                                loading={status === "running"}
                                htmlType="submit"
                                className="send__button Button-2"
                                type="primary">
                                SEND REQUEST
                                </Button>

                        </Form>
                    </div>

                </div>
            </Modal>

        )
    }
}


