import React, { Component } from 'react';

import { Form } from 'antd'
import Head from '../head'
import UpdateProfile from './UpdateProfile'
import _updateProfile from './_updateProfile.less'
import UploadPhoto from './UploadPhoto'

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class UpdateProfileContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: ['Graphic Design', 'Branding Design', 'Web Design'],
            inputVisible: false,
            inputValue: '',
            visibleUploadModal: false,
            imageUrl: null,
            cropData: null,
            croppedImage: null
        }
    }
    onSaveButton = () => {
        const { cropData } = this.state
        this.toggleUploadModal()
        this.setState({
            croppedImage: cropData
        })
    }

    onCropChange = (cropData) => {
        this.setState({ cropData })
    }
    toggleUploadModal = () => {
        this.setState({
            visibleUploadModal: !this.state.visibleUploadModal
        })
    }
    handleSubmit = (e) => {
        const { nextStep } = this.props
        nextStep()
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
        
            }
        });
    }

    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
      
        this.setState({ tags });
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
       
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    }

    saveInputRef = input => this.input = input
    handleChangePhoto = (info) => {
        getBase64(info.file.originFileObj, imageUrl =>
            this.setState({

                imageUrl,
                loading: false,
            }));
    }
    render() {

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _updateProfile
                }} />
                <Head title="Home page" />
                <UpdateProfile
                    {...this.state}
                    {...this.props}
                    handleSubmit={this.handleSubmit}
                    handleClose={this.handleClose}
                    showInput={this.showInput}
                    handleInputChange={this.handleInputChange}
                    handleInputConfirm={this.handleInputConfirm}
                    saveInputRef={this.saveInputRef}
                    toggleUploadModal={this.toggleUploadModal}
                />
                <UploadPhoto
                    {...this.state}
                    onCropChange={this.onCropChange}
                    handleChangePhoto={this.handleChangePhoto}
                    toggleUploadModal={this.toggleUploadModal}

                    onSaveButton={this.onSaveButton}
                />
            </div>

        )
    }
}

export default Form.create()(UpdateProfileContainer)
