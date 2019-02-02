import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd'
import Image from '../../common/Image'
const TextArea = Input.TextArea
export default class extends Component {
    render() {
        const { 
            visibleEditUpdate,
            toggleEditUpdate,
            detail,
            onEditUpdateChange,
            handleSaveEditUpdate,
            editUpdateContent,
            status } = this.props;
        return (

            <Modal
                title=""
                visible={visibleEditUpdate}
                onOk={handleSaveEditUpdate}
                onCancel={toggleEditUpdate}
                okText="Save"
                okButtonProps={{ loading: status === 'running' }}
            >

                <div className="post__content-container">
                    <Image image={detail.owner.pictureURL} />
                    <TextArea
                        onChange={onEditUpdateChange}
                        value={editUpdateContent}
                        className="Paragraph-12"
                        placeholder="Post something about project update here..."
                        autosize />
                </div>
            </Modal>

        )
    }
}


