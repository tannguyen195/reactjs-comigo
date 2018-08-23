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
            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {

        visibleSignIn: state.toggleReducer.visibleSignIn,
        visibleSignUp: state.toggleReducer.visibleSignUp,
        visibleForgot: state.toggleReducer.visibleForgot,

    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
