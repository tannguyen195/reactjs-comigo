import React from 'react'
import { Link } from 'routes'
import { Row, Col, Input, Button, Radio } from 'antd'
import SignatureModal from './SignatureModal'
const backIcon = '/static/images/icon-back-grey.svg'
export default class extends React.Component {

    render() {
        const {
            step,
            onNextStep,
            onPreviousStep,
            toggleSignatureModal
        } = this.props
        return (
            <div className="sign-up-content">
                <SignatureModal  {...this.props} />
                <div className="H3BlackLeft">Agreements & Disclosures </div>
                <div className="Body2RegularDarkGreyLeft paddingTop16">
                    Please review and agree to our terms and agreements
                </div>
                <div className="paddingTop40 sign-up-wrapper">
                    <div className="radio-container">
                        <div className="radio">
                            <Radio></Radio>
                        </div>

                        <div>
                            <h6 className="H6BlackLeft">Client Financial Advisor Agreement</h6>
                        </div>
                    </div>
                    <div className="signature-container">
                        <div className="H6BlackLeft">Digital Signature</div>
                        <div className="signature-button">


                            <Button onClick={toggleSignatureModal} className="ButtonNormalBlackCenter">
                                CREATE YOUR SIGNATURE
                            </Button>
                        </div>
                    </div>
                    <div className="button-group">
                        <div onClick={onPreviousStep} className="back ButtonNormalDarkGreyLeft">
                            <img src={backIcon} alt="back" /><div>BACK</div></div>

                    </div>
                </div>
            </div>
        )
    }
}