import React from 'react'
import { Link } from 'routes'
import { Row, Col, Card, Button } from 'antd'
import ConfirmModal from './ConfirmModal'
const backIcon = '/static/images/icon-back-grey.svg'
const checkIcon = 'static/images/icon-check.svg'
const plans = [
    {
        name: "Free",
        price: "UNFUNDED",
        priceNum: "0",
        isFree: true,
        benefits: [
            "Get to know us and our investment process",
            "Market Outlook, Educational Articles and Videos",
            "Position Lists (Delayed)",
            "Trade Descriptions (delayed)"
        ]
    },
    {
        name: "Silver",
        price: "$3k-50k",
        priceNum: "3-50",
        isFree: false,
        benefits: [
            "Fully Managed Account",
            "Market Outlook",
            "Position Lists",
            "Trade Descriptions",
            "Featured Articles and Videos",
            "Access to Webinars and other real-time content",
            "Future Planning Tool"
        ]
    },
    {
        name: "Gold",
        price: "$50,001-100k",
        priceNum: "50-96",
        isFree: false,
        benefits: [
            "Fully Managed Account",
            "Market Outlook",
            "Position Lists",
            "Trade Descriptions",
            "Featured Articles and Videos",
            "Access to Webinars and other real-time content",
            "Future Planning Tool"
        ]
    },
    {
        name: "Platinum",
        price: "MORE THAN $100,001",
        priceNum: "96",
        isFree: false,
        benefits: [
            "Fully Managed Account",
            "Market Outlook",
            "Position Lists",
            "Trade Descriptions",
            "Featured Articles and Videos",
            "Access to Webinars and other real-time content",
            "Future Planning Tool"
        ]
    }
]
export default class extends React.Component {
    renderPlanItem(plans) {
        console.log("THIS.PROPS", this.props)
        const { toggleConfirmModal } = this.props
        return plans.map((item, index) => {
            return <Col lg={6} md={6} key={index}>
                <Card onClick={toggleConfirmModal} hoverable className="plan-item-container">
                    <div className="plan-name H5BlueCenter">{item.name}</div>
                    <div className="plan-price LabelDarkGreyCenter">{item.price}</div>
                    <div className="plan-price-num">
                        <span className="symbol Body3RegularGreyCenter">$ </span>
                        <span> {item.priceNum}</span>
                        <span className="Body3RegularGreyCenter mo"> / mo</span>
                    </div>


                    <div className="options-container">
                        {
                            item.benefits.map((option, idx) => {
                                return <div key={idx} className="option-item">
                                    <img src={checkIcon} alt="check" />
                                    <div className="CaptionRegularDarkGreyLeft" >{option}</div>
                                </div>
                            })
                        }
                    </div>
                </Card>
            </Col>
        })
    }
    render() {
        const {
            step,
            onNextStep,
            onPreviousStep
        } = this.props
        return (
            <div className="sign-up-11-container">
                <ConfirmModal {...this.props} />
                <div className="sign-up-11-content">
                    <div className="H3BlackCenter">Transparent Tier Fee</div>
                    <div className="Body2RegularDarkGreyCenter desc">
                        Please review My Nest Egg's fee schedule. Transparency means we don't get paid for any recommendations we make or any transactions we execute for the client. The only fee the company receives is the one paid by you, the client.
                </div>
                    <h6 className="paddingTop24 H6BlackCenter">
                        Interactive Brokers calculates the Transparent Tier Fee based on your account size.
                </h6>
                    <div className=" paddingTop8 BodyRegularGreyCenter">
                        Interactive Brokers will automatically debit My Nest Egg’s fee from your account on
        the first business day of every month.
                </div>


                </div>
                <div className="plan-container">

                    <Row gutter={16}>
                        {
                            this.renderPlanItem(plans)
                        }
                    </Row>

                </div>
                <div className="sign-up-11-content">
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