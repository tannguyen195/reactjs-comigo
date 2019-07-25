import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'
import VerifySuccess from './VerifySuccess'
import VerifyAccount from './VerifyAccount'
import _verify from './_verify.less'
import { Router } from 'routes'

import * as userAction from '../../actions/user'

class VerifyAccountContainer extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        if (Router.query && Router.query.token)
            this.props.verify(Router.query.token)
    }
    handleResendEmail = () => {

        const { resend } = this.props

        resend()
    }
    handleContinue = () => {
        window.location.replace("/")
    }

    render() {
        const { userData } = this.props

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _verify
                }} />
                <Head title="Verify Account" />
                {
                    userData && <div>
                        {
                            userData.verified === true ?
                                <VerifySuccess
                                    {...this.state}
                                    {...this.props}
                                    handleContinue={this.handleContinue} />
                                :
                                <VerifyAccount
                                    handleResendEmail={this.handleResendEmail}
                                    {...this.state}
                                    {...this.props} />
                        }
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(VerifyAccountContainer);
