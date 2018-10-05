import React, { Component } from 'react';
import CreateAccount from './CreateAccount'
import VerifyAccount from './VerifyAccount'
import UpdateProfileContainer from '../updateProfile/UpdateProfileContainer'
import Complete from './Complete'
class SignUp extends Component {
    renderStageSignUp(step) {
        switch (step) {
            case 1: return <CreateAccount {...this.props} />
            case 2: return <VerifyAccount {...this.props} />
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
                    <div className="LabelBlackCenter step-stage">{stepContent[i]}</div>
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
                    <div className="signup-step-bar">
                        <div className="step-bar">

                            {
                                this.renderStepBar(step)
                            }

                        </div>

                    </div>
                }

                {
                    this.renderStageSignUp(step)
                }

            </div>
        )
    }
}

export default SignUp
