import React, { Component } from 'react';
import { Card, Button, Icon } from 'antd'

const checkIcon = '/static/images/icon-check.svg'
export default class extends Component {

    render() {
        const { handleContinue } = this.props
        return (
            <div className="verify-container">
                <Card bordered={false}>
                    <div className="check-icon">
                        <img src={checkIcon} alt="check" />
                    </div>
                    <div className="verify-desc Title-Small-Center">
                        Your email has successfully been verified!
                    </div>
                    <div className="verify-button">
                        <Button onClick={handleContinue} className="Button-1-Black" type="primary">
                            BUILD PROFILE
                        </Button>
                    </div>
                </Card>
            </div>
        )
    }
}


