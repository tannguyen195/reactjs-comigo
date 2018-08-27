import React, { Component } from 'react';
import _funding from './_funding.less'
import { Button, Row, Col, Form, InputNumber, Select } from 'antd'
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'


const data = [
    { name: 'Today', uv: 0, pv: 0 },
    { name: '30 years', uv: 10000, pv: 20000 },
    { name: '50 years', uv: 30000, pv: 60000 },
];

const FormItem = Form.Item

class Funding extends Component {
    render() {
        const {
        } = this.props
        return (
            <div className="funding-container">
                <style dangerouslySetInnerHTML={{
                    __html: _funding
                }} />
                <div className="funding-header">
                    <div className="header-title">
                        <h4 className="H4BlackLeft">Funding</h4>
                    </div>
                    <div className="header-button">
                        <Button className="ButtonSmallBlackCenter">INVITE FRIENDS</Button>
                    </div>


                </div>

                <section className="funding-amount">
                    <Row >
                        <Col className="left-amount" md={8} lg={8}>
                            <div>
                                <div className="input-title LabelDarkGreyLeft">Amount</div>
                                <FormItem>
                                    <InputNumber
                                        defaultValue={1000}
                                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                        className="Body2RegularBlack80Left" />
                                </FormItem>
                            </div>

                            <div>
                                <div className="input-title LabelDarkGreyLeft">Schedule</div>
                                <FormItem>
                                    <Select className="BodyMediumBlackLeft" defaultValue="Every month">
                                        <Option className="BodyMediumBlackLeft" value="Every month">Every month</Option>
                                        <Option value="Every year">Every year</Option>
                                        <Option value="Every decade">Every decade</Option>
                                    </Select>
                                </FormItem>
                            </div>

                            <div>
                                <div className="input-title LabelDarkGreyLeft">Bank Account</div>
                                <FormItem>
                                    <Select className="BodyMediumBlackLeft" defaultValue="American Bank">
                                        <Option value="American Bank">American Bank</Option>
                                        <Option value="Vietcombank">Vietcombank</Option>
                                        <Option value="Agribank" >Agribank</Option>
                                    </Select>
                                </FormItem>
                            </div>
                            <div className="submit-button">
                                <Button type="primary" className="ButtonSmallNormalCenter">Submit Deposit</Button>
                            </div>
                        </Col>
                        <Col md={16} lg={16}>
                            <div className="chart-container">
                                <AreaChart width={600} height={328} data={data}
                                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>

                                    <XAxis dataKey="name" />
                                    <YAxis stroke="transparent" />
                                    <Tooltip />
                                    <Area type="monotone" dataKey='uv' stroke='#9ba3ad' fill='rgba(23, 116, 230, 0.1)' />
                                    <Area type="monotone" dataKey='pv' stroke='#1774e6' fill='rgba(23, 116, 230, 0.1)' />
                                </AreaChart>
                            </div>
                        </Col>
                    </Row>

                </section>
            </div>
        )
    }
}

export default Funding;
