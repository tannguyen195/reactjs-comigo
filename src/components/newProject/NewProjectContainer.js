import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import Head from '../head'
import NewProject from './NewProject'
import _newProject from './_newProject.less'
import UploadPhotoContainer from '../common/uploadPhoto/UploadPhotoContainer'
import * as fileAction from '../../actions/file'
import * as projectAction from '../../actions/project'
class NewProjectContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lookingSkills: [],
            projectSkills: [],
            links: [],
            visibleUploadModal: false,
            cropData: null,
            croppedImage: null
        }
    }

    toggleUploadModal = () => {
        this.setState({
            visibleUploadModal: !this.state.visibleUploadModal
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { form, create, coverProject } = this.props
        const { lookingSkills, projectSkills, links } = this.state
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {

                create({
                    lookingSkills: lookingSkills,
                    projectSkills: projectSkills,
                    links: links,
                    name: values.name,
                    description: values.description,
                    coverURL: coverProject.cropData
                })
            }
        });
    }

    onTagLookingChange = (lookingSkills) => {
        this.setState({
            lookingSkills
        })
    }

    onTagProjectChange = (projectSkills) => {
        this.setState({
            projectSkills
        })
    }

    onTagLinkChange = (links) => {
        this.setState({
            links
        })
    }
    render() {
        const { visibleUploadModal } = this.state
        const { coverProject, changePhoto, getCroppedPhoto, upload, userData } = this.props
        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _newProject
                }} />
                <Head title="Home page" />
                {
                    userData && <NewProject
                        {...this.state}
                        {...this.props}
                        handleSubmit={this.handleSubmit}
                        toggleUploadModal={this.toggleUploadModal}
                        onTagProjectChange={this.onTagProjectChange}
                        onTagLookingChange={this.onTagLookingChange}
                        onTagLinkChange={this.onTagLinkChange}
                    />
                }

                <UploadPhotoContainer
                    upload={upload}
                    ratio={1.55}
                    getCroppedPhoto={getCroppedPhoto}
                    changePhoto={changePhoto}
                    imageUrl={coverProject.imageUrl}
                    cropData={coverProject.cropData}
                    toggleUploadModal={this.toggleUploadModal}
                    visibleUploadModal={visibleUploadModal} />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        coverProject: state.file.coverProject,
        userData: state.user.data
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...fileAction,
        ...projectAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(NewProjectContainer));
