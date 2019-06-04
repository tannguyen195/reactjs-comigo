import React, { Component } from 'react'
import { Icon, Button, } from 'antd'
import Image from '../common/Image'
import ImageProject from '../common/ImageProject'
import { Link, Router } from 'routes'
import Update from './Update'

import moment from 'moment'

const jobIcon = '/static/images/icon-job.svg'
export default class extends Component {

    render() {
        const {
            jobList,
            detail,
            edit,
            togglePreviewImage,
            togglePostJob,
            toggleCollaborator,
            toggleJobDetail
        } = this.props
        return (
            <div className="project">
                <div className="project__container">


                    <div className="project-detail">
                        <section className=" cover">
                            <ImageProject image={detail.coverURL} />
                        </section>
                        <section className="detail">
                            <div className="detail__header ">
                                <div className="H1-Black-Left">  {detail.name}</div>
                                {
                                    edit ? <div className="button-group">

                                        <Link prefetch to={detail._id + "/edit"}>
                                            <a>
                                                <Button icon="edit" className="Button-Dark-Grey-Left">
                                                    Edit Project
                                </Button>
                                            </a>
                                        </Link>

                                    </div> :
                                        <div className="button-group">
                                            <a href={`mailto:${detail.owner.email}`} >
                                                <Button icon="mail" type="primary" className="email__button Button-White-Left">{`Contact to ${detail.owner.firstName}`}
                                                </Button>
                                            </a>
                                        </div>
                                }

                            </div>

                            <div className="detail__body">
                                <div className="detail__body__left">
                                    <div className="desc Body-Dark-Grey-Left">{detail.description}</div>

                                    <section className="paddingTop40">
                                        <div className="H2-Black-Left">Updates</div>
                                        <Update {...this.props} />
                                    </section>
                                </div>
                                <div className="detail__body__right">

                                    <section className="right__section">
                                        <div className="section__header">
                                            <div className="title H3-Black-Left">Collaborators</div>
                                            <a onClick={toggleCollaborator} className="action Body-Dark-Grey-Center">{`${detail.shares.length + 1}  members`}</a>
                                        </div>
                                        <div className="section__body">
                                            <Image image={detail.owner.pictureURL} />
                                            {
                                                detail.shares.map((item, index) => {
                                                    return <Link prefetch to={'/user/' + item._id} key={index}>
                                                        <a>
                                                            <Image image={item.pictureURL} />
                                                        </a>
                                                    </Link>
                                                })
                                            }
                                        </div>
                                    </section>

                                    <section className="right__section">
                                        <div className="section__header">
                                            <div className="title H3-Black-Left">Media</div>

                                        </div>
                                        <div className="section__body" style={{ justifyContent: "space-between" }}>
                                            {
                                                detail.media && detail.media.length > 0 ? detail.media.map((item, index) => {
                                                    return <img className="media__img" key={index} src={item} onClick={() => togglePreviewImage(item)} />
                                                }) : <div className="no-data Body-Dark-Grey-Center">There are no images yet</div>
                                            }
                                        </div>
                                    </section>

                                    <section className="right__section">
                                        <div className="section__header">
                                            <div className="title H3-Black-Left">Job Postings</div>
                                            {
                                                edit && <a onClick={togglePostJob} className="title Button-Yellow-Left"><Icon type="plus" />{`${` `}`}Add Job</a>
                                            }

                                        </div>
                                        <div className="section__body" style={{ flexDirection: "column" }}>
                                            {
                                                jobList.length > 0 ? jobList.map((item, index) => {
                                                    return <div onClick={() => toggleJobDetail(item)} className="job__item" key={index}>
                                                        <div className="job__item__image">
                                                            <img src={jobIcon} alt="job" />
                                                        </div>
                                                        <div>
                                                            <div className="Button-Black-Left">{item.title}</div>
                                                            <div className="Caption-Grey-Left">{moment(item.updatedAt).format("MMM DD, YYYY")}</div>
                                                        </div>

                                                    </div>
                                                }) : <div className="no-data Body-Dark-Grey-Center">There are no jobs yet</div>
                                            }
                                        </div>
                                    </section>

                                    <section className="right__section">
                                        <div className="section__header">
                                            <div className="title H3-Black-Left">Links</div>

                                        </div>
                                        <div className="section__body" style={{ justifyContent: "space-between" }}>
                                            {
                                                detail.links.length > 0 ?
                                                    detail.links.map((item, index) => {
                                                        return <Button onClick={() => {
                                                            window.open(item.includes("http") ?
                                                                item : "http://" + item)
                                                        }} key={index} className="link-button">{item}</Button>
                                                    }) : <div className="no-data Body-Dark-Grey-Center">There are no links yet</div>
                                            }
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}


