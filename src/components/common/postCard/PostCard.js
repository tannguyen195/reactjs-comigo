import React, { Component } from 'react'
import { Card, Row, Col, Tag } from 'antd'
import { Router } from 'routes'
import Image from '../../common/Image'
import moment from 'moment'
import UpdateCardContainer from '../../common/updateCard/UpdateCardContainer'
import JobPost from '../../common/jobPost/JobPost'

export default class extends Component {

    render() {
        const { data, edit, filterValue, toggleJobDetail, handleSearchSkill } = this.props

        return (
            <div>
                {
                   <Card hoverable bordered={false} className="post-card-container">
                        <div className="post-card__header">
                            <div className="header__left">
                                <Image image={data.owner.pictureURL} />
                                <div className="title">
                                    <div className="Body-Dark-Grey-Left">
                                        <a onClick={() => Router.pushRoute("/user/" + data.owner._id)} className="Button-Black-Left">
                                            {data.owner.firstName + ` ` + data.owner.lastName + ` `}
                                        </a>

                                        {`created a ${moment.unix(data.createdAt).isSame(moment(), 'day') ? "new" : ""} project.`}
                                    </div>
                                    <div className="Caption-Grey-Left">{moment.unix(data.createdAt).fromNow()}</div>
                                    {/* <div className="Sub-Title-10-Left">2 months ago</div> */}
                                </div>
                            </div>
                        </div>
                        <div onClick={() => Router.pushRoute("/" + data._id)} className="post-card-upper">
                            <div className="cover-container">
                                <Image image={data.coverURL} alt="cover" />
                            </div>

                            <div className="post-info-container">
                                <div className="post-title H2-Black-Left">
                                    <div>{data.name}</div>
                                </div>
                                <div className="post-author">
                                    <div className="left">
                                        <div>
                                            <Image width={20} height={20} image={data.owner.pictureURL} alt="thumbnail" />
                                        </div>
                                    </div>
                                    <div className="right">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                }

                {
                    data.latestUpdate && filterValue !== "project" &&
                    <UpdateCardContainer
                        isNewFeed={true}
                        detail={data}
                        edit={edit}
                        data={{
                            ...data.latestUpdate,
                            comments: [data.latestUpdate.comment]
                        }} />
                }

                {
                    data.latestJobPost && filterValue !== "project" &&
                    <JobPost
                        handleSearchSkill={handleSearchSkill}
                        toggleJobDetail={toggleJobDetail}
                        isNewFeed={true}
                        edit={edit}
                        detail={data}
                        user={data.owner} jobDetail={data.latestJobPost}
                    />
                }
            </div>
        )
    }
}


