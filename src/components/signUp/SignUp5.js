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
                <div className="H3BlackCenter">Fiduciary Commitment</div>
                <div className="Body2RegularDarkGreyCenter desc">
                    Please fill in the circle to confirm you understand the fiduciary
responsibility My Nest Egg has with you.</div>
                <div className="paddingTop40 sign-up-wrapper">
                    <section className=" question-section">
                        <div className="question-container">
                            <div className="radio-container">
                                <div className="radio">
                                    <Radio></Radio>
                                </div>

                                <div>
                                    <h6 className="H6BlackLeft">Fiduciary Commitment</h6>
                                    <div className="BodyRegularGreyLeft" >We have a legal obligation to act in your best interest. Most financial services companies are only bound to vague suitability standards, meaning they’re only obligated to make decisions they believe are suitable for their clients. My Nest Egg always puts your interests above its own and has no conflicts of interest. </div>
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