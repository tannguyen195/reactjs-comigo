import React, { Component } from 'react'
import { Card, Row, Col, Tag } from 'antd'
import Image from '../../common/Image'
import { Link } from 'routes'
import UpdateCardContainer from '../../common/updateCard/UpdateCardContainer'
const mailIcon = '/static/images/icon-mail.svg'

export default class extends Component {

    render() {
        const { data, edit } = this.props

        return (
            <div>
                <Card hoverable bordered={false} className="post-card-container">
                    <Row>
                        <Col>
                            <div className="post-card-upper">
                                <div className="cover-container">
                                    <img src={data.coverURL} alt="cover" />
                                </div>

                                <div className="post-info-container">
                                    <div className="post-title">
                                        <div>{data.name}</div>

                                        <img onClick={() => {
                                            window.location = `mailto:${data.owner.email}`;
                                        }} src={mailIcon} alt="mail" />
                                    </div>
                                    <div className="post-author">
                                        <Image image={data.owner.pictureURL} />
                                        <div className="author-detail">
                                            <div className="author-name">
                                                {data.owner.firstName + ` ` + data.owner.lastName}
                                            </div>
                                            <div className="author-email">
                                                {data.owner.email}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-desc">
                                        {data.description}
                                        {/* <span> view more</span> */}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Row >
                                <Col className="post-card-footer">
                                    <div className="tag-container">
                                        <div className="tag-title">PROJECT SKILLS</div>
                                        <div>
                                            {
                                                data.projectSkills.map((item, index) => {
                                                    return <Tag key={index}>{item}</Tag>
                                                })
                                            }

                                            {/*                                         
                                        <Tag className="tag-plus">+5</Tag> */}
                                        </div>

                                    </div>
                                    <div className="tag-container">
                                        <div className="tag-title">LOOKING FOR SKILLS</div>
                                        <div>
                                            {
                                                data.lookingSkills.map((item, index) => {
                                                    return <Tag className="tag-skill" key={index}>{item}</Tag>
                                                })
                                            }

                                            {/*                                         
                                        <Tag className="tag-plus">+5</Tag> */}
                                        </div>
                                    </div>
                                </Col>

                                <Col></Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>

                {
                    data.latestUpdate &&
                    <UpdateCardContainer
                        isNewFeed={true}
                        detail={data}
                        edit={edit}
                        data={{
                            ...data.latestUpdate,
                            comments: [data.latestUpdate.comment]
                        }} />
                }

            </div>
        )
    }
}


