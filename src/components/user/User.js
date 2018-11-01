import React, { Component } from 'react'
import { Card, Button, Tooltip, Row, Col } from 'antd'
import Image from '../common/Image'
import { Link } from 'routes'
const profileIcon = '/static/images/icon-profile.svg'
const mailIcon = '/static/images/icon-mail.svg'
export default class extends Component {

    render() {
        const {
            peopleDetail
        } = this.props

        return (
            <div className="user-detail-container">
                <Card bordered={false}>
                    <div className="user-header">
                        <div className="header-left">
                            <img src={peopleDetail.pictureURL ? peopleDetail.pictureURL : profileIcon} alt="user" />

                            <div className="header-info">
                                <div className="user-name">{peopleDetail.firstName + ` ` + peopleDetail.lastName}</div>
                                <div className="user-email">{peopleDetail.email}</div>

                            </div>
                        </div>



                        <div className="header-right">
                            <Tooltip title="Send Email">
                                <img onClick={() => {
                                        window.location = `mailto:${peopleDetail.email}`;
                                    }} alt="edit" src={mailIcon} />
                            </Tooltip>
                        </div>



                    </div>
                    <div className="user-body">
                        <section className="paddingBottom40">
                            <div className="paddingBottom16 title-section ">
                                PROJECTS
                        </div>
                            {
                                peopleDetail.projects &&
                                <Row gutter={16} className="user-project">
                                    {
                                        peopleDetail.projects.map((item, index) => {
                                            return <Col lg={8} md={8} key={item._id}>
                                                <Link prefetch to={"/" + item._id} >
                                                    <a key={index} className="project-item">
                                                        <img alt="cover" src={item.coverURL} />
                                                        <div className="project-name">{item.name}</div>
                                                    </a>
                                                </Link>
                                            </Col>
                                        })
                                    }
                                </Row>
                            }

                        </section>

                        <section className="paddingBottom40">
                            <div className="paddingBottom16 title-section ">
                                BIO
                        </div>
                            <div className="project-name">
                                {peopleDetail.bio}
                            </div>
                        </section>

                        <section className="paddingBottom40">
                            <div className="paddingBottom16 title-section ">
                                SKILLS
                        </div>
                            {
                                !peopleDetail.skills ? <Link prefetch to="/user/edit">
                                    <a>
                                        <Button
                                            icon="plus"
                                            className="skill-button">
                                            Add Skill
                                            </Button>
                                    </a>
                                </Link>
                                    :
                                    peopleDetail.skills.map((item, index) => {
                                        return <Button key={index} className="skill-button">{item}</Button>
                                    })
                            }
                        </section>

                        <section>
                            <div className="paddingBottom16 title-section ">
                                LINKS
                        </div>
                            {
                                !peopleDetail.links ? <Link prefetch to="/user/edit">
                                    <a>
                                        <Button className="link-button" icon="plus" >Add Link</Button>
                                    </a>
                                </Link>
                                    :
                                    peopleDetail.links.map((item, index) => {
                                        return <Button key={index} className="link-button">{item}</Button>
                                    })
                            }
                        </section>
                    </div>
                </Card>
            </div>

        )
    }
}


