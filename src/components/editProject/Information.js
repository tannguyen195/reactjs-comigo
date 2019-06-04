import React, { Component } from 'react';
import { Card, Button, Form, Input, Modal, Tabs } from 'antd'
import CustomTagContainer from '../common/customTag/CustomTagContainer';

import { Router } from 'routes'
const TabPane = Tabs.TabPane;
const confirm = Modal.confirm;
const FormItem = Form.Item;
const profileIcon = '/static/images/icon-project-photo.svg'
const { TextArea } = Input;
export default class extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const {
            toggleUploadModal,
            handleSubmit,
            userData,
            detail,
            preloadImage,
            status,
            handleRemoveProject
        } = this.props
        return (
            <div className="overview max-width">
                <Card bordered={false}>



                    {
                        preloadImage ?
                            <div className="cropped-container">
                                <div className="wrapper">
                                    <div onClick={toggleUploadModal} className="edit-text">Edit Photo</div></div>
                                <img className="user-photo" alt="avatar" src={preloadImage} />
                            </div> :
                            <div onClick={toggleUploadModal} className="photo-container">
                                <img alt="profile" src={profileIcon} />
                                <div className="add-photo">Add photo</div>
                            </div>
                    }


                    <Form onSubmit={handleSubmit}>
                        <FormItem className="marginBottom32">
                            <div className="Body-Dark-Grey-Left">Project Lead</div>
                            {getFieldDecorator('owner', {
                                rules: [{
                                    required: true,
                                    message: 'Please input project owner name!',
                                    whitespace: true
                                },],
                                initialValue: userData.firstName + ` ` + userData.lastName
                            })(
                                <Input disabled />
                            )}
                        </FormItem>
                        <FormItem className="marginBottom16">
                            <div className="Body-Dark-Grey-Left">Project Name</div>
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true, message: 'Please input project name!',
                                }],
                                initialValue: detail.name
                            })(
                                <Input />
                            )}
                        </FormItem>




                        <div className="bio-info paddingBottom32">

                            <FormItem >
                                <div className="Body-Dark-Grey-Left">Description</div>
                                {getFieldDecorator('description', {
                                    rules: [

                                        {
                                            required: true, message: 'Please input project description!',
                                        }],
                                    initialValue: detail.description
                                })(
                                    <TextArea />
                                )}
                            </FormItem>
                        </div>




                        <div className="update-button">
                            <div className="delete-button">
                                <a onClick={() => confirm({
                                    title: 'Are you sure?',
                                    content: 'Do you really want to delete this project? This process cannot be undone.',
                                    okText: 'Yes',
                                    okType: 'danger',
                                    cancelText: 'No',
                                    onOk() {
                                        handleRemoveProject(detail._id)
                                    },
                                    onCancel() {

                                    },
                                })}>DELETE</a>
                            </div>
                            <div className="left-button">
                                <a onClick={() => Router.push('/profile')} className="skip-button">Cancel</a>
                                <div className="next-button ">

                                    <Button className="Button-White-Center" loading={status === 'running'} htmlType="submit" type="primary">
                                        SAVE</Button></div>
                            </div>
                        </div>
                    </Form>

                </Card>
            </div >

        )
    }
}

