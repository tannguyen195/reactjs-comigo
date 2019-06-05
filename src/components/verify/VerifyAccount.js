import React, { Component } from 'react';
import { Card, Button, } from 'antd'

export default class extends Component {

    render() {
        const { userData, handleResendEmail } = this.props
        return (
            <div className="verify">
                <Card bordered={false}>

                    <div className="verify-title H2-Black-Center">
                        Verify Your Email Address
                    </div>
                    <div className="verify-desc Body-Dark-Grey-Center">
                        Welcome to Comigo! We've sent an email to <span style={{ fontWeight: 'bold' }}>{userData.email}</span>  to verify your email address. Please click the link in that email to continue.
                    </div>

                    <div className="verify-resend Button-Dark-Grey-Center">

                        Didn't receive an email? <span><a className="Button-Yellow-Center" onClick={handleResendEmail}>Resend</a></span>
                    </div>
                </Card>
            </div>
        )
    }
}


