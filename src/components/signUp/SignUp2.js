import React from 'react'
import { Link } from 'routes'
import { Row, Col, Input, Button } from 'antd'
import SuccessCheck from '../common/successCheck/SuccessCheck'
const backIcon = '/static/images/icon-back-grey.svg'
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isUS: false
        }
    }

    onCitizenChange() {
        this.setState({
            isUS: !this.state.isUS
        })
    }
    render() {
        const {
            step,
            onNextStep,
            onPreviousStep
        } = this.props
        const {
            isUS
        } = this.state
        return (
            <div className="sign-up-content">
                <div className="H3BlackCenter">I live in the U.S as a…</div>
                <div className="Body2RegularDarkGreyCenter desc">My Nest Egg currently only offers accounts to US Residents</div>
                <div className="paddingTop40 sign-up-wrapper">
                    <Row gutter={24} className="citizen-button">
                        <Col lg={12} md={12}>

                            <Button onClick={() => this.onCitizenChange()} >
                                <div className="H6BlackCenter">

                                    US Citizen
                                </div>
                            </Button>
                            <SuccessCheck checked={!isUS} />
                        </Col>
                        <Col lg={12} md={12}>
                            <Button onClick={() => this.onCitizenChange()}>
                                <div className="H6BlackCenter">
                                    Green Card Holder
                                </div>
                            </Button>
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