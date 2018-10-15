import React, { Component } from 'react'
import { Card, Row, Col, Tag } from 'antd'
const mailIcon = '/static/images/icon-mail.svg'
export default class extends Component {

    render() {

        return (
            <Card bordered={false} className="post-card-container">
                <Row>
                    <Col>
                        <div className="post-card-upper">
                            <div className="cover-container">
                                <img src="https://pilbox.themuse.com/image.jpg?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fattachments%2F24087.jpg%3Fv%3D34479919557aa0a653a5cee75ab3426df6866f1b395d6e87562cf27332b682b4&h=367&prog=1" alt="cover" />
                            </div>

                            <div className="post-info-container">
                                <div className="post-title">
                                    <div>Gotavation Mobile</div>

                                    <img src={mailIcon} alt="mail" />
                                </div>

                                <div className="post-author">
                                    <img src="data:image/jpeg;base64,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" alt="profile" />
                                    <div className="author-detail">
                                        <div className="author-name">
                                            Henry Spencer
                                            </div>
                                        <div className="author-email">
                                            henry.spencer@uiowa.edu
                                            </div>
                                    </div>
                                </div>
                                <div className="post-desc">
                                    Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin rutrum, neque sem pretium metus, quis mollis nisl..
                                        <span> view more</span></div>
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <Row >
                            <Col className="post-card-footer">

                                <div className="tag-container">
                                    <div className="tag-title">PROJECT SKILLS</div>
                                    <div>
                                        <Tag >Product Design</Tag>
                                        <Tag >Mobile App</Tag>
                                        <Tag >Software Development</Tag>
                                        <Tag className="tag-plus">+5</Tag>
                                    </div>

                                </div>
                                <div className="tag-container">
                                    <div className="tag-title">LOOKING FOR SKILLS</div>
                                    <div>
                                        <Tag className="tag-skill" color="#ffdf49">Graphic Design</Tag>
                                        <Tag className="tag-skill" color="#ffdf49">Software Engineer</Tag>
                                        <Tag className="tag-skill" color="#ffdf49">Sale Manager</Tag>
                                        <Tag className="tag-plus">+5</Tag>
                                    </div>
                                </div>
                            </Col>

                            <Col></Col>
                        </Row>
                    </Col>
                </Row>



            </Card>

        )
    }
}


