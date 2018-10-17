import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Head from '../head'
import Project from '../common/projectDetail/ProjectDetail'

import * as projectAction from '../../actions/project'
import { Router } from 'routes'
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
    render() {
        const { userData, detail } = this.props
        return (
            <div >

                <Head title="Home page" />
                {
                    userData && detail &&
                    <Project
                        {...this.state}
                        {...this.props}
                        edit={true}
                        detail={{
                            ...detail,
                            owner: { ...userData }
                        }}
                    />
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
