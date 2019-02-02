import React, { Component } from 'react'
import { Card, Row, Form, Modal, Dropdown, Menu, Input } from 'antd'
import Image from '../../common/Image'
import moment from 'moment'


const optionIcon = '/static/images/icon-option-2.svg'
const editIcon = '/static/images/icon-edit-black.svg'
const trashIcon = '/static/images/icon-trash-black.svg'
const confirm = Modal.confirm;

export default class extends Component {

    render() {
        const {
            detail,
            data,
            handleDeletePost,
            status,
            toggleEditUpdate,
            edit,
            userData,
            handlePostComment,
            handleDeleteComment,
            toggleEditComment,
            isNewFeed
        } = this.props

        const {
            getFieldDecorator
        } = this.props.form;
        console.log("data", data)
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
                            <div className="Sub-Title-10-Left">{moment.unix(data.updatedAt).fromNow()}</div>
                        </div>
                    </div>
                    {
                        edit && <div className="update__right">

                            <Dropdown className="option__post" placement="bottomRight" overlay={<Menu>
                                <Menu.Item key="0">
                                    <div onClick={() => toggleEditUpdate(data)} className="Body-12 item">
                                        <img src={editIcon} alt="edit" />
                                        Edit post
                        </div>
                                </Menu.Item>
                                <Menu.Item key="1">

                                    <div onClick={() => confirm({
                                        title: 'Are you sure to remove this post?',

                                        onOk() {
                                            return new Promise((resolve, reject) => {
                                                handleDeletePost(data)
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
                    }

                </div>

                <div className="update__body-container Paragraph-12">
                    {data.content}
                </div>

                {
                    !isNewFeed && <div> {data.comments && data.comments.length > 0 && data.comments.map((item, index) => {
                        return <div key={index} className="update__comment-container Paragraph-12">
                            <div className="update__comment-header">
                                <Image image={item.postedUserData.pictureURL} />
                                <div className="People-Comment name">{item.postedUserData.firstName} {item.postedUserData.lastName}</div>
                                <div className="Sub-Time-Date">{moment.unix(item.updatedAt).fromNow()}</div>
                            </div>
                            <div className="update__comment-body">
                                <div className="Comment">
                                    {item.content}
                                </div>
                                {
                                    userData._id === item.postedUserData._id && <div className="comment__right">
                                        <Dropdown className="option__post" placement="bottomLeft" overlay={<Menu>
                                            <Menu.Item key="0">
                                                <div onClick={() => toggleEditComment(item)} className="Body-12 item">
                                                    <img src={editIcon} alt="edit" />
                                                    Edit comment</div>
                                            </Menu.Item>
                                            <Menu.Item key="1">
                                                <div onClick={() => confirm({
                                                    title: 'Are you sure to remove this comment?',
                                                    onOk() {
                                                        return new Promise((resolve, reject) => {
                                                            handleDeleteComment(item)
                                                            setTimeout(status !== "running" ? resolve : reject, 1000);
                                                        }).catch(() => console.log('Oops errors!'));
                                                    },
                                                    onCancel() { },
                                                })} className="Body-12 item">
                                                    <img src={trashIcon} alt="trash" />
                                                    Delete  </div>
                                            </Menu.Item>

                                        </Menu>
                                        } trigger={['click']}>
                                            <img alt="option" src={optionIcon} />
                                        </Dropdown>
                                    </div>
                                }
                            </div>
                        </div>
                    })
                    }

                        <div className="update__user-comment">
                            <Image image={userData.pictureURL} />
                            <div className="input-comment">
                                <Form onSubmit={handlePostComment} layout="inline" >
                                    <Form.Item >
                                        {getFieldDecorator('comment', {
                                            rules: [{ required: true, message: 'Please input your comment!' }],
                                        })(
                                            <Input placeholder="Type your comment here..." />
                                        )}
                                    </Form.Item>
                                </Form></div>
                        </div></div>
                }


            </Card >

        )
    }
}


