import React from 'react'
import { Link } from 'routes'
import { Row, Col, Input, Button, Radio } from 'antd'
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
                <div className="H3BlackLeft">Personal Information</div>

                <div className="sign-up-wrapper">

                    <div className=" input-item">
                        <div className="input-title LabelDarkGreyLeft">Phone Number</div>
                        <Input
                            className="Body2RegularBlack80Left" />
                    </div>
                    <div className="paddingTop40 input-item">
                        <div className="input-title LabelDarkGreyLeft">Date of Birth</div>
                        <Input
                            className="Body2RegularBlack80Left" />
                    </div>

                    <section className="paddingTop40 question-section">
                        <div className="question LeadRegularBlackLeft">
                            What’s your employment status?
                        </div>
                        <div className="question-desc BodyRegularGreyLeft">We ask this to assess your risk level</div>
                        <div className="question-container">
                            <div className="radio-container">
                                <div className="radio">
                                    <Radio></Radio>
                                </div>

                                <div>
                                    <h6 className="H6BlackLeft">Employed</h6>
                                    <span className="flex-horizontal">
                                        <div className="paddingRight12">I am a </div>
                                        <span>
                                            <Input className="Body2RegularBlack80Left" />
                                        </span>
                                        <div className="paddingRight12 paddingLeft12"> at </div>
                                        <span>
                                            <Input className="Body2RegularBlack80Left" />
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="radio-container">
                                <div className="radio">
                                    <Radio></Radio>
                                </div>

                                <div>
                                    <h6 className="H6BlackLeft">Unemployed</h6>

                                </div>
                            </div>
                            <div className="radio-container">
                                <div className="radio">
                                    <Radio></Radio>
                                </div>

                                <div>
                                    <h6 className="H6BlackLeft">Retired</h6>

                                </div>
                            </div>
                            <div className="radio-container">
                                <div className="radio">
                                    <Radio></Radio>
                                </div>

                                <div>
                                    <h6 className="H6BlackLeft">Student</h6>

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