import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './Header'

import {
    toggleSignInModal,
} from '../../actions/toggleAction'

import SignInModalContainer from '../signIn/SignInModalContainer'
import _header from './_header.less'
import { withRouter } from "next/router"

class HeaderContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        const {
            router
        } = this.props
        return (
            router.pathname.includes("/signUp")
                ?
                <div /> :
                <div>
                    <style dangerouslySetInnerHTML={{ __html: _header }} />
                    <Header
                        {...this.state}
                        {...this.props}

                    />
                    <SignInModalContainer />
                </div>
        )
    }
}
export function mapStateToProps(state) {
    return {
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleSignInModal
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
