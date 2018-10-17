import React, { Component } from 'react';
import _uploadPhoto from './_uploadPhoto.less'
import UploadPhoto from './UploadPhoto'

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class UploadPhotoContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cropData: null,
        }
    }
    onSaveButton = () => {
        const { cropData } = this.state
        const { toggleUploadModal, getCroppedPhoto, upload } = this.props
        toggleUploadModal()
        getCroppedPhoto(cropData)
        upload(cropData)
    }

    onCropChange = (cropData) => {
        this.setState({ cropData })
    }


    handleChangePhoto = (info) => {
        getBase64(info.file.originFileObj, imageUrl => {
            this.props.changePhoto(imageUrl)
        }
        );
    }
    render() {

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _uploadPhoto
                }} />

                <UploadPhoto
                    {...this.state}
                    {...this.props}
                    onCropChange={this.onCropChange}
                    handleChangePhoto={this.handleChangePhoto}
                    onSaveButton={this.onSaveButton}
                />
            </div>

        )
    }
}

export default (UploadPhotoContainer)
