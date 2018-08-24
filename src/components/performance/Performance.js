import React, { Component } from 'react';
import { Row, Col, Button, Tabs, Progress, Table, Divider, Tag } from 'antd';
import { LineChart, Line, AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Link } from 'routes'
const askIcon = 'static/images/icon-ask.svg'
const TabPane = Tabs.TabPane;

const chartData = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
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
{ name: 'Page D', uv: 2780, pv: 10000, amt: 2000 },]
const data = [{
    ticker: 'TSLA',
    company: 'Tesla, Inc.',
    openDate: {
        date: "09/14/2018",
        value: "78.99"
    },
    closeDate: {
        date: "04/16/2018",
        value: "78.99"
    },

    performance: {
        amount: -29.95,
        percentage: -8.93
    },
    chart: chartData
}, {
    ticker: '^JKSE',
    company: 'Jakarta Composite Index',
    openDate: {
        date: "09/14/2018",
        value: "78.99"
    },
    closeDate: {
        date: "09/14/2018",
        value: "78.99"
    },

    performance: {
        amount: 91.99,
        percentage: 1.59
    },
    chart: chartData
},
{
    ticker: '^HSI',
    company: 'HANG SENG INDEX',
    openDate: {
        date: "09/14/2018",
        value: "78.99"
    },
    closeDate: {
        date: "09/14/2018",
        value: "78.99"
    },

    performance: {
        amount: +244.25,
        percentage: 0.90
    },
    chart: chartData
},
{
    ticker: '^N225',
    company: 'Nikkei 225',
    openDate: {
        date: "09/14/2018",
        value: "78.99"
    },
    closeDate: {
        date: "09/14/2018",
        value: "78.99"
    },

    performance: {
        amount: -35.86,
        percentage: -0.17
    },
    chart: chartData
}];
class Performance extends Component {
    renderTableList() {
        const columns = [{
            title: 'Ticker',
            dataIndex: 'ticker',
            key: 'ticker',
            render: text => <div className="ButtonNormalBlackLeft">{text}</div>,
        }, {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
        }, {
            title: 'Open Date',
            dataIndex: 'openDate',
            key: 'opendate',
            render: (text, record) => {
                console.log("recored", record)
                return (
                    <div className="date-list">
                        <div className="CaptionRegularDarkGreyRight">
                            {record.openDate.date}
                        </div>
                        <div className="BodyMediumBlackRight">
                            ${record.openDate.value}
                        </div>
                    </div>)
            }
        }, {
            title: 'Close Date',
            key: 'closedate',
            dataIndex: 'closeDate',
            render: (text, record) => (
                <div className="date-list">
                    <div className="CaptionRegularDarkGreyRight">
                        {record.closeDate.date}
                    </div>
                    <div className="BodyMediumBlackRight">
                        ${record.closeDate.value}
                    </div>
                </div>
            ),
        }, {
            title: '',
            key: 'chart',
            render: (text, record) => (
                <LineChart width={150} height={30} data={record.chart}>
                    <Line dot={false} type='monotone' dataKey='pv' stroke='#1774e6' strokeWidth={1} />
                </LineChart>

            ),
        }, {
            title: 'Performance',
            key: 'performance',
            dataIndex: 'performance',
            render: (text, record) => (
                <div className="date-list">
                    <div className="BodyMediumBlackRight">
                        {record.performance.amount}
                    </div>
                    <div style={{ color: record.performance.percentage < 0 ? "#e6395c" : "#70cc33" }}
                        className="CaptionRegularDarkGreyRight">
                        {record.performance.percentage > 0 && "+"}{record.performance.percentage} %
                    </div>
                </div>
            ),
        }];


        return <Table rowKey="uid" pagination={false} columns={columns} dataSource={data} />
    }
    renderProgress() {
        return <div className="progress-container">
            <div className=" progress-title">
                <img src={askIcon} alt="ask" />
                <div className="progress-ask BodyRegularGreyLeft">
                    {`    This chart shows you how we're doing so far this 
                    year compared to the benchmark index.`}
                </div>
            </div>
            <div className="progress-detail">
                <div className="progress-item">
                    <div className="progress-name">
                        <div className="BodyMediumBlack80Left">
                            My Nest Egg
                        </div>
                        <div className="LabelBlackLeft ">
                            3.62%
                        </div>
                    </div>
                    <Progress percent={50} strokeWidth={16} showInfo={false} status="active" />
                </div>

                <div className="progress-item">
                    <div className="progress-name">
                        <div className="BodyMediumBlack80Left">
                            S&P500
                        </div>
                        <div className="LabelBlackLeft ">
                            0.82%
                        </div>
                    </div>
                    <Progress percent={20} strokeWidth={16} strokeColor="#cdd1d6" showInfo={false} status="active" />
                </div>
            </div>

        </div>
    }
    render() {

        return (
            <div className="main-wrapper body-content performance-container">
                <div className="performance-header">
                    <div className="header-title">
                        <h3 className="H3BlackLeft">Performance</h3>
                        <div className="header-desc BodyRegularGreyLeft">
                            My Nest Egg Equity Portfolio Performance
                        </div>

                    </div>
                    <div className="header-button">
                        <Button className="ButtonNormalBlackCenter">INVITE FRIENDS</Button>
                        <Button className="ButtonNormalWhiteCenter" type="primary">START INVESTING</Button>
                    </div>
                </div>

                <div className="performance-progress">
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="2017" key="1">{this.renderProgress()}</TabPane>
                        <TabPane tab="1st Half 2018" key="2">{this.renderProgress()}</TabPane>
                    </Tabs>
                </div>

                <div className="position-list">
                    <h4 className="H4BlackLeft">
                        Position List</h4>
                    <div className="table-position">
                        {this.renderTableList()}
                    </div>
                </div>
            </div>
        )


    }
}

export default Performance
