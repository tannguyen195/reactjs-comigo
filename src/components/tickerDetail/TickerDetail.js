import React, { Component } from 'react';
import { Row, Col, Tabs, Icon, Timeline } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ArticleCardHorizontal from '../common/articleCardHorizontal/ArticleCardHorizontal'
import { Link } from 'routes'
const cover = '/static/images/cover.jpg'
const nextIcon = '/static/images/icon-next.svg'
const backIcon = '/static/images/icon-back.svg'
const TabPane = Tabs.TabPane;
const data = [
    { name: '12/8', uv: 4000, pv: 2400, amt: 2400 },
    { name: '13/8', uv: 3000, pv: 1398, amt: 2210 },
    { name: '14/8', uv: 2000, pv: 9800, amt: 2290 },
    { name: '15/8', uv: 2780, pv: 3908, amt: 2000 },
    { name: '16/8', uv: 1890, pv: 4800, amt: 2181 },
    { name: '17/8', uv: 2390, pv: 3800, amt: 2500 },
    { name: '18/8', uv: 3490, pv: 4300, amt: 2100 },
    { name: '12/8', uv: 4000, pv: 2400, amt: 2400 },
    { name: '13/8', uv: 3000, pv: 1398, amt: 2210 },
    { name: '15/8', uv: 2780, pv: 3908, amt: 2000 },
    { name: '16/8', uv: 1890, pv: 4800, amt: 2181 },
    { name: '17/8', uv: 2390, pv: 3800, amt: 2500 },
    { name: '18/8', uv: 3490, pv: 4300, amt: 2100 },
    { name: '12/8', uv: 4000, pv: 2400, amt: 2400 },
    { name: '13/8', uv: 3000, pv: 1398, amt: 2210 },
    { name: '15/8', uv: 2780, pv: 3908, amt: 2000 },
    { name: '16/8', uv: 1890, pv: 4800, amt: 2181 },
    { name: '17/8', uv: 2390, pv: 3800, amt: 2500 },
    { name: '18/8', uv: 3490, pv: 4300, amt: 2100 },
];

const lastestArticles = [
    {
        image: cover,
        type: "SAVING",
        date: 'May 24, 2018',
        title: "Which debt mutual fund scheme is ideal to invest for a year?",
        content: "In recent years, extremely low interest rates on government bonds and high-quality corporate bonds have failed to provide an acceptable level of income for ..."
    },
    {
        image: cover,
        type: "INVESMENT",
        date: 'May 24, 2018',
        title: "Which debt mutual fund scheme is ideal to invest for a year?",
        content: "In recent years, extremely low interest rates on government bonds and high-quality corporate bonds have failed to provide an acceptable level of income for ..."
    },

]

const CustomizedDot = (props) => {

    return <div className="last-dot">asdas</div>
}


