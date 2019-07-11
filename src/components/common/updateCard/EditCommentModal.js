import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd'
import Image from '../../common/Image'
const TextArea = Input.TextArea
export default class extends Component {
    render() {
        const {
            visibleEditComment,
            toggleEditComment,
            detail,
            onEditCommentChange,
            handleSaveEditComment,
            editCommentContent,
            status } = this.props;
        return (

            <Modal
                title=""
                visible={visibleEditComment}
                onOk={handleSaveEditComment}
                onCancel={toggleEditComment}
                okText="Save"
                okButtonProps={{ loading: status === 'running' }}
            >

                <div className="post__content-container">

                    <TextArea   
                        onChange={onEditCommentChange}
                        value={editCommentContent}
                        className="Paragraph-12"

                        autosize />
                </div>
            </Modal>

        )
    }
}


