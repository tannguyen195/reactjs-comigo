import React, { Component } from 'react';
import _uploadPhoto from './_uploadPhoto.less'
import UploadPhoto from './UploadPhoto'
import * as fileAction from '../../../actions/file'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { message } from 'antd'
let count = 0
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

    handleBeforeUpload = (file) => {
        
    }
    componentDidMount() {
        this.props.changePhoto(this.props.imageUrl)
    }
    componentWillReceiveProps(nextProps) {
        const { toggleUploadModal, } = this.props
        if (nextProps.imageUrl !== this.props.imageUrl)
            this.props.changePhoto(nextProps.imageUrl)
        if (nextProps.status === "success" && nextProps.status !== this.props.status)
            toggleUploadModal()
    }
    onSaveButton = () => {
        const { cropData } = this.state
        const { upload } = this.props
        upload(cropData)
    }

    onCropChange = (cropData) => {
        this.setState({ cropData })
    }


    handleChangePhoto = (info) => {
   
        if (info.event) {
            let isJPG = false
            switch (info.file.type) {
                case 'image/jpeg': isJPG = true; break;
                case 'image/png': isJPG = true; break;
                case 'image/jpg': isJPG = true; break;
                default: isJPG = false
            }


            if (!isJPG) {
                message.error('You can only upload JPG file!');
            }
            const isLt2M = info.file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                message.error('Image must smaller than 2MB!');
            }
            if (isJPG && isLt2M)
                getBase64(info.file.originFileObj, imageUrl => {
                    this.props.changePhoto(imageUrl)
                });
        }

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
                    handleBeforeUpload={this.handleBeforeUpload}
                    onCropChange={this.onCropChange}
                    handleChangePhoto={this.handleChangePhoto}
                    onSaveButton={this.onSaveButton}
                />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        loadImage: state.file.loadImage,
        status: state.file.status
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...fileAction,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhotoContainer);
