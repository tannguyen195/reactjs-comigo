import React, { Component } from 'react';
import { Card, Button, Row, Col, Tooltip } from 'antd'
import { Link } from 'routes'
const profileIcon = '/static/images/icon-profile.svg'

const editIcon = '/static/images/icon-edit.svg'
export default class extends Component {
    renderBadge() {
        const { userBadge } = this.props

        return userBadge.map((item, index) => {

            return <Col md={12} lg={12} key={index} >
                <Card className="badge__item ">
                    <img src={item.imageURL} alt="url" />
                    <div className="badge__count">{item.count || "0"}</div>
                    <div className="Process-On paddingTop2"> {item.name}</div>
                </Card>
            </Col>

        })
    }
    render() {

        const {
            userData,
            handleLogout,
            userBadge
        } = this.props
        return (
            <div className="profile-container">
                <Row gutter={8}>
                    <Col lg={14}>
                        <Card bordered={false}>
                            <div className="profile-header">
                                <div className="header-left">
                                    <img src={userData.pictureURL ? userData.pictureURL : profileIcon} alt="profile" />

                                    <div className="header-info">
                                        <div className="user-name">{userData.firstName + ` ` + userData.lastName}</div>
                                        {
                                            userData.graduationYear && <div className="user-email">{userData.graduationYear > 2019 ? "Graduating in " : "Graduated in "} {userData.graduationYear + " | "}{userData.email}</div>
                                        }

                                        <a onClick={handleLogout} className="sign-out-button">Sign Out</a>
                                    </div>
                                </div>

                                <Link prefetch to="/profile/edit">

                                    <a className="header-right">
                                        <Tooltip title="Edit Profile">
                                            <img alt="edit" src={editIcon} />
                                        </Tooltip>
                                    </a>

                                </Link>

                            </div>
                            <div className="user-majors">
                                {userData.majors && userData.majors.map((item, index) => {
                                    return <Button key={index} className="major-button">{item}</Button>
                                })}
                            </div>
                            <div className="profile-body">
                                <section className="paddingBottom40">
                                    <div className="paddingBottom16 title-section ">
                                        PROJECTS
                        </div>
                                    {
                                        userData.projects &&
                                        <Row className="user-project">
                                            {
                                                userData.projects.map((item, index) => {
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
                                        {userData.bio}
                                    </div>
                                </section>

                                <section className="paddingBottom40">
                                    <div className="paddingBottom16 title-section ">
                                        SKILLS
                        </div>
                                    {
                                        !userData.skills ? <Link prefetch to="/profile/edit">
                                            <a>
                                                <Button
                                                    icon="plus"
                                                    className="skill-button">
                                                    Add Skill
                                            </Button>
                                            </a>
                                        </Link>
                                            :
                                            userData.skills.map((item, index) => {
                                                return <Button key={index} className="skill-button">{item}</Button>
                                            })
                                    }
                                </section>

                                <section >
                                    <div className="paddingBottom16 title-section ">
                                        INTERESTS
                        </div>
                                    {
                                        userData.interests && userData.interests.map((item, index) => {
                                            return <Button key={index} className="interest-button">{item}</Button>
                                        })

                                    }
                                </section>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={10} className="profile-right marginBottom8">
                        <Card bordered={false}>
                            <section>
                                <div className="paddingBottom16 title-section ">
                                    MY BADGES
                        </div>
                                {
                                    userBadge && <Row gutter={16} className="badge__container">
                                        {this.renderBadge()}
                                    </Row>
                                }
                            </section>
                        </Card>
                    </Col>
                    <Col lg={10} className="profile-right">
                        <Card bordered={false}>
                            <section>
                                <div className="paddingBottom16 title-section ">
                                    MY LINKS
                        </div>
                                {
                                    !userData.links ? <Link prefetch to="/profile/edit">
                                        <a>
                                            <Button className="link-button" icon="plus" >Add Link</Button>
                                        </a>
                                    </Link>
                                        :
                                        userData.links.map((item, index) => {
                                            return <Button onClick={() => window.open(item.includes("http") ?
                                                item : "http://" + item)} key={index} className="link-button">{item}</Button>
                                        })
                                }
                            </section>
                        </Card>
                    </Col>

                </Row>

            </div>
        )
    }
}


