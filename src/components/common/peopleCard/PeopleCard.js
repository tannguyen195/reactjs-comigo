import React, { Component } from 'react'
import { Card, Row, Col, Tag, Button } from 'antd'
import Image from '../../common/Image'
import { Link, Router } from 'routes'
import SkillTag from '../skillTag/SkillTag'
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

                            <a onClick={() => Router.pushRoute("/user/" + data._id)} className="people-name H3-Black-Left">
                                {data.firstName + ` ` + data.lastName}
                            </a>

                            <div className="people-mail Caption-Grey-Left">
                                {data.email}
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


