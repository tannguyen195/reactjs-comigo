import React from 'react'
import { Link } from 'routes'
import { Row, Col, Input, Button } from 'antd'
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
                <div className="H3BlackCenter">Create an Account</div>
                <div className="Body2RegularDarkGreyCenter desc">Please setup your username and password</div>
                <div className="paddingTop16">
                    <div className="paddingTop40 input-item">
                        <div className="input-title LabelDarkGreyLeft">Email</div>
                        <Input
                            className="Body2RegularBlack80Left" />
                    </div>
                    <div className="paddingTop40 input-item">
                        <div className="input-title LabelDarkGreyLeft">Password</div>
                        <Input type="password"
                            className="Body2RegularBlack80Left" />
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