import React, { Component } from 'react';
import _past from './_past.less'
import { Button, DatePicker, Table } from 'antd'
import momonet from 'moment'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const { WeekPicker } = DatePicker;
const data = [
    { name: '12/8', uv: 4000, pv: 2400, amt: 2400 },
    { name: '13/8', uv: 3000, pv: 1398, amt: 2210 },
    { name: '14/8', uv: 2000, pv: 9800, amt: 2290 },
    { name: '15/8', uv: 2780, pv: 3908, amt: 2000 },
    { name: '16/8', uv: 1890, pv: 4800, amt: 2181 },
    { name: '17/8', uv: 2390, pv: 3800, amt: 2500 },
    { name: '18/8', uv: 3490, pv: 4300, amt: 2100 },
];

const tradeData =
    [
        {
            action: 'SELL',
            date: '07/07/2017',
            ticker: "FB",
            shares: 30,
            price: 30.93,
        },
        {
            action: 'BUY',
            date: '07/07/2017',
            ticker: "FB",
            shares: 30,
            price: 30.93,
        },
        {
            action: 'SELL',
            date: '07/07/2017',
            ticker: "FB",
            shares: 30,
            price: 30.93,
        },
        {
            action: 'BUY',
            date: '07/07/2017',
            ticker: "FB",
            shares: 30,
            price: 30.93,
        },
        {
            action: 'SELL',
            date: '07/07/2017',
            ticker: "FB",
            shares: 30,
            price: 30.93,
        },
        {
            action: 'SELL',
            date: '07/07/2017',
            ticker: "FB",
            shares: 30,
            price: 30.93,
        },
        {
            action: 'BUY',
            date: '07/07/2017',
            ticker: "FB",
            shares: 30,
            price: 30.93,
        },
        {
            action: 'BUY',
            date: '07/07/2017',
            ticker: "FB",
            shares: 30,
            price: 30.93,
        },
        {
            action: 'SELL',
            date: '07/07/2017',
            ticker: "FB",
            shares: 30,
            price: 30.93,
        },
        {
            action: 'BUY',
            date: '07/07/2017',
            ticker: "FB",
            shares: 30,
            price: 30.93,
        }
    ];
class Past extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            dateString: "August, 12–18"
        }
    }

    onChange(date) {
        if (date)

            this.setState({
                dateString: `${date.startOf('week').format("MMMM")}, ${date.startOf('week').format("DD")}-${date.endOf('week').format("DD")}`
            })
    }
    onOpenChange(e) {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    renderTableList() {
        const columns = [{
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: text => <div style={{ color: text === "SELL" ? "#e6395c" : "#33cc33" }} className="ButtonNormalBlackLeft">{text}</div>,
        }, {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        }, {
            title: 'Ticker',
            dataIndex: 'ticker',
            key: 'ticker',
            render: text => <div className="Body2RegularBlack80Left">{text}</div>,
        }, {
            title: 'Shares',
            key: 'shares',
            dataIndex: 'shares',

        }, {
            title: 'Price/Shares',
            key: 'price',
            dataIndex: 'price',
            render: text => <div className="Body2RegularBlack80Left">{text}</div>,

        },];


        return <Table rowKey="uid" pagination={false} columns={columns} dataSource={tradeData} />
    }
    render() {
        const {
            isOpen,
            dateString
        } = this.state
        return (
            <div className="past-container">
                <style dangerouslySetInnerHTML={{
                    __html: _past
                }} />
                <div className="past-header">
                    <div className="header-title">
                        <h4 className="H4BlackLeft">Past</h4>
                        <div className="week-picker">
                            <div onClick={(e) => this.onOpenChange(e)} className="SubHeadingBlackCenter">
                                {dateString}
                            </div>
                            <WeekPicker
                                open={isOpen}
                                onOpenChange={(e) => this.onOpenChange(e)}
                                onChange={(e) => this.onChange(e)}
                                placeholder="Select week" >
                                <div>asda</div>
                            </WeekPicker>

                        </div>

                    </div>
                    <div className="header-button">
                        <Button className="ButtonSmallBlackCenter">INVITE FRIENDS</Button>
                        <Button className="ButtonSmallWhiteCenter" type="primary">ADD FUNDS</Button>
                    </div>


                </div>

                <section className="past-week-trade">
                    <h5 className="H5BlackLeft">Trades That Week</h5>
                    <div className="past-week-chart CaptionRegularDarkGreyCenter">
                        <LineChart width={789} height={345} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis axisLine={false} orientation="top" dataKey="name" />
                            <Tooltip />
                            <Line type="linear" dataKey="pv" stroke="#1774e6"
                                strokeWidth={2}
                                activeDot={{ r: 8 }} />

                        </LineChart>

                    </div>
                </section>


                <section className="past-week-log">
                    <h6 className="H6BlackLeft">Trade log</h6>
                    <div className="table-position">
                        {this.renderTableList()}
                    </div>
                </section>

            </div>
        )
    }
}

export default Past;
