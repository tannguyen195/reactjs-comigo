import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'
import Project from './Project'
import * as projectAction from '../../actions/project'
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
        const { userData, detail } = this.props
        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _project
                }} />
                <Head title="Comigo" />
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
        detail: state.project.detail
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...projectAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
