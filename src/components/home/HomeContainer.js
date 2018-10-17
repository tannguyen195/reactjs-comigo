import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'

import * as projectAction from '../../actions/project'

import NewsFeed from './NewsFeed'
import _newsFeed from './_newsFeed.less'

import Home from './Home'
import _home from './_home.less'


class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleProject: false,
            detail: null
        }
    }
    componentDidMount() {
        const { getList } = this.props

        getList("")
    }
    handleCloseModalProject = () => {

        this.setState({
            visibleProject: false

        })
    }
    handleOpenModalProject = (detail) => {
        this.setState({
            visibleProject: true,
            detail
        })
    }
    render() {
        const { isLoggedIn, list } = this.props

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _home + _newsFeed
                }} />
                <Head title="Home page" />

                {
                    isLoggedIn ?
                        list && <NewsFeed
                            {...this.state}
                            {...this.props}
                            handleCloseModalProject={this.handleCloseModalProject}
                            handleOpenModalProject={this.handleOpenModalProject}
                        /> :
                        <Home
                            {...this.state}
                            {...this.props}

                        />}
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        isLoggedIn: state.user.isLoggedIn,
        list: state.project.list
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...projectAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
