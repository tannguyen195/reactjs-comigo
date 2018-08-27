import React, { Component } from 'react';
import { Input, Row, Col, Select, Radio, Switch } from 'antd'
import _notification from './_notification.less'
const RadioGroup = Radio.Group;
class Notification extends Component {

    render() {
        const {

        } = this.props
        return (
            <div className="notification-container">
                <style dangerouslySetInnerHTML={{
                    __html: _notification
                }} />
                <h4 className="H4BlackLeft">Notification</h4>
                <section className="notification-body">
                    <div className="notification-item">
                        <div>
                            <div className="SubHeadingBlackLeft">Activity Weekly</div>
                            <div className="BodyRegularGreyLeft">Push email activity weekly into your email every single week</div>
                        </div>
                        <div>

                            <Switch defaultChecked />
                        </div>
                    </div>

                     <div className="notification-item">
                        <div>
                            <div className="SubHeadingBlackLeft">Update, News, Lessions</div>
                            <div className="BodyRegularGreyLeft">Push email new Update, News, Lessions </div>
                        </div>
                        <div>

                            <Switch  />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Notification;
