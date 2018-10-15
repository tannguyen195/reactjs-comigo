import React, { Component } from 'react';
import { Modal, Upload, Button } from 'antd'
import Cropper from 'react-cropper';

const projectPhotoIcon = '/static/images/icon-project-photo.svg'

export default class extends Component {

    render() {
        const {
            visibleUploadModal,
            toggleUploadModal,

            handleChangePhoto,
            loadingUploadPhoto,
            imageUrl,
            onCropChange, onSaveButton
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
                            imageUrl ?
                                <div>
                                    <Cropper
                                        ref='cropper'
                                        src={imageUrl}
                                        style={{ height: 320, width: 320 }}
                                        // Cropper.js options
                                        aspectRatio={1}
                                        crop={() => onCropChange(this.refs.cropper.getCroppedCanvas().toDataURL())}
                                    />
                                    {/* <ReactCrop
                                        src={imageUrl}
                                        crop={crop}
                                        onImageLoaded={onImageLoaded}
                                        onComplete={onCropComplete}
                                        onChange={onCropChange}
                                    /> */}

                                </div> : <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    // action="//jsonplaceholder.typicode.com/posts/"
                                    // beforeUpload={beforeUpload}
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
                                            </Button></div>
                                        </div>
                                    </div>
                                </Upload>
                        }

                        <div className="upload-footer">
                            {
                                imageUrl ? <Button onClick={onSaveButton} type="primary">Save</Button> : "  You can upload your photo file size up to 2MB."
                            }

                        </div>
                    </div>

                </Modal>
            </div>
        )
    }
}


