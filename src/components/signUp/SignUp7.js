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
                <div className="H3BlackLeft">Where you live?</div>
                <div className="Body2RegularDarkGreyLeft desc">Sorry, P.O. Boxes not accepted</div>
                <div className="sign-up-wrapper">

                    <div className=" input-item">
                        <div className="input-title LabelDarkGreyLeft">Home Address</div>
                        <Input
                            className="Body2RegularBlack80Left" />
                    </div>

                    <Row gutter={40}>
                        <Col className="paddingTop40 input-item" lg={12} md={12}>
                            <div className="input-title LabelDarkGreyLeft">City</div>
                            <Select className="BodyMediumBlackLeft" defaultValue="American Bank">
                                <Option value="American Bank">Iowa</Option>
                                <Option value="Vietcombank">HCMC</Option>
                                <Option value="Agribank" >Denver</Option>
                            </Select>
                        </Col>
                        <Col className="paddingTop40 input-item" lg={12} md={12}>
                            <div className="input-title LabelDarkGreyLeft">City</div>
                            <Select className="BodyMediumBlackLeft" defaultValue="American Bank">
                                <Option value="American Bank">Iowa</Option>
                                <Option value="Vietcombank">HCMC</Option>
                                <Option value="Agribank" >Denver</Option>
                            </Select>
                        </Col>

                        <Col className="paddingTop40 input-item" lg={12} md={12}>
                            <Input
                                placeholder="Zip Code"
                                className="Body2RegularBlack80Left" />
                        </Col>
                    </Row>



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