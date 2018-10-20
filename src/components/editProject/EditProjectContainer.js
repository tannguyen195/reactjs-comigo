import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import Head from '../head'
import EditProject from './EditProject'
import _editProject from './_editProject.less'
import UploadPhotoContainer from '../common/uploadPhoto/UploadPhotoContainer'
import { Router } from 'routes'
import * as fileAction from '../../actions/file'
import * as projectAction from '../../actions/project'

class EditProjectContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lookingSkills: [],
            projectSkills: [],
            links: [],
            visibleUploadModal: false,
            preloadImage: null
        }
    }
    componentDidMount = () => {
        const { getDetail } = this.props
        getDetail(Router.query.id)
    }

    componentWillReceiveProps(nextProps) {
        const { detail, uploadStatus } = this.props
        if (nextProps.detail !== detail) {
            this.setState({
                lookingSkills: nextProps.detail.lookingSkills,
                projectSkills: nextProps.detail.projectSkills,
                links: nextProps.detail.links,
                preloadImage: nextProps.detail.coverURL,
            })
        }
        if (nextProps.returnImage !== this.props.returnImage)
            this.setState({
                preloadImage: nextProps.returnImage
            })
    }
    toggleUploadModal = () => {
        this.setState({
            visibleUploadModal: !this.state.visibleUploadModal
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { form, update, image, detail } = this.props
        const { lookingSkills, projectSkills, links } = this.state
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {

                update({
                    projectID: detail._id,
                    lookingSkills: lookingSkills,
                    projectSkills: projectSkills,
                    links: links,
                    name: values.name,
                    description: values.description,
                    coverURL: image
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
        const { visibleUploadModal, preloadImage } = this.state
        const { image, userData, detail } = this.props
        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _editProject
                }} />
                <Head title="Home page" />
                {
                    userData && detail && <EditProject
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
                    imageUrl={preloadImage}
                    ratio={1.55}
                    toggleUploadModal={this.toggleUploadModal}
                    visibleUploadModal={visibleUploadModal} />
            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {
        userData: state.user.data,
        detail: state.project.detail,
        image: state.file.image,
        returnImage: state.file.returnImage,
        status: state.project.status,
        uploadStatus: state.file.status,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...fileAction,
        ...projectAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(EditProjectContainer));
