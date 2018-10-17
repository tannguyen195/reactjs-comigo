import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'
import { endPoint } from '/constants'
import VerifyAccount from './VerifyAccount'
import _verify from './_verify.less'
import { Router } from 'routes'
import axios from 'axios'
import * as userAction from '../../actions/user'
class VerifyAccountContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
      
        const { nextRoute } = this.props
        if (Router.query && Router.query.token)
            axios({
                method: 'POST',
                url: endPoint + 'user/verify',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                    'x-auth-token': Router.query.token
                }
            })
                .then(function (response) {
                    cookies.set('token', response.data.data.token, { path: '/' })
                    if (Router.pathname === '/signUp')
                        nextRoute()
                    else window.location.replace("/")

                })
                .catch(function (error) {
                });

    }
    render() {
    
        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _verify
                }} />
                <Head title="Home page" />
                <VerifyAccount
                    {...this.state}
                    {...this.props}

                />
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
        userAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(VerifyAccountContainer);
