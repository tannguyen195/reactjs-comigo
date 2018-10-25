import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'
import Project from '../common/projectDetail/ProjectDetail'
import * as projectAction from '../../actions/project'
import { Router } from 'routes'

import _ from 'lodash'

import Loading from '../common/loading/Loading'
class ProjectContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

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
    render() {
        const { userData, detail } = this.props
        return (
            <div >

                <Head title="Home page" />
                {
                    userData && detail ?
                        <Project
                            {...this.state}
                            {...this.props}
                            edit={this.isUserProject()}
                            detail={{
                                ...detail,
                                owner: { ...userData }
                            }}
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
        detail: state.project.detail
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...projectAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
