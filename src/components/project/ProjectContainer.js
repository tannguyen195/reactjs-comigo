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
            detail: null
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
        const { getDetail } = this.props

        getDetail(Router.query.id)
    }
    isUserProject() {
        const { userData, detail } = this.props
        if (_.map(userData.projects, '_id').includes(detail._id))
            return true
        return false
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

                        />
                        : <Loading />
                }

            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {

        userData: state.user.data,
        detail: state.project.detail,
        visiblePreview: state.toggle.visiblePreview,
        previewImage: state.toggle.previewImage
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...projectAction,
        ...toggleAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
