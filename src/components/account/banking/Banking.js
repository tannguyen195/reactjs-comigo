import React, { Component } from 'react';
import { Input, Row, Col, Select, Icon, Table } from 'antd'
import _banking from './_banking.less'

const creditCard = '/static/images/credit-card.svg'
const optionIcon = '/static/images/icon-option.svg'
const nextIcon = '/static/images/icon-next.svg'
const backIcon = '/static/images/icon-back.svg'
const tradeData =
    [
        {
            action: 'SELL',
            date: '07/07/2017',
            ticker: "FB",
            amount: 30.93,
        },
        {
            action: 'BUY',
            date: '07/07/2017',
            ticker: "FB",

            amount: 30.93,
        },
        {
            action: 'SELL',
            date: '07/07/2017',
            ticker: "FB",

            amount: 30.93,
        },
        {
            action: 'BUY',
            date: '07/07/2017',
            ticker: "FB",

            amount: 30.93,
        },
        {
            action: 'SELL',
            date: '07/07/2017',
            ticker: "FB",

            amount: 30.93,
        },
        {
            action: 'SELL',
            date: '07/07/2017',
            ticker: "FB",

            amount: 30.93,
        },
        {
            action: 'BUY',
            date: '07/07/2017',
            ticker: "FB",

            amount: 30.93,
        },
        {
            action: 'BUY',
            date: '07/07/2017',
            ticker: "FB",

            amount: 30.93,
        },
        {
            action: 'SELL',
            date: '07/07/2017',
            ticker: "FB",

            amount: 30.93,
        },
        {
            action: 'BUY',
            date: '07/07/2017',
            ticker: "FB",

            amount: 30.93,
        }
    ];
class Banking extends Component {
    renderTableList() {
        const columns = [{
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: text =>
                <div className="account-label ">
                    <div style={{ background: text === "SELL" ? "#e6395c" : "#33cc33" }} className="label-image">
                        <img alt="next" src={text === "SELL" ? backIcon : nextIcon} />
                    </div>
                    <div style={{ color: text === "SELL" ? "#e6395c" : "#33cc33" }} className="LabelDarkGreyLeft">
                        {text}
                    </div>

                </div>,
        },
        {
            title: 'Account',
            dataIndex: 'ticker',
            key: 'ticker',
            render: text => <div className="account-info">
                <div className="BodyMediumBlackLeft">••••••••••••1234</div>
                <div className="BodyRegularGreyLeft">Bank of America</div>
            </div>,
        }, {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: text => <div className="BodyRegularBlackLeft">{text}</div>,
        }, , {
            title: 'Amount($)',
            key: 'amount',
            dataIndex: 'amount',
            render: text => <div className="BodyMediumBlackLeft">{text}</div>,

        },];


        return <Table rowKey="uid" pagination={false} columns={columns} dataSource={tradeData} />
    }
    render() {
        const {

        } = this.props
        return (
            <div className="banking-container">
                <style dangerouslySetInnerHTML={{
                    __html: _banking
                }} />
                <h4 className="H4BlackLeft">Banking</h4>

                <section className="border banking-body">
                    <h6 className="H6BlackLeft">My Bank Account</h6>
                    <div className="account-list">

                        <div className="account">
                            <div className="info-holder">
                                <div className="card-image">
                                    <img src={creditCard} alt="card" />
                                </div>
                                <div className="account-info">
                                    <div className="BodyMediumBlackLeft">••••••••••••1234</div>
                                    <div className="BodyRegularGreyLeft">Nguyen Trong Tan</div>
                                </div>
                            </div>
                            <div className="option">
                                <img src={optionIcon} alt="option" />
                            </div>
                        </div>

                        <div className="account">
                            <div className="info-holder">
                                <div className="card-image">
                                    <img src={creditCard} alt="card" />
                                </div>
                                <div className="account-info">
                                    <div className="BodyMediumBlackLeft">••••••••••••1234</div>
                                    <div className="BodyRegularGreyLeft">Nguyen Trong Tan</div>
                                </div>
                            </div>
                            <div className="option">
                                <img src={optionIcon} alt="option" />
                            </div>
                        </div>

                        <div className="add-account">
                            <div className="NavigationBlueLeft"><Icon type="plus" />Add new Bank Account</div>
                        </div>
                    </div>
                </section>

                <section className="banking-body">
                    <h6 className="H6BlackLeft">Transactions</h6>

                    {this.renderTableList()}
                </section>

            </div >
        )
    }
}

export default Banking;
