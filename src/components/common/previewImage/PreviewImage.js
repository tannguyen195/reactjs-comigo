import React, { Component } from 'react'
import { Modal } from 'antd'
import _previewImage from './_previewImage.less'

export default class extends Component {

    render() {
        const { previewImage, visiblePreview, togglePreviewImage } = this.props
        return (
            <div className="view-image-container">
                <style dangerouslySetInnerHTML={{ __html: _previewImage }} />
                <Modal
                wrapClassName="image-preview__modal"
                 visible={visiblePreview}
                 footer={null} onCancel={togglePreviewImage}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>

        )
    }
}


