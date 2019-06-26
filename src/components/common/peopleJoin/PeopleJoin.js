import React, { Component } from 'react'
import { Card, Row, Col, Tag, Button } from 'antd'
import Image from '../../common/Image'
import { Link, Router } from 'routes'
import SkillTag from '../skillTag/SkillTag'
import moment from 'moment'
const mailIcon = '/static/images/icon-mail.svg'

export default class extends Component {

    render() {
        const { data } = this.props
   
        return (

            <Card hoverable bordered={false} className="people-card">
                <div className="people-container">
                    <div className="people-image-container">
                        <Image image={data.pictureURL} />
                    </div>
                    <div className="people-right" >
                        <div className="people-info-container">
                            <div className="Body-Dark-Grey-Left">
                                <a onClick={() => Router.pushRoute("/user/" + data._id)} className="people-name Button-Black-Left">
                                    {data.userData.firstName + ` ` + data.userData.lastName}
                                </a>
                                {` join as a collaborator for  job in `}

                                <a onClick={() => Router.pushRoute("/" + data.projectData._id)} className="Button-Black-Left"> {data.projectData.name}</a>
                            </div>


                            <div className="people-mail Caption-Grey-Left">
                                {moment.unix(data.updatedAt).fromNow()}
                            </div>

                            {
                                data.skills && data.skills.length > 0 && <SkillTag tags={data.skills} />
                            }

                            <div className="people-desc Body-Black-Left">
                                {data.bio}
                                {/* <span> view more</span> */}
                            </div>
                        </div>

                    </div>

                </div>

            </Card >

        )
    }
}


