import React from 'react'
import { Link } from 'routes'
import { Row, Col, Input, Button, Checkbox } from 'antd'
const backIcon = '/static/images/icon-back-grey.svg'
const usCitizen = '/static/images/us-citizen.svg'
const greenCard = 'static/images/green-card.svg'
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isUS: false
        }
    }
    onCitizenChange(e) {
        this.setState({
            isUS: e
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

                            <Button onClick={() => this.onCitizenChange(true)} >
                                <img src={usCitizen} alt="us" />
                                <div className="H6BlackCenter">

                                    US Citizen
                                </div>
                            </Button>
                            {
                                isUS && <div className="checkbox">
                                    <Checkbox checked={isUS} ></Checkbox>
                                </div>
                            }

                        </Col>
                        <Col lg={12} md={12}>
                            <Button onClick={() => this.onCitizenChange(false)}>
                                <img src={greenCard} alt="green" />
                                <div className="H6BlackCenter">
                                    Green Card Holder
                                </div>
                            </Button>
                            {
                                !isUS && <div className="checkbox">
                                    <Checkbox checked={!isUS} ></Checkbox>
                                </div>
                            }

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