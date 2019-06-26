import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'
import * as projectAction from '../../actions/project'
import * as peopleAction from '../../actions/people'
import * as toggleAction from '../../actions/toggle'
import * as jobAction from '../../actions/job'
import * as searchAction from '../../actions/search'

import NewsFeed from './NewsFeed'
import _newsFeed from './_newsFeed.less'
import JobDetail from '../common/jobDetail/JobDetail'
import LoginContainer from '../login/LoginContainer'

import _home from './_home.less'

import { Form } from 'antd'
import { Router } from 'routes'
import LeftBar from './leftBar/LeftBar'
import RightBar from './rightBar/RightBar'

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleProject: false,
            detail: null
        }
    }
    componentDidMount() {
        const { getList, getPeopleList, listJob, feed, people, jobList, search } = this.props

        if (!feed) {
            search({
                data: "",
                type: "all"
            })
        }

        if (!people) {
            getPeopleList({
                data: "",
                type: "all"
            })
        }
        if (!jobList) {
            listJob()
        }
    }
    handleSubcribe = (e) => {
        const { subcribe } = this.props
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                subcribe(values.email)
            }
        });
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
    onFilterChange = (e) => {
        const { toggleHomeView, listJob, search, getPeopleList, feed, people, jobList, status, projects, getList } = this.props
        if (status !== "running") {
            if (!projects) {
                getList({})
            }
            if (!feed) {
                search({
                    data: "",
                    type: "all"
                })
            }

            if (!people) {
                getPeopleList({
                    data: "",
                    type: "all"
                })
            }
            if (e === "job")
                listJob()
            toggleHomeView(e)
        }
    }
    handleSearchSkill = (e) => {

        Router.pushRoute("/search?key=" + e.replace(/ /g, '-'))

    }
    renderLoggedHome() {
        const {
            userData, people } = this.props
        return (
            <div className="home-logged">

                {
                    userData && <div className="home-logged__bar"> <LeftBar  {...this.props} /></div>

                }

                <div className="feed">
                    <NewsFeed
                        handleSearchSkill={this.handleSearchSkill}
                        onFilterChange={this.onFilterChange}
                        {...this.props} />
                </div>
                {
                    people && <div className="home-logged__bar"> <RightBar   {...this.props} /></div>

                }

            </div >
        )
    }

    render() {
        const { isLoggedIn, userData,jobDetail } = this.props

        return (
            <div className={!isLoggedIn ? "primary__layout" : ""}>
                <style dangerouslySetInnerHTML={{
                    __html: _home + _newsFeed
                }} />
                <Head
                    ogImage="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/45045111_1765319220262750_5618645889863122944_n.jpg?_nc_cat=111&_nc_ht=scontent.fsgn3-1.fna&oh=a58ca021533b7e75b90cd31500c21ab6&oe=5C47595E"
                    title="Comigo - Find your future. Build your idea."
                    description="Find your future. Build your idea." />
                {
                    jobDetail && <JobDetail user={userData} {...this.props} />
                }
                {
                    isLoggedIn ?
                        this.renderLoggedHome() :
                        <LoginContainer

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
        projects: state.project.projects,
        jobList: state.job.jobList,
        visibleProject: state.toggle.visibleProject,
        people: state.people.people,
        status: state.project.status,
        userData: state.user.data,
        peopleStatus: state.people.status,
        message: state.people.message,
        filterValue: state.toggle.filterValue,
        visibleJobDetail: state.toggle.visibleJobDetail,
        jobDetail: state.toggle.jobDetail,
        feed: state.search.feed,
        jobProjectDetail: state.toggle.jobProjectDetail,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...jobAction,
        ...projectAction,
        ...peopleAction,
        ...toggleAction,
        ...searchAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(HomeContainer));
