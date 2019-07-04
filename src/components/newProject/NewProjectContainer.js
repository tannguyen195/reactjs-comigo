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
import _ from 'lodash'
let idLink = 0
class NewProjectContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lookingSkills: [],
            projectSkills: [],

            visibleUploadModal: false,
            preloadImage: null,
            media: []
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.returnImage != this.props.returnImage && nextProps.statusImage === "success")
            this.setState({
                preloadImage: nextProps.returnImage
            })
        if (nextProps.mediaData != this.props.mediaData && nextProps.statusUpload === "success")
            this.setState({
                media: _.concat(this.state.media, [nextProps.mediaData])
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
    handleRemoveImage = (e) => {

        const temp = this.state.media
        _.pullAt(temp, [e])

        this.setState({
            media: temp
        })
    }
    toggleUploadModal = () => {
        this.setState({
            visibleUploadModal: !this.state.visibleUploadModal
        })
    }
    componentDidMount() {
        this.setState({
            preloadImage: "https://comigo-media.s3.amazonaws.com/images/1541009490517_cover"
        })
    }

    removeLink = (k) => {

        const { form } = this.props;
        // can use data-binding to get
        const links = form.getFieldValue('links');
        // We need at least one passenger
        if (links.length === 1) {
            form.setFieldsValue({
                links: []
            })
        }

        // can use data-binding to set
        form.setFieldsValue({
            links: links.filter(key => key !== k),
        });
    };

    addLink = () => {
        const { form } = this.props;
        // can use data-binding to get
        const links = form.getFieldValue('links');
        const nextLinks = links.concat(idLink++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            links: nextLinks,
        });
    };

    handleBack = (e) => {

        const { setStep, step } = this.props

        setStep(step - 1)
    }
    onTabClick = (e) => {

        const { setStep, step, updateCreateProject, returnImage, create, data } = this.props

        e.preventDefault();
        const { form } = this.props

        form.validateFieldsAndScroll((err, values) => {

            let shareList = []
            if (values.email)
                values.email.forEach((item, index) => {
                    if (item)
                        shareList.push({
                            email: item,
                            role: values.role[index]
                        })
                })

            if (!err) {
                if (step !== 2)
                    setStep(step + 1)
                else if (step === 2)
                    create({
                        ...data, media: this.state.media,
                        links: values.link
                    })
                updateCreateProject({
                    ...values,
                    shareList: shareList,
                    coverURL: returnImage || "https://comigo-media.s3.amazonaws.com/images/1541009490517_cover",
                    media: this.state.media,
                    links: values.link
                })

            }
        });
    }
    render() {

        const { visibleUploadModal, preloadImage } = this.state
        const { userData } = this.props
        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _newProject
                }} />
                <Head title="Create new project" />
                {
                    userData && <NewProject
                        {...this.state}
                        {...this.props}
                        removeLink={this.removeLink}
                        addLink={this.addLink}

                        onMediaChange={this.onMediaChange}
                        toggleUploadModal={this.toggleUploadModal}
                        handleBack={this.handleBack}
                        onTabClick={this.onTabClick}

                        handleRemoveImage={this.handleRemoveImage}
                    />
                }

                <UploadPhotoContainer
                    ratio={3.26}
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
        statusUpload: state.file.statusUploadImage,
        statusImage: state.file.status,
        status: state.project.status,
        step: state.project.step,
        data: state.project.data,
        type: state.file.type,
        mediaData: state.file.mediaData,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...fileAction,
        ...projectAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(NewProjectContainer));
