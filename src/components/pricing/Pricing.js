import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

import { Link } from 'routes'
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

const questions = [
    {
        title: "What is My Nest Egg?",
        answer: "My Nest Egg is a wealth management service offering professionally managed, hands-off accounts to all account sizes. Currently this type of premium service has only been available to account sizes of $250k/500k or more."
    },
    {
        title: "How much does it cost?",
        answer: `"My Nest Egg will charge a management subscription, depending on your account size, every month. Unlike other "investment apps," there are no hidden fees or shady ways of making money. In other words, no conflicts of interest.`
    },
    {
        title: "Does My Nest Egg have custody of my account?",
        answer: "My Nest Egg is a wealth management service offering professionally managed, hands-off accounts to all account sizes. Currently this type of premium service has only been available to account sizes of $250k/500k or more."
    }, {
        title: "What about trading commissions? ",
        answer: "Interactive Brokers LLC, the custodian of all client accounts, charges a maximum of $1 per 100 shares. Most of the time, My Nest Egg clients will share trading commissions, making these costs cents on the dollar. "
    },
    {
        title: "Does My Nest Egg have any conflicts of interest?",
        answer: "No, My Nest Egg will not receive any commissions for any financial products traded for client accounts."
    }
]
class Pricing extends Component {
    renderPlanItem(plans) {
        return plans.map((item, index) => {
            return <Col lg={6} md={6} key={index} className="plan-item-container">
                <div className="plan-name H5BlueCenter">{item.name}</div>
                <div className="plan-price LabelDarkGreyCenter">{item.price}</div>
                <div className="plan-price-num">
                    <span className="symbol Body3RegularGreyCenter">$ </span>
                    <span> {item.priceNum}</span>
                    <span className="Body3RegularGreyCenter mo"> / mo</span>
                </div>

                <div className="start-button">
                    {
                        item.isFree ? <Button>
                            GET TO KNOW US
                    </Button> : <Button className="ButtonNormalWhiteCenter" type="primary">
                                START THIS PLAN
                    </Button>
                    }


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
            </Col>
        })
    }
    renderQuestions(questions) {
        return questions.map((item, index) => {
            return <div key={index} className="radio-container">
                <div className="question-title H6BlackLeft">{item.title}</div>
                <div className="question-desc BodyRegularGreyLeft">{item.answer}</div>

            </div>
        })
    }
    render() {

        return (
            <div className=" main-wrapper pricing-container">
                <section className="pricing-wrapper">
                    <h2 className="pricing-title H3BlackCenter">
                        Pricing Plans
                </h2>

                    <div className="pricing-desc LeadRegularGreyCenter">{`My Nest Egg charges one simple fee, depending 
                    on account size.`}</div>
                    <section className="plans-section">
                        <Row gutter={80}>


                            {
                                this.renderPlanItem(plans)
                            }
                        </Row>
                    </section>
                </section>


                <section className="questions-section">
                    <section className="pricing-wrapper">
                        <Row gutter={100}>
                            <Col md={10} lg={10}>
                                <div className="H2BlackLeft">Frequently asked questions</div>
                                <div className="questions-bref LeadRegularBlack80Left">
                                    {`Additional questions? 
                                Check out our`} <a> Help Center</a>
                                </div>
                            </Col>
                            <Col className="question-container" md={14} lg={14}>

                                {
                                    this.renderQuestions(questions)
                                }


                            </Col>
                        </Row>
                    </section>

                </section>

            </div>
        )


    }
}

export default Pricing
