import React, { Component } from 'react';
import { Card, Button, Form, Input, } from 'antd'
import _overview from './_overview.less'
const FormItem = Form.Item;
const profileIcon = '/static/images/icon-project-photo.svg'
const { TextArea } = Input;
export default class extends Component {
    componentDidMount() {
        const {
            form, data,
        } = this.props
        data && form.setFieldsValue({
            name: data.name,
            description: data.description,
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {
            onTabClick,
            userData,
            status,
            preloadImage,
            toggleUploadModal
        } = this.props
        return (
            <div className="overview">
                <style dangerouslySetInnerHTML={{
                    __html: _overview
                }} />


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

                <Form>
                    <FormItem className="marginBottom16">
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
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem className="bio-info paddingBottom32">
                        <div className="Body-Dark-Grey-Left">Description</div>
                        {getFieldDecorator('description', {
                            rules: [

                                {
                                    required: true, message: 'Please input project description!',
                                }],
                        })(
                            <TextArea />
                        )}
                    </FormItem>
                    <div className="update-button">

                        <div className="skip-button Button-Dark-Grey-Left">Cancel</div>
                        <div className="next-button">
                            <Button className="Button-White-Center" onClick={(e) => onTabClick(e)} loading={status === "running"} htmlType="submit" type="primary">
                                Next</Button>
                        </div>

                    </div>

                </Form>

            </div>

        )
    }
}

