import React from 'react'
import { Link } from 'routes'
import { Row, Col, Input, Button, Select } from 'antd'
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
                <div className="H3BlackLeft">Financial Information </div>
                <div className="Body2RegularDarkGreyLeft paddingTop16">
                    By regulation, as your investment adviser, My Nest Egg seeks to know detailed information about your financial position.
                </div>
                <div className="paddingTop40 sign-up-wrapper">

                    <section className=" question-section">
                        <div className="question LeadRegularBlackLeft">
                            How many people depend on you for financial support?
                        </div>

                        <div className="question-container">
                            <div className="paddingTop20 input-item">

                                <Input
                                    className="Body2RegularBlack80Left" />
                            </div>

                        </div>
                    </section>

                    <section className="paddingTop40 question-section">
                        <div className="question LeadRegularBlackLeft">
                            What’s Your Approximate Net Worth?
                        </div>
                        <div className="question-desc paddingTop8  BodyRegularGreyLeft">
                            Add up the value of all your assets (home, car, cash, etc.), then subtract any debt (loans, mortgages, credit card debt, etc.)
                        </div>
                        <div className="question-container">
                            <div className=" input-item">

                                <Input
                                    className="Body2RegularBlack80Left" />
                            </div>

                        </div>
                    </section>

                    <section className="paddingTop40 question-section">
                        <div className="question LeadRegularBlackLeft">
                            How much will you make this year?
                        </div>

                        <div className="question-container">
                            <div className="paddingTop20 input-item">

                                <Input
                                    className="Body2RegularBlack80Left" />
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