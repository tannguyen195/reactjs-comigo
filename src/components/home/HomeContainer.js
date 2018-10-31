import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'
import * as projectAction from '../../actions/project'
import * as peopleAction from '../../actions/people'

import NewsFeed from './NewsFeed'
import _newsFeed from './_newsFeed.less'

import People from './People'

import Home from './Home'
import _home from './_home.less'

import { Form } from 'antd'

import Loading from '../common/loading/Loading'
import NoResult from '../common/noResult/NoResult'

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleProject: false,
            detail: null
        }
    }
    componentDidMount() {
        const { getList, getPeopleList } = this.props

        getList("")
        getPeopleList("")
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
    renderNewsFeed() {
        const { visibleProject, list, people, status } = this.props
        if (status === "running")
            return <Loading />
        else if (list.length === 0)
            return <NoResult />
        else if (!visibleProject === true && list) {
            return <NewsFeed
                {...this.state}
                {...this.props}
                handleCloseModalProject={this.handleCloseModalProject}
                handleOpenModalProject={this.handleOpenModalProject}
            />

        }
        else if (visibleProject === true && people)
            return <People
                {...this.state}
                {...this.props}
            />
        else return <Loading />
    }
    render() {
        const { isLoggedIn, list } = this.props

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _home + _newsFeed
                }} />
                <Head
                    ogImage="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/45045111_1765319220262750_5618645889863122944_n.jpg?_nc_cat=111&_nc_ht=scontent.fsgn3-1.fna&oh=a58ca021533b7e75b90cd31500c21ab6&oe=5C47595E"
                    title="Comigo - Find your future. Build your idea."
                    description="Find your future. Build your idea." />

                {
                    isLoggedIn ?

                        this.renderNewsFeed() :
                        <Home
                            {...this.state}
                            {...this.props} />
                }
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        isLoggedIn: state.user.isLoggedIn,
        list: state.project.list,
        visibleProject: state.toggle.visibleProject,
        people: state.people.people,
        status: state.project.status,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...projectAction,
        ...peopleAction,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(HomeContainer));
