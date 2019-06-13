import React, { Component } from 'react'
import { Card, Button, Badge } from 'antd'
import Image from '../common/Image'
import { Link } from 'routes'
const profileIcon = '/static/images/icon-profile.svg'
const mailIcon = '/static/images/icon-mail.svg'
export default class extends Component {

    renderBadge() {
        const { userBadge, giveUserNod } = this.props

        return userBadge.map((item, index) => {

            return <div className="badge" key={index} onClick={() => giveUserNod(item._id)}>
                <Badge count={item.count}>
                    <img src={item.imageURL} alt="url" className={item.isChoose ? "hover" : "unhover"} />
             
                    <div className="name paddingTop2"> {item.name}</div>
                </Badge>
            </div>

        })
    }
    render() {
        const {
            peopleDetail,
            userBadge
        } = this.props

        return (

            <div className="profile">
                <div className="profile__left">

                    <div className="info">

                        <img src={peopleDetail.pictureURL ? peopleDetail.pictureURL : profileIcon} alt="profile" />

                        <div className="H2-Black-Center info__name">{peopleDetail.firstName + ` ` + peopleDetail.lastName}</div>
                        {peopleDetail.graduationYear && <div className="Body-Dark-Grey-Center">{peopleDetail.graduationYear > 2019 ? "Graduating in " : "Graduated in "} {peopleDetail.graduationYear}</div>}

                        <div className="Body-Black-Center info__bio">{peopleDetail.bio}</div>


                    </div>

                    <div className="tag">
                        <div className="tag__type H3-Black-Left">Majors</div>

                        <div className="tag__content"> {
                            peopleDetail.majors && peopleDetail.majors.map((item, index) => {
                                return <Button key={index} className="Body-Dark-Grey-Center">{item}</Button>
                            })
                        }</div>
                    </div>

                    <div className="tag">
                        <div className="tag__type H3-Black-Left">Skills</div>

                        <div className="tag__content"> {
                            peopleDetail.skills && peopleDetail.skills.map((item, index) => {
                                return <Button key={index} className="Body-Dark-Grey-Center">{item}</Button>
                            })
                        }</div>
                    </div>
                    <div className="tag">
                        <div className="tag__type H3-Black-Left">Interests</div>

                        <div className="tag__content"> {
                            peopleDetail.interests && peopleDetail.interests.map((item, index) => {
                                return <Button key={index} className="Body-Dark-Grey-Center">{item}</Button>
                            })
                        }</div>
                    </div>
                </div>


                <div className="profile__right">

                    <section className="badge">
                        <div className="H3-Black-Left">
                            Badges
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
                            peopleDetail.projects &&
                            <div className="projects__container">
                                {
                                    peopleDetail.projects.map((item, index) => {
                                        return <div className="project" key={item._id}>
                                            <Link prefetch to={"/" + item._id} >
                                                <a>
                                                    <img alt="cover" src={item.coverURL} />
                                                    <div className="Button-Black-Left title">{item.name}</div>
                                                    <div className="Caption-Grey-Left">{item.shares && item.shares.length + 1} members</div>
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
                            Links</div>

                        {
                            peopleDetail.links &&
                            <div className="links__container">
                                {
                                    peopleDetail.links.map((item, index) => {
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


