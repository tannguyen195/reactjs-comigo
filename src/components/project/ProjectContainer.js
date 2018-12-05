import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PreviewImage from '../common/previewImage/PreviewImage'
import Head from '../head'
import Project from './Project'
import * as projectAction from '../../actions/project'
import * as toggleAction from '../../actions/toggle'
import { Router } from 'routes'
import _project from './_project.less'
import _ from 'lodash'

import Loading from '../common/loading/Loading'
class ProjectContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: null,
            updateContent: '',
            editUpdateContent: ''
        }
    }
    static async getInitialProps({ query }) {
        if (query && query.detail)
            return {
                detail: query.detail
            }
        return {}
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.updateData && nextProps.updateData !== this.props.updateData) {
            this.setState({
                editUpdateContent: nextProps.updateData.content
            })
        }
    }
    componentDidMount() {
        const { getDetail } = this.props

        getDetail(Router.query.id)
    }
    isUserProject() {
        const { userData, detail } = this.props
        if (_.map(userData.projects, '_id').includes(detail._id))
            return true
        return false
    }
    onUpdateChange = (e) => {
        this.setState({
            updateContent: e.target.value
        })
    }

    handlePostUpdate = (e) => {
        const { postProjectUpdate, detail } = this.props
        postProjectUpdate({
            "projectID": detail._id,
            "content": this.state.updateContent
        })
    }
    handleDeletePost = (e) => {
        const { removeProjectUpdate, detail } = this.props
        removeProjectUpdate({
            "updateID": e._id,
            "projectID": detail._id,
        })
    }
    handleSaveEditUpdate = (e) => {


        const { editProjectUpdate, detail, updateData } = this.props
        editProjectUpdate({
            "updateID": updateData._id,
            "projectID": detail._id,
            "content": this.state.editUpdateContent
        })
    }
    onEditUpdateChange = (e) => {
        this.setState({
            editUpdateContent: e.target.value
        })
    }
    render() {
        const { userData, detail, previewImage, togglePreviewImage, visiblePreview } = this.props
        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _project
                }} />
                <Head title="Comigo" />
                <PreviewImage
                    visiblePreview={visiblePreview}
                    previewImage={previewImage}
                    togglePreviewImage={togglePreviewImage}
                />
                {
                    userData && detail ?
                        <Project
                            {...this.state}
                            {...this.props}
                            edit={this.isUserProject()}
                            onUpdateChange={this.onUpdateChange}
                            handlePostUpdate={this.handlePostUpdate}
                            handleDeletePost={this.handleDeletePost}

                            onEditUpdateChange={this.onEditUpdateChange}
                            handleSaveEditUpdate={this.handleSaveEditUpdate}

                        />
                        : <Loading />
                }

            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        visibleEditUpdate: state.toggle.visibleEditUpdate,
        userData: state.user.data,
        detail: state.project.detail,
        visiblePreview: state.toggle.visiblePreview,
        previewImage: state.toggle.previewImage,
        status: state.project.status,
        updateData: state.toggle.updateData,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...projectAction,
        ...toggleAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
