import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './Header'
import LoggedHeader from './LoggedHeader'
import _header from './_header.less'
import { withRouter } from "next/router"

class HeaderContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    renderHeader() {
        const { isLoggedIn, userData } = this.props
        if (isLoggedIn === null)
            return <div />
        else if (isLoggedIn === true) {
            if (userData)
                return <LoggedHeader
                    {...this.state}
                    {...this.props} />
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
        userData: state.user.data
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
