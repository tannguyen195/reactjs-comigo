import React, { Component } from 'react';
import { Modal, Col, Card, Form, Input, Button } from 'antd'
import Image from '../common/Image'
const FormItem = Form.Item

export default class extends Component {
    render() {

        const { visibleRemoveCollaborator, toggleRemoveCollaborator, collaboratorData, handleRemoveCollaborator, status } = this.props;
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
                        <Image image={collaboratorData.pictureURL} />

                        <div className="Title-Section-Center marginTop24">Are you sure to remove <span className="collaborator__name"> {collaboratorData.firstName + ` ` + collaboratorData.lastName}</span>  from this project ?</div>
                        <div className="collaborator-button__group marginTop32">
                            <Button onClick={toggleRemoveCollaborator} className="cancel">Cancel</Button>
                            <Button loading={status === "running"} onClick={handleRemoveCollaborator} className="remove">Remove</Button>
                        </div>
                    </div>
                }

            </Modal>

        )
    }
}


