import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'antd'
import { Link } from 'routes'
const profileIcon = '/static/images/icon-profile.svg'

const editIcon = '/static/images/icon-edit.svg'
export default class extends Component {

    render() {

        const {
            userData,
            handleLogout,


        } = this.props

        return (
            <div className="profile-container">
                <Card bordered={false}>
                    <div className="profile-header">
                        <div className="header-left">
                            <img src={userData.pictureURL ? userData.pictureURL : profileIcon} alt="profile" />

                            <div className="header-info">
                                <div className="user-name">{userData.firstName + ` ` + userData.lastName}</div>
                                <div className="user-email">{userData.email}</div>
                                <a onClick={handleLogout} className="sign-out-button">Sign Out</a>
                            </div>
                        </div>
                        <Link to="/profile/edit">
                            <a className="header-right">
                                <img alt="edit" src={editIcon} />
                            </a>
                        </Link>
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
                                            return <Col lg={8} md={8}>
                                                <Link to={"/" + item._id} key={item._id}>
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
                                !userData.skills ? <Link to="/profile/edit">
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

                        <section>
                            <div className="paddingBottom16 title-section ">
                                LINKS
                        </div>
                            {
                                !userData.links ? <Link to="/profile/edit">
                                    <a>
                                        <Button className="link-button" icon="plus" >Add Link</Button>
                                    </a>
                                </Link>
                                    :
                                    userData.links.map((item, index) => {
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


