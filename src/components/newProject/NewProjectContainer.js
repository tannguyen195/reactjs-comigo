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
            preloadImage: null
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.returnImage != this.props.returnImage && nextProps.statusUpload === "success")
            this.setState({
                preloadImage: nextProps.returnImage
            })
    }

    toggleUploadModal = () => {
        this.setState({
            visibleUploadModal: !this.state.visibleUploadModal
        })
    }
    componentDidMount() {
        this.setState({
            preloadImage: null
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { form, create } = this.props
        const { lookingSkills, projectSkills, links, preloadImage } = this.state
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                create({
                    lookingSkills: lookingSkills,
                    projectSkills: projectSkills,
                    links: links,
                    name: values.name,
                    description: values.description,
                    coverURL: preloadImage
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
        const { userData } = this.props
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
                    ratio={1.55}
                    imageUrl={preloadImage}
                    toggleUploadModal={this.toggleUploadModal}
                    visibleUploadModal={visibleUploadModal} />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        coverProject: state.file.coverProject,
        userData: state.user.data,
        returnImage: state.file.returnImage,
        statusUpload: state.file.status,
        status:state.project.status
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...fileAction,
        ...projectAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(NewProjectContainer));
