import React from 'react'
import { Link } from 'routes'
import { Row, Col, Input, Button } from 'antd'

export default class extends React.Component {

    render() {
        const {
            step,
            onNextStep
        } = this.props
        return (
            <div className="sign-up-content">
                <div className="H3BlackCenter">Basic Information</div>

                <div className="sign-up-wrapper">
                    <Row gutter={40}>
                        <Col className="input-item" lg={12} md={12}>
                            <div className="input-title LabelDarkGreyLeft">First Legal Name</div>
                            <Input
                                className="Body2RegularBlack80Left" />
                        </Col>
                        <Col className="input-item" lg={12} md={12}>
                            <div className="input-title LabelDarkGreyLeft">Last Legal Name</div>
                            <Input
                                className="Body2RegularBlack80Left" />
                        </Col>


                    </Row>

                    <div className="paddingTop40 input-item">
                        <div className="input-title LabelDarkGreyLeft">Your email</div>
                        <Input
                            className="Body2RegularBlack80Left" />
                    </div>

                    <div className="button-group">
                        <Button className="sign-in ButtonNormalBlueCenter">SIGN IN</Button>
                        <Button onClick={onNextStep} type="primary" className="continue ButtonNormalWhiteCenter">CONTINUE</Button>
                    </div>
                </div>
            </div>
        )
    }
}