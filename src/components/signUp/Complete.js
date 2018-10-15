import React, { Component } from 'react';
import { Card, Row, Col } from 'antd'


const option = [
    {
        icon: "/static/images/icon-project.svg",
        name: "Create New Project"
    }, {
        icon: "/static/images/icon-newsfeed.svg",
        name: "Explore Your Campus"
    }

]
export default class extends Component {
    render() {
        const { nextStep } = this.props
        return (
            <div className="complete-container">
                <Card bordered={false} >
                    <div className=" Headline-2CenterBlack-Style">Welcome Peter,</div>
                    <div className="complete-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque.</div>
                    <Row gutter={30} className="complete-options">
                        {
                            option.map((item, index) => {
                                return <Col key={index} md={12} lg={12} >
                                    <div className="option-item">
                                        <div className="item-image">
                                            <img src={item.icon} alt="option" />
                                        </div>
                                        <div className="item-text">{item.name}</div>
                                    </div>
                                </Col>
                            })
                        }

                    </Row>
                </Card>
            </div>
        )
    }
}


