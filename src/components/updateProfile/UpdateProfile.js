import React, { Component } from 'react';
import { Card, Button, Row, Col, Form, Input, Tag, Icon, Tooltip, Checkbox } from 'antd'
import CustomTagContainer from '../common/customTag/CustomTagContainer';
const profileIcon = '/static/images/icon-profile.svg'
const FormItem = Form.Item;
const { TextArea } = Input;
export default class extends Component {

    render() {
        const {
            onEmailReceiveChange,
            onTagLinkChange,
            onTagSkillChange,
            links,
            skills,
            toggleUploadModal,
            preloadImage,
            userData,
            handleSubmit,
            status
        } = this.props
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="profile-update-container max-width">
                <Card bordered={false}>
                    <Form onSubmit={handleSubmit}>
                        <div className="basic-info-container">
                            <div>
                                {
                                    preloadImage ?
                                        <div className="cropped-container">
                                            <div className="wrapper">
                                                <div onClick={toggleUploadModal} className="edit-text">Edit Photo</div></div>
                                            <img className="user-photo" alt="avatar" src={preloadImage} />
                                        </div> :
                                        <div onClick={toggleUploadModal} className="photo-container">
                                            <img alt="profile" src={profileIcon} />
                                            <div className="add-photo">Upload Cover</div>
                                        </div>
                                }

                            </div>
                            <div className="basic-info">
                                <Row gutter={16}>
                                    <Col md={12} lg={12}>
                                        <FormItem className="marginBottom32">
                                            <div className="label-form">First Name</div>
                                            {getFieldDecorator('firstName', {
                                                rules: [{
                                                    required: true,
                                                    message: 'Please input your first name!',
                                                    whitespace: true
                                                }],
                                                initialValue: userData.firstName
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col md={12} lg={12}>
                                        <FormItem >
                                            <div className="label-form">Last Name</div>
                                            {getFieldDecorator('lastName', {
                                                rules: [{
                                                    required: true,
                                                    message: 'Please input your last name!',
                                                    whitespace: true
                                                }],
                                                initialValue: userData.lastName
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <FormItem
                                    hasFeedback
                                    validateStatus="success"
                                    className="marginBottom0">
                                    <div className="label-form ">Email</div>
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        }, {
                                            message: 'Please input your E-mail!',
                                        }],
                                        initialValue: userData.email
                                    })(
                                        <Input disabled id="success" />
                                    )}
                                </FormItem>

                            </div>
                        </div>

                        <div className="ability">
                            <div className="paddingBottom32 Title-Section-Left">
                                Information & Abilities
                        </div>
                            <div className="bio-info paddingBottom32">
                                <div className="label-form">Bio</div>
                                <FormItem >

                                    {getFieldDecorator('bio', {
                                        rules: [{ whitespace: true }],
                                        initialValue: userData.bio
                                    })(
                                        <TextArea />
                                    )}
                                </FormItem>
                            </div>

                            <div className="skill-info">
                                <div className="label-form">Skills</div>

                                <CustomTagContainer
                                    onTagsChange={onTagSkillChange}
                                    tags={skills}
                                />

                            </div>
                        </div>
                        <div className="links paddingBottom40">
                            <div className="paddingBottom16 Title-Section-Left">
                                Links (optional)
                        </div>
                            <div className="links-tag-container">
                                <CustomTagContainer
                                    type="link"
                                    onTagsChange={onTagLinkChange}
                                    tags={links} />
                            </div>

                        </div>

                        <div className="paddingBottom16 InputLeftBlack-Style">
                            Receive emails for new projects that match your skills!
                        </div>

                        <Checkbox className="paddingBottom40" onChange={onEmailReceiveChange}>Yes, send me updates.</Checkbox>

                        <div className="update-button">
                            <div className="skip-button">Cancel</div>
                            <div className="next-button">

                                <Button loading={status === 'running'} htmlType={"submit"} type="primary">
                                    SAVE</Button></div>
                        </div>
                    </Form>

                </Card>
            </div>
        )
    }
}


