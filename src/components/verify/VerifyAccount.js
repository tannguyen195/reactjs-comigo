import React, { Component } from 'react';
import { Card, Button, } from 'antd'

export default class extends Component {

    render() {
        const { userData, handleResendEmail } = this.props
        return (
            <div className="verify-container">
                <Card bordered={false}>

                    <div className="verify-title Title-Medium-Center">
                        Verify Your Email Address
                    </div>
                    <div className="verify-desc Body-16">
                        Welcome to Comigo! We've sent an email to <span style={{ fontWeight: 'bold' }}>{userData.email}</span>  to verify your email address. Please click the link in that email to continue.
                    </div>

                    <div className="verify-resend">

                        Didn't receive an email? <span><a onClick={handleResendEmail}>Resend</a></span>
                    </div>
                </Card>
            </div>
        )
    }
}


