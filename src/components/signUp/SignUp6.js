import React from 'react'
import { Link } from 'routes'
import { Row, Col, Input, Button, Radio } from 'antd'
const RadioGroup = Radio.Group;
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
                <div className="H3BlackLeft">Account Type</div>
                <div className="Body2RegularDarkGreyLeft desc">
                    You can choose 1 of 3 account types for US residents</div>
                <div className="paddingTop40 sign-up-wrapper">

                    <div className="radio-border radio-container">
                        <div className="radio">
                            <Radio></Radio>
                        </div>

                        <div>
                            <h6 className="H6BlackLeft">Individual (Just you)</h6>
                        </div>
                    </div>

                    <div className="radio-border radio-container">
                        <div className="radio">
                            <Radio></Radio>
                        </div>

                        <div>
                            <h6 className="H6BlackLeft">Joint (You and someone else)</h6>
                        </div>
                    </div>


                    <div className="radio-border radio-container">
                        <div className="radio">
                            <Radio></Radio>
                        </div>

                        <div>
                            <h6 className="H6BlackLeft paddingBottom16">Retirement (IRA account)</h6>

                            <RadioGroup value={1} className="radio-group">
                                <Radio className="paddingBottom16" value={1}>  <span className=" H6BlackLeft">Traditional Inherited</span></Radio>
                                <Radio className="paddingBottom16" value={2}>  <span className=" H6BlackLeft">Traditional Rollover</span></Radio>
                                <Radio className="paddingBottom16" value={3} >  <span className=" H6BlackLeft">Roth</span></Radio>
                                <Radio className="paddingBottom16" value={4} >  <span className=" H6BlackLeft">Roth Inherited</span></Radio>
                                <Radio className="paddingBottom16" value={5} >  <span className=" H6BlackLeft">RSimplified Employee Pension</span></Radio>
                            </RadioGroup>

                        </div>


                    </div>


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