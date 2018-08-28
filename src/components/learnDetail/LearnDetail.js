import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import {
    FacebookShareButton,
    GooglePlusShareButton,
    TwitterShareButton,

} from 'react-share';
import ArticleCard from '../common/articleCard/ArticleCard'
const facebookIcon = '/static/images/icon-facebook-color.svg'
const twitterIcon = '/static/images/icon-twitter-color.svg'
const googleIcon = '/static/images/icon-google-color.svg'

const cover = '/static/images/cover.jpg'
const articles = [
    {
        image: cover,
        type: "SAVING",
        date: 'May 24, 2018',
        title: "Which debt mutual fund scheme is ideal to invest for a year?"
    },
    {
        image: cover,
        type: "INVESMENT",
        date: 'May 24, 2018',
        title: "Which debt mutual fund scheme is ideal to invest for a year?"
    },

]
const footerCover = '/static/images/cover-footer.svg'
const content = `© My Nest Egg 2018.

"My Nest Egg" is the trade name of My Nest Egg Asset Management Inc. The products and services advertised are designed specifically for investors in the provinces of Alberta, British Columbia, Quebec, Manitoba, Ontario and PEI and may not be available to all investors. Products and services are only offered in accordance with applicable laws and regulations. This website is neither an offer to sell nor a solicitation of an offer to sell securities in any jurisdiction.

Nothing on this website should be considered as an offer or recommendation to trade in any security. Financial services are only provided to investors who become Nest Wealth Asset Management Inc. ("Nest Wealth") clients by entering into a written agreement. My Nest Egg is registered with the applicable securities commissions as a Portfolio Manager in AB, SK, BC, QC, MB,PE,NS NB,NL and in ON as a Portfolio Manager; Exempt Market Dealer and Investment Fund Manager. Any investor choosing to obtain financial advisory services from Nest Wealth is urged to read all agreements in their entirety and carefully consider whether such agreements are suitable for their individual facts and circumstances.`

class LearnDetail extends Component {
    renderArticle(articles) {
        return articles.map((item, index) => {
            return <Col lg={12} mg={12} key={index} >
                <ArticleCard item={item} />
            </Col>
        })
    }
    render() {

        return (

            <div className="learn-detail-container">
                <div style={{ background: `url(${cover})` }} className="learn-cover" />

                <section className="learn-content" >
                    <div className="content-wrapper">
                        <div className="max-width">
                            <div className="content-header ButtonNormalBlueLeft">
                                SAVING <span className="date">MAY 24, 2018</span>
                            </div>
                            <h2 className="title H2BlackLeft">
                                Introducing the Smart Savings Account. Savings Gets Smarter.
                        </h2>
                            <div className="desc LeadRegularGreyLeft">
                                Say hi to Smart Savings. If you like higher interest rates, seamless integration with your accounts, and a really pretty app, you're going to love it.
                        </div>
                            <div className="content Body2RegularBlack80Left">
                                {content}
                            </div>
                            <div className="share-social">
                                <div className="SubHeadingBlackCenter">Share this article</div>
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


                        </div>
                        <section className="article-section">
                            <h4 className="H4BlackCenter">Lastest Articles</h4>
                            <Row gutter={40} className="articles">
                                {
                                    this.renderArticle(articles)
                                }

                            </Row>
                        </section>
                    </div>
<div className="subcribe-container">
                    <div className="subcribe-content">
                        <h4 className="subcribe-title H4WhiteCenter">Stay Up to Date with My Nest Egg</h4>
                        <div className="subcribe-desc Body2RegularWhiteCenter">{`Be the first to hear about market updates, personal finance tips
     and My Nest Egg news.`}</div>
                        <div className="subcribe-button">
                            <Button type="primary" className="ButtonNormalWhiteCenter">SUBCRIBE</Button>

                        </div>
                    </div>
                    <div className="subcribe-image">
                        <img alt="cover" src={footerCover} />
                    </div>


                </div>
                </section>
                
            </div>
        )
    }
}

export default LearnDetail
