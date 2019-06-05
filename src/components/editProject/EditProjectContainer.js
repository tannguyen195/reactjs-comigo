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
import Loading from '../common/loading/Loading'
import _ from 'lodash'

class EditProjectContainer extends Component {
    constructor(props) {
        super(props)    
        this.state = {
            links: [],
            visibleUploadModal: false,
            preloadImage: null,
            media: []
        }
    }
    componentDidMount = () => {
        const { getDetail } = this.props
        getDetail(Router.query.id)
    }

    componentWillReceiveProps(nextProps) {
        const { detail } = this.props
        if (nextProps.detail && nextProps.detail !== detail) {

            this.setState({

                links: nextProps.detail.links || [],
                preloadImage: nextProps.detail.coverURL,
                media: nextProps.detail.media
            })
        }
        
        if (nextProps.returnImage !== this.props.returnImage)
            this.setState({
                preloadImage: nextProps.returnImage
            })
    }
    onMediaChange = (data) => {
        const { uploadImage } = this.props
        if (data.event)
            uploadImage(data)
        // this.setState({
        //     media: media.splice(e.index, 1, { item: e.e })
        // })
    }
    toggleUploadModal = () => {
        this.setState({
            visibleUploadModal: !this.state.visibleUploadModal
        })
    }
    handleRemoveProject = (id) => {
        const { remove } = this.props
        remove(id)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { form, update, image, detail } = this.props
        const { lookingSkills, projectSkills, links, media } = this.state
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {

                update({
                    projectID: detail._id,
                    lookingSkills: lookingSkills,
                    projectSkills: projectSkills,
                    links: links,
                    name: values.name,
                    description: values.description,
                    coverURL: image,
                    media: media
                })
            }
        });
    }

  
  

    onTagLinkChange = (links) => {
        this.setState({
            links
        })
    }


    render() {
        const { visibleUploadModal, preloadImage } = this.state
        const { userData, detail } = this.props
        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _editProject
                }} />
                <Head title="Edit your project" />
                {
                    userData && detail ? <EditProject
                        {...this.state}
                        {...this.props}
                        handleSubmit={this.handleSubmit}
                        toggleUploadModal={this.toggleUploadModal}
                        onTagLinkChange={this.onTagLinkChange}
                        onMediaChange={this.onMediaChange}
                        handleRemoveProject={this.handleRemoveProject}
                    /> : <Loading />

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
        statusUploadImage: state.file.statusUploadImage,
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
