import React, { Component } from 'react';
import { Modal, Upload, Button,  } from 'antd'
import Cropper from 'react-cropper';

const projectPhotoIcon = '/static/images/icon-project-photo.svg'

export default class extends Component {

    render() {
        const {
            handleBeforeUpload,
            visibleUploadModal,
            toggleUploadModal,
            handleChangePhoto,
            loadImage,
            onCropChange,
            onSaveButton,
            ratio,
            status
        } = this.props

        return (
            <div >
                <Modal
                    width={480}
                    title=""
                    footer={null}
                    visible={visibleUploadModal}
                    onCancel={toggleUploadModal}
                >
                    <div className="upload-modal">
                        {
                            loadImage ?
                                <div>
                                    <Cropper
                                        ref='cropper'
                                        src={loadImage}
                                        style={{ height: 320, width: 320 }}
                                        // Cropper.js options
                                        aspectRatio={ratio}
                                        crop={() => onCropChange(this.refs.cropper.getCroppedCanvas().toDataURL())}
                                    />


                                </div> : <Upload
                                    beforeUpload={handleBeforeUpload}
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    onChange={handleChangePhoto}
                                >


                                    <div>
                                        <div className="upload-container">

                                            <img src={projectPhotoIcon} alt="project" />

                                            <div className="drag-text">
                                                Drag photo here</div>
                                            <div className="or-devider">
                                                Or
                                        </div>
                                            <div className="upload-button">
                                                <Button type="primary">
                                                    Upload Your Photo
                                            </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Upload>
                        }


                        {
                            loadImage ?
                                <div className="upload-footer">
                                    <Button onClick={onSaveButton} loading={status === "running"} type="primary">Save</Button>
                                    <Upload showUploadList={false} onChange={handleChangePhoto}>
                                        <div className="upload-new-button">
                                            <a className="Link-Button-2">  Upload new photo</a>
                                        </div>
                                    </Upload>
                                </div> : <div className="paddingTop24 Sub-Title-Center">
                                    You can upload your photo file size up to 2MB.</div>

                        }


                    </div>

                </Modal>
            </div>
        )
    }
}