import React, { Component } from 'react';

import _closeAccount from './_closeAccount.less'
import { Button, Input } from 'antd'
const infoIcon = 'static/images/icon-info.svg'
class CloseAccount extends Component {

    render() {
        const {

        } = this.props
        return (
            <div className="close-account-container">
                <style dangerouslySetInnerHTML={{
                    __html: _closeAccount
                }} />
                <h4 className="H4BlackLeft">Close Account</h4>
                <section className="close-account-body">
                    <section className="info-container">
                        <div className="icon-info"><img alt="info" src={infoIcon} />
                        </div>
                        <div className="BodyMediumBlackLeft">
                            Please note we will need a few days to sell your positions. Once they are converted into cash, you may withdraw the balance and close your account.
                        </div>
                    </section>

                    <div className="if-close">
                        <div className="BodyMediumBlackLeft">
                            If you close your account
                        </div>
                        <ul>
                            <li className="BodyRegularBlackLeft">
                                <a className="dot">•</a>
                                Your profile will be deleted
                            </li>
                            <li className="BodyRegularBlackLeft">
                                <a className="dot">•</a>    If you would like to invest with us again, you'll need to follow the account application process again
                            </li>
                            <li className="BodyRegularBlackLeft">
                                <a className="dot">•</a>     <div> Have questions or feedback? Please contact us at <a>support@mynestegginvest.com</a></div>
                            </li>
                        </ul>
                    </div>

                    <section className="close-account">
                        <div className="input-item">
                            <Input
                                placeholder="Your username or email"
                                className="Body2RegularBlack80Left" />
                        </div>

                        <div className="input-item">
                            <Input
                                placeholder="A code we sent by email to verify"
                                className="Body2RegularBlack80Left" />
                        </div>
                        <div className="change-button">
                            <Button className="ButtonNormalBlackCenter" >
                                CLOSE THIS ACCOUNT
                    </Button>
                        </div>
                    </section>
                </section>
            </div>


        )
    }
}

export default CloseAccount;
