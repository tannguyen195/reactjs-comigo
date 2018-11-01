import React, { Component } from 'react'
import { Card, Row, Col, Tag, Button } from 'antd'
import Image from '../../common/Image'
import { Link } from 'routes'
const mailIcon = '/static/images/icon-mail.svg'

export default class extends Component {

    render() {
        const { data } = this.props
        return (
            <Link to={"/user/" + data.id}>
                <Card hoverable bordered={false} className="people-card-container">
                    <div className="people-container">
                        <div className="people-image-container">
                            <Image imageURL={data.pictureURL} />
                        </div>
                        <div className="people-right" >
                            <div className="people-info-container">

                                <div className="people-name Text-Style">
                                    {data.firstName + ` ` + data.lastName}
                                </div>

                                <div className="people-mail Title-12-Left">
                                    {data.email}
                                </div>

                                <div className="people-desc Body-12">
                                    {data.bio}
                                    {/* <span> view more</span> */}
                                </div>
                                <div className="tag-container">
                                    <div>
                                        {
                                            data.skills.map((item, index) => {
                                                if (index < 3)
                                                    return <Tag key={index}>{item}</Tag>
                                            })
                                        }
                                        {
                                            data.skills.length > 3 && <Button className="plus-button">+{data.skills.length - 3}</Button>
                                        }
                                        {/*                                         
                                        <Tag className="tag-plus">+5</Tag> */}
                                    </div>
                                </div>
                            </div>
                            <a href={`mailto:${data.email}`} className="people-invite">
                                <img src={mailIcon} alt="mail" />
                            </a>
                        </div>

                    </div>

                </Card >
            </Link>
        )
    }
}


