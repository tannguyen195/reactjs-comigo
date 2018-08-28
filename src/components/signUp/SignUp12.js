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
                <div className="H3BlackCenter">Risk Profile</div>
              
                <div className="sign-up-wrapper">
                   

                    <div className="button-group">
                        <div onClick={onPreviousStep} className="back ButtonNormalDarkGreyLeft">
                            <img src={backIcon} alt="back" /><div>BACK</div></div>
                        
                    </div>
                </div>
            </div>
        )
    }
}