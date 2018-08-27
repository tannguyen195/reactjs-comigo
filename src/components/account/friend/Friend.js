import React, { Component } from 'react';
import { Input, Row, Col, Select, Radio, Switch, Button } from 'antd'
import _friend from './_friend.less'
import {
    FacebookShareButton,
    GooglePlusShareButton,
    TwitterShareButton,

} from 'react-share';

const facebookIcon = 'static/images/icon-facebook-color.svg'
const twitterIcon = 'static/images/icon-twitter-color.svg'
const googleIcon = 'static/images/icon-google-color.svg'

const RadioGroup = Radio.Group;
class Friend extends Component {

    render() {
        const {

        } = this.props
        return (
            <div className="friend-container">
                <style dangerouslySetInnerHTML={{
                    __html: _friend
                }} />
                <h4 className="H4BlackLeft">Refer Friends</h4>

                <section className="friend-body">
                    <div className="invite-item">
                        <h6 className="H6BlackLeft">Send your friends a personalised invite email</h6>
                        <div className="invite-input">
                            <Input placeholder="Separate multiple emails with comma" />
                        </div>

                    </div>

                    <div className="invite-item">
                        <h6 className="H6BlackLeft">Or use your invite like</h6>
                        <div className="invite-input">
                            <Input value="https://mynestegg.com/u/mne124" placeholder="" /></div>
                    </div>

                    <div className="invite-item">
                        <h6 className="H6BlackLeft">Or share your link via</h6>
                        <div className="share-buttons">
                            <div className="social-button">
                                <FacebookShareButton url="https://mynestegg.com/u/mne124">
                                    <Button><img src={facebookIcon} alt='social' /></Button>
                                </FacebookShareButton>
                            </div>
                            <div className="social-button">
                                <GooglePlusShareButton url="https://mynestegg.com/u/mne124" >
                                    <Button><img src={googleIcon} alt='social' /></Button>
                                </GooglePlusShareButton>
                            </div>
                            <div className="social-button">
                                <TwitterShareButton url="https://mynestegg.com/u/mne124" >
                                    <Button><img src={twitterIcon} alt='social' /></Button>
                                </TwitterShareButton>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Friend;