class TickerDetail extends Component {
    renderLearn(lastestArticles) {
        return lastestArticles.map((item, index) => {
            return <div key={index} >
                <ArticleCardHorizontal item={item} />
            </div>
        })
    }
    renderChart() {
        return <LineChart width={789} height={345} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

            <Tooltip />
            <Line dot={<CustomizedDot />}
                type="linear" dataKey="pv" stroke="#1774e6"
                strokeWidth={2} />
        </LineChart>
    }
    render() {

        return (
            <div className="ticker-container">
                <div className="ticker-header">
                    <div className="H6BlackCenter ticker-symbol">
                        S&P 500 INDEX
                    </div>
                    <div className="total-amount">
                        <h2 className="H2-2BlackCenter">
                            $2762.59</h2>
                        <div className="return">
                            <div style={{ color: false ? "#70cc33" : "#e6395c" }} className="rate H6BlackCenter">
                                <Icon type={false ? "caret-up" : "caret-down"} />0.40%
                    </div>
                            <div className="LabelGreyLeft">Daily Return</div>
                        </div>
                    </div>

                    <div className="ticker-chart CaptionRegularDarkGreyCenter">

                        <Tabs tabPosition="bottom">
                            <TabPane tab="Today" key="1">
                                {
                                    this.renderChart()
                                }

                            </TabPane>
                            <TabPane tab="1W" key="2">
                                {
                                    this.renderChart()
                                }
                            </TabPane>
                            <TabPane tab="1M" key="3">
                                {
                                    this.renderChart()
                                }
                            </TabPane>
                            <TabPane tab="3M" key="4">
                                {
                                    this.renderChart()
                                }
                            </TabPane>
                            <TabPane tab="6M" key="5">
                                {
                                    this.renderChart()
                                }
                            </TabPane>
                            <TabPane tab="1Y" key="6">
                                {
                                    this.renderChart()
                                }
                            </TabPane>
                            <TabPane tab="All" key="7">
                                {
                                    this.renderChart()
                                }
                            </TabPane>
                        </Tabs>
                    </div>
                </div>

                <div className="ticker-body">
                    <div className="ticker-detail ">
                        <section className="detail-section">
                            <Row gutter={32}>
                                <Col lg={8} md={8}>
                                    <div className="Body2RegularDarkGreyLeft">
                                        Open
                                </div>
                                    <h4 className="H4BlackLeft">
                                        2760.4
                                </h4>
                                </Col>

                                <Col lg={8} md={8}>
                                    <div className="Body2RegularDarkGreyLeft">
                                        High
                                </div>
                                    <h4 className="H4BlackLeft">
                                        $2760.4
                                </h4>
                                </Col>

                                <Col lg={8} md={8}>
                                    <div className="Body2RegularDarkGreyLeft">
                                        Low
                                </div>
                                    <h4 className="H4BlackLeft">
                                        $272.27
                                </h4>
                                </Col>
                                <Col className="paddingTop24" lg={8} md={8}>
                                    <div className="Body2RegularDarkGreyLeft">
                                        Market Cap
                                </div>
                                    <h4 className="H4BlackLeft">
                                        49.555K
                                </h4>
                                </Col>
                                <Col className="paddingTop24" lg={8} md={8}>
                                    <div className="Body2RegularDarkGreyLeft">
                                        P/E Ratio
                                </div>
                                    <h4 className="H4BlackLeft">
                                        17.39
                                </h4>
                                </Col>
                                <Col className="paddingTop24" lg={8} md={8}>
                                    <div className="Body2RegularDarkGreyLeft">
                                        Div Yield
                                </div>
                                    <h4 className="H4BlackLeft">
                                        1.55%
                                </h4>
                                </Col>
                            </Row>
                        </section>

                        <section className="desc-section">
                            <Row gutter={80}>
                                <Col md={12} lg={12}>
                                    <h6 className="H6BlackLeft">
                                        Trade Description
                                    </h6>
                                    <div className="BodyRegularBlackLeft">
                                        After a +10% correction in the S&P500, we bought on the reversal day, Feb. 9th. We liked price action on that day and despite news headlines, followed our proprietary buy signals. We allocated a small percentage and will either take profits or reduce, depending on Tuesday’s market
                                    </div>
                                    <a className="paddingTop8 NavigationBlueLeft">Read more</a>
                                </Col>
                                <Col md={12} lg={12}>
                                    <h6 className="H6BlackLeft">
                                        Transactions
                                    </h6>
                                    <div className="transaction-detail">

                                        <Timeline pendingDot={<div />} pending={<div className="transaction-action">
                                            <a className=" NavigationBlueLeft">View more</a>
                                        </div>
                                        }>

                                            <Timeline.Item dot={
                                                <div style={{ background: true ? "#70cc33" : "#e6395c" }}
                                                    className="transaction-icon">
                                                    <img src={true ? nextIcon : backIcon} alt="next" />
                                                </div>
                                            } >
                                                <div className="transaction-action">
                                                    <div>
                                                        After a +10% correction in the S&P500, we bought on the reversal
                                                    </div>
                                                    <div className="paddingTop8">
                                                        <span className="LabelDarkGreyLeft"
                                                            style={{ color: true ? "#70cc33" : "#e6395c" }}>BUY
                                                            </span>  <span className="LabelDarkGreyLeft">
                                                            • AUG 20
                                                            </span>
                                                    </div>
                                                </div>
                                            </Timeline.Item>

                                            <Timeline.Item dot={
                                                <div style={{ background: false ? "#70cc33" : "#e6395c" }}
                                                    className="transaction-icon">
                                                    <img src={false ? nextIcon : backIcon} alt="next" />
                                                </div>
                                            } >
                                                <div className="transaction-action">
                                                    <div>
                                                        After a +10% correction in the S&P500, we bought on the reversal
                                                    </div>
                                                    <div className="paddingTop8">
                                                        <span className="LabelDarkGreyLeft"
                                                            style={{ color: false ? "#70cc33" : "#e6395c" }}>SELL
                                                            </span>  <span className="LabelDarkGreyLeft">
                                                            • AUG 20
                                                            </span>
                                                    </div>
                                                </div>
                                            </Timeline.Item>
                                        </Timeline>
                                    </div>
                                </Col>
                            </Row>
                        </section>

                        <section className="market-section">
                            <h6 className="H6BlackLeft">
                                Market Update
                                    </h6>
                            <div className="learn-container">
                                {this.renderLearn(lastestArticles)}
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        )


    }
}

export default TickerDetail
