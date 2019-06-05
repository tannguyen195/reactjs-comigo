import React, { Component } from 'react'
import { Card, Row, Col, Tag, Button } from 'antd'
import Image from '../Image'
import moment from 'moment'
import _jobPost from './_jobPost.less'


export default class extends Component {

    render() {
        const { detail, jobDetail, user } = this.props

        return (
            <Card hoverable bordered={false} className="job-post">
                <style dangerouslySetInnerHTML={{
                    __html: _jobPost
                }} />
                <div className="job-header">
                    <Image image={user.pictureURL} />
                    <div className="job__title">
                        <div className="Body-Dark-Grey-Left">
                            <span className="Button-Black-Left">
                                {user.firstName + ` ` + user.lastName + ` `}
                            </span>
                            {`created a ${moment.unix(jobDetail.updatedAt).isSame(moment(), 'hour') ? "new" : ""} job.`}
                            </div>
                        <div className="Caption-Grey-Left">{moment.unix(jobDetail.updatedAt).fromNow()}</div>
                    </div>
                </div>

                <div className="job-body">
                    <div className="H2-Black-Left">{jobDetail.title}</div>

                    <div className="job-info">
                        <div className="Body-Black-Left">{`${detail.name} | `}
                        </div>
                        <div className="job-tag">
                            {
                                jobDetail.tags.map((item, index) => {
                                    return <div key={index} className="tag-item Body-Dark-Grey-Center">{item}</div>
                                })
                            }
                        </div>


                    </div>

                    <div className="Body-Black-Left desc paddingTop16">{`${jobDetail.description}`}
                    </div>
                </div>
            </Card >
        )
    }
}


