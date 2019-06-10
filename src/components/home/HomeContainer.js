import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'
import * as projectAction from '../../actions/project'
import * as peopleAction from '../../actions/people'
import * as toggleAction from '../../actions/toggle'
import * as jobAction from '../../actions/job'
import NewsFeed from './NewsFeed'
import _newsFeed from './_newsFeed.less'

import LoginContainer from '../login/LoginContainer'

import Home from './Home'
import _home from './_home.less'

import { Form } from 'antd'


import { Affix, Checkbox, Radio } from 'antd'

import LeftBar from './leftBar/LeftBar'
import RightBar from './rightBar/RightBar'
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const options = [
    { label: 'Project', value: false },
    { label: 'People', value: true },
];
class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleProject: false,
            detail: null
        }
    }
    componentDidMount() {
        const { getList, getPeopleList, listJob, list, people, jobList } = this.props

        if (!list) {
            getList("")
        }

        if (!people) {
            getPeopleList("")
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
        const { toggleHomeView, listJob, getList, getPeopleList, list, people, jobList, status } = this.props
        if (status !== "running") {
            if (!list) {
                getList("")
            }

            if (!people) {
                getPeopleList("")
            }
            if (e === "job")
                listJob()
            toggleHomeView(e)
        }
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
        const { isLoggedIn, list } = this.props

        return (
            <div className={!isLoggedIn && "primary__layout"}>
                <style dangerouslySetInnerHTML={{
                    __html: _home + _newsFeed
                }} />
                <Head
                    ogImage="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/45045111_1765319220262750_5618645889863122944_n.jpg?_nc_cat=111&_nc_ht=scontent.fsgn3-1.fna&oh=a58ca021533b7e75b90cd31500c21ab6&oe=5C47595E"
                    title="Comigo - Find your future. Build your idea."
                    description="Find your future. Build your idea." />

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
        list: state.project.list,
        jobList: state.job.jobList,
        visibleProject: state.toggle.visibleProject,
        people: state.people.people,
        status: state.project.status,
        userData: state.user.data,
        peopleStatus: state.people.status,
        message: state.people.message,
        filterValue: state.toggle.filterValue,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...jobAction,
        ...projectAction,
        ...peopleAction,
        ...toggleAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(HomeContainer));
