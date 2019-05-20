import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router } from 'routes'

import Head from '../head'
import Project from './Project'

import * as projectAction from '../../actions/project'
import * as toggleAction from '../../actions/toggle'
import * as jobAction from '../../actions/job'

import PreviewImage from '../common/previewImage/PreviewImage'
import PostJobModalContainer from '../postJob/PostJobModalContainer'
import Loading from '../common/loading/Loading'

import _project from './_project.less'
import _ from 'lodash'

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

    componentDidMount() {
        const { getDetail, listJob } = this.props
        getDetail(Router.query.id)
        listJob(Router.query.id)
    }

    isUserProject() {
        const { userData, detail } = this.props
        if (detail.owner.email === userData.email) {
            return true
        }
        return false
    }
    onUpdateChange = (e) => {
        this.setState({
            updateContent: e.target.value
        })
    }

    handlePostUpdate = (e) => {
        const { postProjectUpdate, detail } = this.props
        this.setState({
            updateContent: ""
        })
        postProjectUpdate({
            "projectID": detail._id,
            "content": this.state.updateContent
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
                <PostJobModalContainer />
                {
                    userData && detail ?
                        <Project
                            {...this.state}
                            {...this.props}
                            edit={this.isUserProject()}
                            onUpdateChange={this.onUpdateChange}
                            handlePostUpdate={this.handlePostUpdate}


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
        visiblePostJob: state.toggle.visiblePostJob,
        previewImage: state.toggle.previewImage,
        status: state.project.status,
        jobList: state.job.jobList,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...projectAction,
        ...toggleAction,
        ...jobAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
