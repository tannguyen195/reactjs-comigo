import React, { Component } from 'react';
import { Card, Button, } from 'antd'

export default class extends Component {

    render() {
        const { nextStep } = this.props
        return (
            <div className="verify-container">
                <Card >

                    <div className="verify-title Headline-2CenterBlack-Style">
                        Verify Your Email Address
                    </div>
                    <div className="verify-desc ">
                        Welcom to Comigo! We've sent an email to <span className="Headline-4CenterBlack-Style">peter@uiowa.edu</span>  to verify your email address. Please click the link in that email to continue.
                    </div>
                    <div className="verify-button">
                        <Button onClick={nextStep} type="primary">
                            Continue
                        </Button>
                    </div>
                    <div className="verify-resend">

                        Didn't receive an email? <span><a>Resend</a></span>
                    </div>
                </Card>
            </div>
        )
    }
}


