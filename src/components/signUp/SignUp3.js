import React from 'react'
import { Link } from 'routes'
import { Row, Col, Input, Button, Radio } from 'antd'
const backIcon = '/static/images/icon-back-grey.svg'

const question1 = [
    {
        title: 'Conservative',
        desc: 'I’m more comfortable with smaller gains, if it means lower risk. '
    },
    {
        title: 'Moderate',
        desc: 'I’d prefer to take some risk for the opportunity of having larger gains.'
    },
    {
        title: 'Aggressive',
        desc: 'I want to take higher risk and I can afford somewhat larger losses to achieve greater gains.  '
    }
]

const question2 = [
    {
        title: 'Less than a year',
        desc: ''
    },
    {
        title: '2-5 years',
        desc: ''
    },
    {
        title: 'Over 5 years  ',
        desc: ''
    }
]
export default class extends React.Component {
    renderQuestion(question1) {
        return question1.map((item, index) => {
            return <div key={index} className="radio-container">
                <div className="radio">
                    <Radio></Radio>
                </div>

                <div>
                    <h6 className="H6BlackLeft">{item.title}</h6>
                    <div className="BodyRegularGreyLeft" className>{item.desc}</div>
                </div>
            </div>
        })
    }
    render() {
        const {
            step,
            onNextStep,
            onPreviousStep
        } = this.props
        return (
            <div className="sign-up-content">
                <div className="H3BlackLeft">Risk Profile</div>

                <div className="sign-up-wrapper">
                    <section className="paddingBottom56 question-section">
                        <div className="paddingBottom24 LeadRegularBlackLeft">
                            How do you picture yourself investing?
                        </div>

                        <div className="question-container">
                            {
                                this.renderQuestion(question1)
                            }
                        </div>
                    </section>

                    <section className="question-section">
                        <div className="question LeadRegularBlackLeft">
                            When do you think you’ll use the money we are managing and investing for you?
                        </div>
                        <div className="question-desc BodyRegularGreyLeft">Keep in mind that the money in your investment account should not be money you think you’ll need in the next year.</div>
                        <div className="question-container">
                            {
                                this.renderQuestion(question2)
                            }
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