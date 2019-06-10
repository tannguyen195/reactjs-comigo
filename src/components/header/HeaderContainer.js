import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router } from 'routes'
import Header from './Header'
import LoggedHeader from './LoggedHeader'
import ForgotModalContainer from '../forgot/ForgotModalContainer'
import _header from './_header.less'
import { withRouter } from "next/router"
import * as toggleAction from '../../actions/toggle'
import * as userAction from '../../actions/user'
import * as projectAction from '../../actions/project'
import * as peopleAction from '../../actions/people'
class HeaderContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: ""
        }
    }
    onLogoClick = (e) => {
        const { getList } = this.props
        getList("")
    }
    onSearchValueChange = (e) => {
        this.setState({
            searchValue: e
        })
    }
    onPressEnter = () => {
        const { getList, visibleProject, getPeopleList } = this.props
        Router.pushRoute("/")
        if (!visibleProject)
            getList(this.state.searchValue)
        else
            getPeopleList(this.state.searchValue)
    }
    onTabChange = () => {
        const { toggleHomeView, visibleProject, getList, getPeopleList } = this.props

        if (!visibleProject)
            getList('')
        else
            getPeopleList('')
        toggleHomeView()
    }
    renderHeader() {
        const { isLoggedIn, userData } = this.props
        if (isLoggedIn === null)
            return <div />
        else if (isLoggedIn === true) {
            if (userData)
                return <LoggedHeader
                    onSearchValueChange={this.onSearchValueChange}
                    onPressEnter={this.onPressEnter}
                    onLogoClick={this.onLogoClick}
                    onTabChange={this.onTabChange}
                    {...this.state}
                    {...this.props}

                />
        }
        else return <div> <Header
            {...this.state}
            {...this.props}

        />
          
        </div>
    }
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: _header }} />
                {
                    this.renderHeader()
                }
            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userData: state.user.data,
        visibleProject: state.toggle.visibleProject
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...userAction,
        ...toggleAction,
        ...projectAction,
        ...peopleAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
