import React, { Component } from 'react';
import { Card, Button, Tooltip, } from 'antd'
import { Link } from 'routes'
const profileIcon = '/static/images/icon-profile.svg'

const editIcon = '/static/images/icon-edit.svg'
export default class extends Component {
    renderBadge() {
        const { userBadge } = this.props

        return userBadge.map((item, index) => {

            return <div className="badge" key={index} >
                <img src={item.imageURL} alt="url" />
                <div className="badge__count">{item.count || "0"}</div>
                <div className="name paddingTop2"> {item.name}</div>

            </div>

        })
    }
    render() {

        const {
            userData,
            handleLogout,
            userBadge
        } = this.props
        return (
            <div className="profile">
                <div className="profile__left">

                    <div className="info">

                        <img src={userData.pictureURL ? userData.pictureURL : profileIcon} alt="profile" />

                        <div className="H2-Black-Center info__name">{userData.firstName + ` ` + userData.lastName}</div>
                        {userData.graduationYear && <div className="Body-Dark-Grey-Center">{userData.graduationYear > 2019 ? "Graduating in " : "Graduated in "} {userData.graduationYear}</div>}

                        <div className="Body-Black-Center info__bio">{userData.bio}</div>

                        <div className="info__buttons">
                            <Link prefetch to="/profile/edit">
                                <a>
                                    <Button className="Button-Black-Center">Edit Profile</Button>
                                </a>
                            </Link>

                            <Button type="danger" className="Button-Black-Center" onClick={handleLogout}>Sign out</Button>
                        </div>
                    </div>

                    <div className="tag">
                        <div className="tag__type H3-Black-Left">Majors</div>

                        <div className="tag__content"> {
                            userData.majors && userData.majors.map((item, index) => {
                                return <Button key={index} className="Body-Dark-Grey-Center">{item}</Button>
                            })
                        }</div>
                    </div>

                    <div className="tag">
                        <div className="tag__type H3-Black-Left">Skills</div>

                        <div className="tag__content"> {
                            userData.skills && userData.skills.map((item, index) => {
                                return <Button key={index} className="Body-Dark-Grey-Center">{item}</Button>
                            })
                        }</div>
                    </div>
                    <div className="tag">
                        <div className="tag__type H3-Black-Left">Interests</div>

                        <div className="tag__content"> {
                            userData.interests && userData.interests.map((item, index) => {
                                return <Button key={index} className="Body-Dark-Grey-Center">{item}</Button>
                            })
                        }</div>
                    </div>
                </div>


                <div className="profile__right">

                    <section className="badge">
                        <div className="H3-Black-Left">
                            My Badges
                        </div>
                        {
                            userBadge && <div className="badge__container">
                                {this.renderBadge()}
                            </div>
                        }
                    </section>

                    <section className="projects">

                        <div className="H3-Black-Left">
                            Projects
                        </div>

                        {
                            userData.projects &&
                            <div className="projects__container">
                                {
                                    userData.projects.map((item, index) => {
                                        return <div className="project" key={item._id}>
                                            <Link prefetch to={"/" + item._id} >
                                                <a>
                                                    <img alt="cover" src={item.coverURL} />
                                                    <div className="Button-Black-Left">{item.name}</div>
                                                    <div className="Caption-Grey-Left">{item.shares.length + 1} members</div>
                                                </a>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                        }

                    </section>


                    <section className="links">
                        <div className="H3-Black-Left">
                            My Links</div>

                        {
                            userData.links &&
                            <div className="links__container">
                                {
                                    userData.links.map((item, index) => {
                                        return <Button className="link" onClick={() => window.open(item.includes("http") ?
                                            item : "http://" + item)} key={index} className="link-button">{item}</Button>
                                    })
                                }
                            </div>
                        }
                    </section>






                </div>
            </div>
        )
    }
}


