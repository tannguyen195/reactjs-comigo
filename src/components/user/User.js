import React, { Component } from 'react'
import { Card, Button, Tooltip, Row, Col } from 'antd'
import Image from '../common/Image'
import { Link } from 'routes'
const profileIcon = '/static/images/icon-profile.svg'
const mailIcon = '/static/images/icon-mail.svg'
export default class extends Component {
    renderBadge() {
        const { userBadge, giveUserNod } = this.props

        return userBadge.map((item, index) => {
            return <Col md={12} lg={12} key={index} >
                <Card onClick={() => giveUserNod(item._id)} hoverable className="badge__item ">
                    <img src={item.imageURL} alt="url" className={item.isChoose ? "hover" : "unhover"} />
                    <div className="badge__count">{item.count !== 0 && item.count}</div>
                    <div className="Process-On paddingTop2"> {item.name}</div>
                </Card>
            </Col>
        })
    }
    render() {
        const {
            peopleDetail,
            userBadge
        } = this.props

        return (
            <div className="user-detail-container ">
                <Row gutter={8}>
                    <Col lg={14}>
                        <Card bordered={false}>
                            <div className="user-header">
                                <div className="header-left">
                                    <img src={peopleDetail.pictureURL ? peopleDetail.pictureURL : profileIcon} alt="user" />
                                    <div className="header-info">
                                        <div className="user-name">{peopleDetail.firstName + ` ` + peopleDetail.lastName}</div>
                                        <div className="Input-Search-Empty">{
                                            peopleDetail.graduationYear && `${"Graduated in " + peopleDetail.graduationYear + " | "}`
                                        }{peopleDetail.email}</div>
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
                            <div className="user-majors">
                                {peopleDetail.majors && peopleDetail.majors.map((item, index) => {
                                    return <Button key={index} className="major-button">{item}</Button>
                                })}
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
                                                            <a>
                                                                <div className="project-item">
                                                                    <img alt="cover" src={item.coverURL} />
                                                                    <div className="project-name">{item.name}</div>
                                                                    <div className="project-collaborators">{
                                                                        item.shares && item.shares.map(coll => {
                                                                            return <img alt="avatar" src={coll.pictureURL ? coll.pictureURL : profileIcon} />
                                                                        })
                                                                    }</div>
                                                                </div>
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
                                <section className="paddingBottom40">
                                    <div className="paddingBottom16 title-section ">
                                        INTERESTS
                        </div>
                                    {peopleDetail.interests && peopleDetail.interests.map((item, index) => {
                                        return <Button key={index} className="skill-button">{item}</Button>
                                    })}
                                </section>

                            </div>
                        </Card>
                    </Col>
                    <Col lg={10}>
                        <section className="user__link-container">
                            <Card bordered={false}>
                                <div className="paddingBottom16 title-section ">
                                    BADGES
                        </div>
                                <div className="Input-Search-Empty"> Give them nods by clicking on these badges below.</div>
                                {
                                    userBadge && <Row gutter={16} className="badge__container">
                                        {this.renderBadge()}
                                    </Row>
                                }

                            </Card>
                        </section>
                    </Col>
                    {
                        peopleDetail.links && peopleDetail.links.length !== 0 && <Col className="marginTop8" lg={10}>
                            <section className="user__link-container">
                                <Card bordered={false}>

                                    <div className="paddingBottom16 title-section ">
                                        LINKS</div>
                                    {
                                        peopleDetail.links &&
                                        peopleDetail.links.map((item, index) => {
                                            return <a href={item.includes("http") ?
                                                item : "http://" + item} key={index} target="_blank">
                                                <Button key={index} className="link-button">{item}</Button>
                                            </a>
                                        })
                                    }

                                </Card>
                            </section>
                        </Col>
                    }

                </Row>

            </div >

        )
    }
}


