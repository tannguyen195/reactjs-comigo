import React, { Component } from 'react'
import { Card, Row, Col, Modal, Dropdown, Menu } from 'antd'
import Image from '../../common/Image'
import moment from 'moment'


const optionIcon = '/static/images/icon-option-2.svg'
const editIcon = '/static/images/icon-edit-black.svg'
const trashIcon = '/static/images/icon-trash-black.svg'
const confirm = Modal.confirm;

export default class extends Component {

    render() {
        const { detail, updateData, handleDeletePost, status, toggleEditUpdate } = this.props

        return (
            <Card bordered={false} className="update__card-container marginTop8">
                <div className="update__header-container">
                    <div className="update__left">
                        <Image image={detail.owner.pictureURL} />
                        <div className="update__title">
                            <div className="Input-Search-Empty">
                                <span className="Text-Style-3">
                                    {detail.owner.firstName + ` ` + detail.owner.lastName + ` `}
                                </span>

                                posted a new update for
                                <span className="text-blue">
                                    {` ` + detail.name}
                                </span>
                                .
                            </div>
                            <div className="Sub-Title-10-Left">{moment.unix(updateData.updatedAt).fromNow()}</div>
                        </div>
                    </div>
                    <div className="update__right">

                        <Dropdown className="option__post" placement="bottomRight" overlay={<Menu>
                            <Menu.Item key="0">
                                <div onClick={() => toggleEditUpdate(updateData)} className="Body-12 item">
                                    <img src={editIcon} alt="edit" />
                                    Edit post
                        </div>
                            </Menu.Item>
                            <Menu.Item key="1">

                                <div onClick={() => confirm({
                                    title: 'Are you sure to remove this post?',

                                    onOk() {
                                        return new Promise((resolve, reject) => {
                                            handleDeletePost(updateData)
                                            setTimeout(status !== "running" ? resolve : reject, 1000);
                                        }).catch(() => console.log('Oops errors!'));


                                    },
                                    onCancel() { },
                                })} className="Body-12 item">
                                    <img src={trashIcon} alt="trash" />
                                    Delete
                        </div>
                            </Menu.Item>

                        </Menu>
                        } trigger={['click']}>
                            <img alt="option" src={optionIcon} />
                        </Dropdown>

                    </div>
                </div>

                <div className="update__body-container Paragraph-12">
                    {updateData.content}
                </div>
            </Card >

        )
    }
}


