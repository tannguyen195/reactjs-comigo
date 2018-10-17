import React, { Component } from 'react';
import { Card, Button, Form, Input, } from 'antd'
import CustomTagContainer from '../common/customTag/CustomTagContainer';
const FormItem = Form.Item;
const profileIcon = '/static/images/icon-project-photo.svg'
const { TextArea } = Input;
export default class extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const {
            links,
            onTagLinkChange,
            lookingSkills,
            onTagProjectChange,
            projectSkills,
            onTagLookingChange,

            toggleUploadModal,
            coverProject,
            handleSubmit,

            userData
        } = this.props
        return (
            <div className="edit-project-container max-width">
                <div className="project-title Headline-1CenterBlack-Style">Create Edit Project</div>
                <Card bordered={false}>
                    <Form onSubmit={handleSubmit}>
                        <div className="basic-info-container">
                            <div>
                                {
                                    coverProject.cropData ?
                                        <div className="cropped-container">
                                            <div className="wrapper">
                                                <div onClick={toggleUploadModal} className="edit-text">Edit Photo</div></div>
                                            <img className="user-photo" alt="avatar" src={coverProject.cropData} />
                                        </div> :
                                        <div onClick={toggleUploadModal} className="photo-container">
                                            <img alt="profile" src={profileIcon} />
                                            <div className="add-photo">Add photo</div>
                                        </div>
                                }

                            </div>
                            <div className="basic-info">
                                <FormItem className="marginBottom32">
                                    <div className="label-form">Project Owner</div>
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
                                <FormItem className="marginBottom0">
                                    <div className="label-form ">Project Name</div>
                                    {getFieldDecorator('name', {
                                        rules: [{
                                            required: true, message: 'Please input project name!',
                                        }],
                                    })(
                                        <Input />
                                    )}
                                </FormItem>

                            </div>
                        </div>

                        <div className="ability">
                            <div className="paddingBottom32 font-medium">
                                Information
                        </div>
                            <div className="bio-info paddingBottom32">
                                <div className="label-form">Description</div>
                                <FormItem >

                                    {getFieldDecorator('description', {
                                        rules: [

                                            {
                                                required: true, message: 'Please input project description!',
                                            }],
                                    })(
                                        <TextArea />
                                    )}
                                </FormItem>
                            </div>

                            <div className="skill-info marginBottom32">
                                <div className="label-form">Project Skills</div>
                                <CustomTagContainer
                                    onTagsChange={onTagProjectChange}
                                    tags={projectSkills} />

                            </div>
                            <div className="skill-info looking">
                                <div className="label-form">Looking for Skills</div>
                                <CustomTagContainer
                                    onTagsChange={onTagLookingChange}
                                    tags={lookingSkills} />
                            </div>
                        </div>
                        <div className="links paddingBottom40">
                            <div className="paddingBottom16 font-medium">
                                Links (optional)
                        </div>
                            <div className="links-tag-container">
                                <CustomTagContainer
                                    type="link"
                                    onTagsChange={onTagLinkChange}
                                    tags={links} />
                            </div>
                        </div>
                        <div className="update-button">
                            <div className="skip-button">Save as Draft</div>
                            <div className="next-button">

                                <Button htmlType="submit" type="primary">
                                    Create</Button></div>
                        </div>
                    </Form>

                </Card>
            </div>

        )
    }
}

