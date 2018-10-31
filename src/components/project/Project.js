import React, { Component } from 'react'
import { Card, Button } from 'antd'
import Image from '../common/Image'
import ImageProject from '../common/ImageProject'
import { Link } from 'routes'

const mailIcon = '/static/images/icon-mail.svg'
const editIcon = '/static/images/icon-edit.svg'
export default class extends Component {

    render() {
        const {
            detail,
            edit
        } = this.props
        return (
            <div className="project-detail-container">
                <Card bordered={false}>
                    <div className="project-detail-header">
                        <div className="header-title">
                            <div className="Text-Style paddingBottom16">{detail.name}</div>
                            {
                                edit ? <Link prefetch to={`/${detail._id}/edit`} params={{ detail: detail }}>
                                    <a className="header-right">
                                        <img alt="edit" src={editIcon} />
                                    </a>
                                </Link> :
                                    <Link prefetch to="/project/edit">
                                        <a className="header-right">
                                            <img alt="mail" src={mailIcon} />
                                        </a>
                                    </Link>
                            }

                        </div>
                        <div className="header-left">
                            <Image imageURL={detail.owner.pictureURL} />
                            <div className="header-info">
                                <div className=" Title-12-Left">{detail.owner.firstName + ` ` + detail.owner.lastName}</div>
                                <div className="Sub-Title-10-Left">{detail.owner.email}</div>
                            </div>
                        </div>

                    </div>
                    <div className="project-body">
                        <section className="paddingBottom40 project-cover">
                            <ImageProject imageURL={detail.coverURL} />

                        </section>

                        <section className="paddingBottom40">
                            <div className="paddingBottom16 title-section ">
                                DESCRIPTION
                        </div>
                            <div className=" Body-12">
                                {detail.description}
                            </div>
                        </section>

                        <section className="paddingBottom40">
                            <div className="paddingBottom16 title-section ">
                                PROJECT SKILLS
                        </div>
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

                        <section className="paddingBottom40">
                            <div className="paddingBottom16 title-section ">
                                LOOKING FOR SKILLS
                        </div>
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

                        <section>
                            <div className="paddingBottom16 title-section ">
                                LINKS
                        </div>
                            {
                                !detail.links ? <Link prefetch to="/project/edit">
                                    <a>
                                        <Button className="link-button" icon="plus" >Add Link</Button>
                                    </a>
                                </Link>
                                    :
                                    detail.links.map((item, index) => {
                                        return <Button onClick={()=>{
                                            window.open(item)
                                        }} key={index} className="link-button">{item}</Button>
                                    })
                            }
                        </section>
                    </div>
                </Card>
            </div>

        )
    }
}


