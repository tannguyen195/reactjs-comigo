import React, { Component } from 'react'
import { Card, Row, Col, Tag } from 'antd'
import Image from '../../common/Image'
import { Link } from 'routes'
import moment from 'moment'
import UpdateCardContainer from '../../common/updateCard/UpdateCardContainer'
const mailIcon = '/static/images/icon-mail.svg'

export default class extends Component {

    render() {
        const { data, edit } = this.props
        return (
            <div>
                <Card hoverable bordered={false} className="post-card-container">
                    <div className="post-card__header">
                        <div className="header__left">
                            <Image image={data.owner.pictureURL} />
                            <div className="title">
                                <div className="Activity">
                                    <span className="Title-S">
                                        {data.owner.firstName + ` ` + data.owner.lastName + ` `}
                                    </span>

                                    created a new project.
                            </div>
                                <div className="Sub-Title-L">{moment.unix(data.updatedAt).fromNow()}</div>
                                {/* <div className="Sub-Title-10-Left">2 months ago</div> */}
                            </div>
                        </div>
                    </div>
                    <div className="post-card-upper">
                        <div className="cover-container">
                            <Image image={data.coverURL} alt="cover" />
                        </div>

                        <div className="post-info-container">
                            <div className="post-title">
                                <div>{data.name}</div>
                            </div>
                            <div className="post-author">
                                <div className="left">
                                    <div className="Sub-Title-M">Team members</div>
                                    <div>
                                        <Image width={20} height={20} image={data.owner.pictureURL} alt="thumbnail" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="Sub-Title-M"> Project type & status</div>
                                    <div className="status">
                                        <div className="Tag">
                                            idea
                                    </div>
                                        <div className="Tag active">
                                            Active
                                    </div>
                                    </div>

                                </div>
                            </div>
                            <div className="post-desc">
                                {data.description}
                                {/* <span> view more</span> */}
                            </div>
                        </div>
                    </div>
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


