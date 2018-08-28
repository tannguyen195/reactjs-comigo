import React from 'react'
import { Link } from 'routes'
import { Row, Col, Input, Button, Select, Radio } from 'antd'
const backIcon = '/static/images/icon-back-grey.svg'
export default class extends React.Component {

    render() {
        const {
            step,
            onNextStep,
            onPreviousStep
        } = this.props
        return (
            <div className="sign-up-content">
                <div className="H3BlackLeft">Regulatory Information</div>
                <div className="Body2RegularDarkGreyLeft paddingTop16">
                    Fill in the circles to verify the following statements are true. Then, the statements you have there, which are correct.
                </div>
                <div className="paddingTop40 sign-up-wrapper">

                    <section className=" question-section">
                        <div className="question LeadRegularBlackLeft">
                            Social Security Number
                        </div>
                        <div className="question-desc paddingTop8  BodyRegularGreyLeft">
                            We’re legally required to ask for your SSN. We use it to verify your identity.
                        </div>

                    </section>


                    <section className="paddingTop40 question-section">
                        <div className="question LeadRegularBlackLeft">
                            Regulation
                        </div>
                        <div className="paddingBottom24 question-desc BodyRegularGreyLeft">
                            Please verify the following statements are true and correct.
                        </div>
                        <div className="question-container">

                            <div className="radio-container">
                                <div className="radio">
                                    <Radio></Radio>
                                </div>


                                <div className="Body2RegularBlackLeft">
                                    Neither you nor any immediate family member who lives with you are registered as a broker-dealer or work for a brokerage firm.
                                    </div>


                            </div>
                            <div className="radio-container">
                                <div className="radio">
                                    <Radio></Radio>
                                </div>


                                <div className="Body2RegularBlackLeft">
                                    You are not a director, a 10% shareholder or a policy-making officer at a publicly traded company.
                                    </div>

                            </div>

                        </div>
                    </section>


                    <div className="button-group">
                        <div onClick={onPreviousStep} className="back ButtonNormalDarkGreyLeft">
                            <img src={backIcon} alt="back" /><div>BACK</div></div>
                        <Button onClick={onNextStep} type="primary" className="continue ButtonNormalWhiteCenter">CONTINUE</Button>
                    </div>
                </div>
            </div>
        )
    }
}