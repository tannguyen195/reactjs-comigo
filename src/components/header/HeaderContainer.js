import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './Header'

import {
    toggleShareModal,
    toggleAnnounceModal,
    toggleSignInModal,
    toggleSignUpModal,
    toggleForgotModal,
} from '../../actions/toggleAction'
import SignInModalContainer from '../signIn/SignInModalContainer'
import _header from './_header.less'

class HeaderContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        return (
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
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
