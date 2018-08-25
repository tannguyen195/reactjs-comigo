import React, { Component } from 'react';
import { Row, Col, Button, } from 'antd';
import _today from './_today.less'
import { LineChart, Line, } from 'recharts'
import CountUp from 'react-countup';
import ArticleCardHorizontal from '../../common/articleCardHorizontal/ArticleCardHorizontal'
const cover = 'static/images/cover.jpg'

const chartData =
    [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 10000, amt: 2000 },
    ]
const indexs = [
    {
        ticker: "S&P500",
        value: "2,718.00",
        percentage: "-37.81(-1.37%)",
        chart: chartData
    },
    {
        ticker: "S&P500",
        value: "2,718.00",
        percentage: "-37.81(-1.37%)",
        chart: chartData
    },
    {
        ticker: "S&P500",
        value: "2,718.00",
        percentage: "-37.81(-1.37%)",
        chart: chartData
    },
    {
        ticker: "S&P500",
        value: "2,718.00",
        percentage: "-37.81(-1.37%)",
        chart: chartData
    }
]

const lastestArticles = [
    {
        image: cover,
        type: "SAVING",
        date: 'May 24, 2018',
        title: "Which debt mutual fund scheme is ideal to invest for a year?",
        content: "In recent years, extremely low interest rates on government bonds and high-quality corporate bonds have failed to provide an acceptable level of income for retirees and other investors. As a result"
    },
    {
        image: cover,
        type: "INVESMENT",
        date: 'May 24, 2018',
        title: "Which debt mutual fund scheme is ideal to invest for a year?",
        content: "In recent years, extremely low interest rates on government bonds and high-quality corporate bonds have failed to provide an acceptable level of income for retirees and other investors. As a result."
    },

]

class Today extends Component {

    renderLearn(lastestArticles) {
        return lastestArticles.map((item, index) => {
            return <div key={index} >
                <ArticleCardHorizontal item={item} />
            </div>
        })
    }
    renderBenchmark(indexs) {
        return indexs.map((item, index) => {
            return <div key={index} className="benchmark-item">
                <div className="ticker ButtonNormalBlueLeft">
                    {item.ticker}
                </div>

                <div className="SubHeadingBlackLeft">
                    {item.value}
                </div>
                <div className="percentage">
                    {item.percentage}
                </div>
                <div className="chart">
                    <LineChart width={160} height={30} data={item.chart}>
                        <Line dot={false} type='monotone' dataKey='pv' stroke='#49def2' strokeWidth={1} />
                    </LineChart>
                </div>
            </div>
        })
    }
    render() {
        const {

        } = this.props
        return (
            <div className="today-container">
                <style dangerouslySetInnerHTML={{
                    __html: _today
                }} />
                <div className="today-header">
                    <div className="header-title">
                        <h4 className="H4BlackLeft">Hello, Tan Nguyen</h4>


                    </div>
                    <div className="header-button">
                        <Button className="ButtonSmallBlackCenter">INVITE FRIENDS</Button>
                        <Button className="ButtonSmallWhiteCenter" type="primary">ADD FUNDS</Button>
                    </div>


                </div>
                <section className="today-amount">
                    <div className="amount-item">
                        <div className="amount-item-title">Since Inception P/L</div>
                        <h3 className="H3BlackLeft">$<CountUp decimals={2} end={6827.27} /></h3>

                        <div style={{ color: '#e6395c' }} className="amount-item-percentage">-1.05%</div>
                    </div>
                    <div className="amount-item">
                        <div className="amount-item-title">Daily P/L</div>
                        <h3 className="H3BlackLeft">$<CountUp decimals={2} end={412.75} /></h3>
                        <div style={{ color: '#33cc33' }} className="amount-item-percentage">+12.40%</div>
                    </div>
                    <div className="amount-item">
                        <div className="amount-item-title">Year-to-Date (YTD) P/L</div>
                        <h3 className="H3BlackLeft">$<CountUp decimals={2} end={6827.27} /></h3>
                        <div style={{ color: '#e6395c' }} className="amount-item-percentage">+3.28%</div>
                    </div>
                </section>

                <section className="today-benchmark">
                    <h6 className="H6BlackLeft">Benchmark Indexes</h6>
                    <div className="benchmark-container">
                        {this.renderBenchmark(indexs)}
                    </div>
                </section>

                <section className="today-learn">
                    <h6 className="H6BlackLeft">Market Update</h6>
                    <div className="learn-container">
                        {this.renderLearn(lastestArticles)}
                    </div>
                </section>
            </div>
        )
    }
}

export default Today;
