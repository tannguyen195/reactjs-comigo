import React, { Component } from 'react';
import { Modal, Col, Card, Form, Input, Button } from 'antd'
const FormItem = Form.Item
export default class extends Component {
    render() {
        console.log("asd", this.props)
        const { visibleRemoveCollaborator, toggleRemoveCollaborator, collaboratorData } = this.props;
        const { getFieldDecorator } = this.props.form
        return (

            <Modal

                title=""
                visible={visibleRemoveCollaborator}
                onOk={toggleRemoveCollaborator}
                onCancel={toggleRemoveCollaborator}
                footer={null}
            >
                {
                    collaboratorData && <div className="collaborator__remove-container ">

                        <img alt="collaborator" src={collaboratorData.image} />
                        <div className="Title-Section-Center marginTop24">Are you sure to remove <span className="collaborator__name"> {collaboratorData.name}</span>  from this project ?</div>
                        <div className="collaborator-button__group marginTop32">
                            <Button className="cancel">Cancel</Button>
                            <Button className="remove">Remove</Button>
                        </div>
                    </div>
                }

            </Modal>

        )
    }
}


