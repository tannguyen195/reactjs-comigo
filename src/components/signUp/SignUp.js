import React, { Component } from 'react';
import CreateAccount from './CreateAccount'
import VerifyAccountContainer from '../verify/VerifyAccountContainer'
import UpdateProfileContainer from '../updateProfile/UpdateProfileContainer'
import Complete from './Complete'
class SignUp extends Component {
    renderStageSignUp(step) {
        switch (step) {
            case 1: return <CreateAccount {...this.props} />
            case 2: return <VerifyAccountContainer {...this.props} />
            case 3: return <UpdateProfileContainer {...this.props} />
            case 4: return <Complete {...this.props} />
            default: return <CreateAccount {...this.props} />
        }
    }
    renderStepBar(step) {
        let table = []
        let stepContent = [
            "Sign Up", "Verify Email", "Build Profile", "Complete"
        ]
        for (let i = 0; i < 4; i++) {
            if (i < step)
                table.push(<div key={i} className="active-step">
                    <div className="active-text step-stage">{stepContent[i]}</div>
                </div>)
            else
                table.push(<div key={i} className="inactive-step">
                    <div className="inactive-text step-stage">{stepContent[i]}</div>
                </div>)
        }
        return table

    }
    render() {
        const { step } = this.props
        return (
            <div>
                {step !== 1 &&
                    <div className="step-bar-container">
                        <div className="signup-step-bar max-width">
                            <div className="step-bar">

                                {
                                    this.renderStepBar(step)
                                }

                            </div>

                        </div>
                    </div>
                }
                <div className="max-width">
                    {
                        this.renderStageSignUp(step)
                    }
                </div>
            </div>
        )
    }
}

export default SignUp
