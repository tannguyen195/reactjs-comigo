import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

import { Link } from 'routes'
import {  AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'
const mainImage = 'static/images/image-main.png'
const data = [
    { name: 'Today', uv: 0, pv: 0 },
    { name: '30 years', uv: 10000, pv: 20000 },
    { name: '50 years', uv: 30000, pv: 60000 },
];
const protects = [
    {
        image: mainImage,
        content: `Our team has a fiduciary
        responsibility to only act in the best 
        interest of its clients`,

    },
    {
        image: mainImage,
        content: `There are no hidden fees or shady ways 
        of making money, which means no 
        conflicts of interest`,

    },
    {
        image: mainImage,
        content: `Full transparency gives clients a window into our office, so that they always stay 
        informed`,

    }
]
class Home extends Component {
    renderProtectItem(protects) {
        return protects.map((item, index) => {
            return <Col key={index} md={8} lg={8} className="item-option">
                <div className="item-image">
                    <img alt="holder" src={item.image} />
                </div>
                <div className="item-desc Body2RegularDarkGreyLeft">
                    {item.content}
                </div>
            </Col>
        })
    }

    render() {

        return (
            <div className="main-wrapper home-container">
                <div className="home-header">

                    <div className="header-left">
                        <h1 className="H1BlackLeft">
                            {`A Safer way
to Invest`}
                        </h1>
                        <div className="header-desc LeadRegularGreyLeft">
                            {`My Nest Egg accounts are managed by real
                                 people with a fiduciary responsibility to act in your 
                                 best interest.`}
                        </div>
                        <div className="invest-button">
                            <Button className="ButtonNormalWhiteCenter" type="primary" >
                                START INVESTING
                            </Button>
                        </div>

                    </div>
                    <div className="header-right">
                        <img alt="main" src={mainImage} />
                    </div>

                </div>
                <div className="home-body">
                    <div className="home-section-1-container ">
                        <section className="home-section-1">
                            <Row>
                                <Col lg={10} md={10} className="section-image">
                                    <img alt="holder" src={mainImage} />
                                </Col>
                                <Col lg={14} md={14}>
                                    <h3 className="H4BlackLeft title">
                                        {`Premium wealth management
                                for everyone`}
                                    </h3>
                                    <div className="Body2RegularDarkGreyLeft desc">
                                        {`Previously only available to the wealthy, we offer the service to those with a 
                                substantial amount saved, but just not enough to qualify for private wealth 
                                management.`}
                                    </div>
                                </Col>
                            </Row>
                        </section>

                        <section className="home-section-1">
                            <Row>
                                <Col lg={14} md={14}>
                                    <h3 className="H4BlackLeft title">
                                        {`Augmented Advisor`}
                                    </h3>
                                    <div className="Body2RegularDarkGreyLeft desc ">
                                        {`To keep you informed, our team publishes its reasoning for
                                 each investment decision, its broad market outlook, and much 
                                 more`}
                                    </div>
                                    <div className="learn-button">
                                        <Button>
                                            <a>
                                                LEARN MORE
                                        </a>

                                        </Button>
                                    </div>
                                </Col>
                                <Col lg={10} md={10} className="section-image">
                                    <img alt="holder" src={mainImage} />

                                </Col>
                            </Row>
                        </section>
                    </div>
                    <div className="home-section-2-container ">
                        <h3 className='section-title H4BlackLeft'>Plan ahead</h3>
                        <div className="section-desc Body2RegularDarkGreyCenter">{`Our future screen helps you understand what you need to invest 
                        now to have that plush retirement we are all working towards. `}</div>
                        <div className="chart-container">
                            <AreaChart width={880} height={344} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

                                <XAxis dataKey="name" />
                                <YAxis stroke="transparent" />
                                <Tooltip />
                                <Area type="monotone" dataKey='uv' stroke='#9ba3ad' fill='rgba(23, 116, 230, 0.1)' />
                                <Area type="monotone" dataKey='pv' stroke='#1774e6' fill='rgba(23, 116, 230, 0.1)' />
                            </AreaChart>
                        </div>
                    </div>

                    <div className="home-section-2-container ">
                        <h3 className='section-title H4BlackLeft'>We protect and grow your money</h3>
                        <Row gutter={40} className="items-column">
                            {
                                this.renderProtectItem(protects)
                            }
                        </Row>

                        <div className="invest-button">
                            <Button type="primary" >
                                START INVESTING
                            </Button>
                        </div>
                    </div>
                </div>


            </div>
        )


    }
}

export default Home
