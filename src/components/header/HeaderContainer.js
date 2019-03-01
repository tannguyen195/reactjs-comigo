import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './Header'
import LoggedHeader from './LoggedHeader'
import _header from './_header.less'
import { withRouter } from "next/router"
import * as toggleAction from '../../actions/toggle'
import * as userAction from '../../actions/user'
import * as projectAction from '../../actions/project'
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
        const { getList } = this.props

        getList(this.state.searchValue)
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
                    {...this.state}
                    {...this.props}

                />
        }
        else return <Header
            {...this.state}
            {...this.props}
        />
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
        ...projectAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
