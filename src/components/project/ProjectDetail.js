import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'antd'
import Image from '../common/Image'
import ImageProject from '../common/ImageProject'
import { Link, Router } from 'routes'
const collaborators = [
    {
        name: "Babila Ebwélé",
        role: "Graphic Designer",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Homura Yunosuke",
        role: "UI Designer",
        image: "https://randomuser.me/api/portraits/men/34.jpg"
    }
    ,
    {
        name: "Daisy Murphy",
        role: "Sale Manager",
        image: "https://randomuser.me/api/portraits/men/31.jpg"
    }
    ,
    {
        name: "Yahiro Ayuko",
        role: "UX Designer",
        image: "https://randomuser.me/api/portraits/men/30.jpg"
    }
    ,
    {
        name: "Isak Johannesson",
        role: "Front-end Developer",
        image: "https://randomuser.me/api/portraits/men/29.jpg"
    }
    ,
    {
        name: "Jube Bowman",
        role: "Back-end Developer",
        image: "https://randomuser.me/api/portraits/men/25.jpg"
    }
]

const mailIcon = '/static/images/icon-mail.svg'
const editIcon = '/static/images/icon-edit.svg'

const imageMedia = [
    'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/07/Seascape-07.jpg?resize=1500%2C966&ssl=1'
    ,
    'https://www.w3schools.com/w3images/fjords.jpg'
    ,
    'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg'


]
export default class extends Component {

    render() {
        const {
            detail,
            edit,
            togglePreviewImage
        } = this.props
        return (
            <div className="project-detail-container">
                <Row gutter={8}>
                    <Col lg={14}>
                        <Card bordered={false}>
                            <div className="project-detail-header">
                                <div className="header-title">
                                    <div className="Text-Style paddingBottom16">{detail.name}</div>
                                    {
                                        edit ?
                                            <Link prefetch to={`/${detail._id}/edit`} params={{ detail: detail }}>
                                                <a className="header-right">
                                                    <img alt="edit" src={editIcon} />
                                                </a>
                                            </Link> :

                                            <a href={`mailto:${detail.owner.email}`} className="header-right">
                                                <img alt="mail" src={mailIcon} />
                                            </a>
                                    }

                                </div>
                                <div onClick={() => Router.push('/user/' + detail.owner._id)}
                                    className="header-left">
                                    <Image image={detail.owner.pictureURL} />
                                    <div className="header-info">
                                        <div className=" Title-12-Left">{detail.owner.firstName + ` ` + detail.owner.lastName}</div>
                                        <div className="Sub-Title-10-Left">{detail.owner.email}</div>
                                    </div>
                                </div>

                            </div>
                            <div className="project-body">
                                <section className="paddingBottom40 project-cover">
                                    <ImageProject image={detail.coverURL} />

                                </section>

                                <section className="paddingBottom40">
                                    <div className="paddingBottom16 title-section ">
                                        DESCRIPTION      </div>
                                    <div className=" Body-12">
                                        {detail.description}
                                    </div>
                                </section>

                                <section className="paddingBottom40">
                                    <div className="paddingBottom16 title-section ">
                                        PROJECT SKILLS  </div>
                                    {
                                        !detail.projectSkills ? <Link prefetch to="/edit">
                                            <a>
                                                <Button
                                                    icon="plus"
                                                    className="skill-button">
                                                    Add Skill
                            </Button>
                                            </a>
                                        </Link>
                                            :
                                            detail.projectSkills.map((item, index) => {
                                                return <Button key={index} className="skill-button">{item}</Button>
                                            })
                                    }
                                </section>

                                <section >
                                    <div className="paddingBottom16 title-section ">
                                        LOOKING FOR SKILLS  </div>
                                    {
                                        !detail.lookingSkills ? <Link prefetch to="/project/edit">
                                            <a>
                                                <Button
                                                    icon="plus"
                                                    className="skill-button">
                                                    Add Skill
                            </Button>
                                            </a>
                                        </Link>
                                            :
                                            detail.lookingSkills.map((item, index) => {
                                                return <Button key={index} className="looking-skill-button">{item}</Button>
                                            })
                                    }
                                </section>
                            </div>
                        </Card>
                        <div className="sub-card-container marginTop8">
                            <Card bordered={false}>
                                <div className="sub-tab-header">
                                    <div className="Text-Style-3">COLLABORATORS</div>
                                    {
                                        edit &&
                                        <Link prefetch to={`/${detail._id}/edit`} >
                                            <a className="header-right">
                                                <img alt="edit" src={editIcon} />
                                            </a>
                                        </Link>
                                    }

                                </div>

                                <div className="sub-tab-collaborator marginTop24">
                                    {
                                        detail.shares.map((item, index) => {
                                            return <div
                                                key={index}
                                                onClick={() => Router.push('/user/' + item._id)}
                                                className="header-left marginBottom16">
                                                <Image image={item.pictureURL} />
                                                <div className="header-info">
                                                    <div className=" Title-12-Left">   {item.firstName + ` ` + item.lastName}</div>
                                                    <div className="Sub-Title-10-Left">{item.role}</div>
                                                </div>
                                            </div>
                                        })
                                    }

                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={10}>
                        <div className="sub-card-container">
                            <Card bordered={false}>
                                <div className="sub-tab-header">
                                    <div className="Text-Style-3">MEDIA</div>
                                    {
                                        edit &&
                                        <Link prefetch to={`/${detail._id}/edit`} params={{ detail: detail }}>
                                            <a className="header-right">
                                                <img alt="edit" src={editIcon} />
                                            </a>
                                        </Link>

                                    }

                                </div>
                                <div className="sub-tab-body">
                                    {
                                        detail.media && detail.media.map((item, index) => {
                                            return <img key={index} src={item} onClick={() => togglePreviewImage(item)} />
                                        })
                                    }
                                </div>
                            </Card>
                        </div>

                    </Col>
                    <Col className="marginTop8" lg={10}>
                        <div className="sub-card-container">
                            <Card bordered={false}>
                                <div className="sub-tab-header">
                                    <div className="Text-Style-3">LINKS</div>
                                    {
                                        edit &&
                                        <Link prefetch to={`/${detail._id}/edit`} params={{ detail: detail }}>
                                            <a className="header-right">
                                                <img alt="edit" src={editIcon} />
                                            </a>
                                        </Link>

                                    }
                                </div>

                                {
                                    detail.links.length === 0 &&
                                    detail.links.map((item, index) => {
                                        return <Button onClick={() => {
                                            window.open(item.includes("http") ?
                                                item : "http://" + item)
                                        }} key={index} className="link-button">{item}</Button>
                                    })
                                }
                            </Card>
                        </div>

                    </Col>
                </Row>

            </div>
        )
    }
}


