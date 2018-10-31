import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Head from '../head'
import Profile from './Profile'
import _profile from './_profile.less'

import * as userAction from '../../actions/user'
class ProfileContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleLogout = () => {
        const { logout } = this.props
       
        logout()
    }
    render() {
        const { userData } = this.props
        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _profile
                }} />
                <Head title="Your portfolio" />
                {
                    userData &&
                    <Profile
                        {...this.state}
                        {...this.props}
                        handleLogout={this.handleLogout}
                    />
                }

            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        userData: state.user.data
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...userAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
