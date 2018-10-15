import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import Head from '../head'
import NewProject from './NewProject'
import _newProject from './_newProject.less'


class NewProjectContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tagsProject: ["Graphic Design", "Branding Design", "Web Design"],
            tagsLooking: ["Graphic Design", "Branding Design", "Web Design"],
            inputProjectVisible: false,
            inputLookingVisible: false,
            inputProjectValue: '',
            inputLookingValue: '',

            visibleUploadModal: false,
            imageUrl: null,
            cropData: null,
            croppedImage: null
        }
    }
    handleChangePhoto = (info) => {
        getBase64(info.file.originFileObj, imageUrl =>
            this.setState({

                imageUrl,
                loading: false,
            }));
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

    handleProjectClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        this.setState({ tags });
    }

    handleProjectInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }
    showProjectInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    }
    handleProjectInputConfirm = () => {
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
    saveProjectInputRef = input => this.input = input

    handleLookingClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        this.setState({ tags });
    }

    handleLookingInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }
    showLookingInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    }
    handleLookingInputConfirm = () => {
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
    saveLookingInputRef = input => this.input = input


    render() {

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _newProject
                }} />
                <Head title="Home page" />
                <NewProject
                    {...this.state}
                    {...this.props}
                    handleSubmit={this.handleSubmit}
                    toggleUploadModal={this.toggleUploadModal}


                    handleLookingClose={this.handleLookingClose}
                    showLookingInput={this.showLookingInput}
                    handleLookingInputChange={this.handleLookingInputChange}
                    handleLookingInputConfirm={this.handleLookingInputConfirm}
                    saveLookingInputRef={this.saveLookingInputRef}

                    handleProjectClose={this.handleProjectClose}
                    showProjectInput={this.showProjectInput}
                    handleProjectInputChange={this.handleProjectInputChange}
                    handleProjectInputConfirm={this.handleProjectInputConfirm}
                    saveProjectInputRef={this.saveProjectInputRef}
                />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {

    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(NewProjectContainer));
