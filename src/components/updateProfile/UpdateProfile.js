import React, { Component } from 'react';
import { Card, Button, Row, Col, Form, Input, Tag, Icon, Select, Checkbox } from 'antd'
import CustomTagContainer from '../common/customTag/CustomTagContainer';
import MajorTagContainer from '../common/majorTag/MajorTagContainer';
import { Router } from 'routes'
const profileIcon = '/static/images/icon-profile.svg'
const FormItem = Form.Item;
const Option = Select.Option
const { TextArea } = Input;
export default class extends Component {
    renderYear() {
        var options = []
        for (let i = 2017; i < 2032; i++) {
            options.push(<Option key={i} value={i}>{i}</Option>)
        }
        return options
    }

    render() {
        const {
            listData,
            majors,
            onMajorChange,
            onTagLinkChange,
            onTagSkillChange,
            onEmailReceiveChange,
            onTagInterestChange,
            interests,
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
            <div className="profile-update">
                <div className="H1-Black-Left">Edit Profile</div>
                <Form onSubmit={handleSubmit}>
                    <div className="basic-info">

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
                        <div className="basic-info paddingBottom40">
                            <Row gutter={16}>
                                <Col md={12} lg={12}>
                                    <FormItem className="marginBottom32">
                                        <div className="Body-Dark-Grey-Left">First Name</div>
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
                                        <div className="Body-Dark-Grey-Left">Last Name</div>
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

                            <Row gutter={16}>
                                <Col md={24} lg={24}>
                                    <FormItem
                                        className="marginBottom0 ">
                                        <div className="lBody-Dark-Grey-Left ">Email</div>
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
                                </Col>
                                <Col md={12} lg={12}>
                                    <FormItem
                                        className="marginBottom0 paddingTop16 graduation__year">
                                        <div className="lBody-Dark-Grey-Left ">Graduation Year</div>
                                        {getFieldDecorator('graduationYear', {
                                            initialValue: userData.graduationYear
                                        })(
                                            <Select  >
                                                {
                                                    this.renderYear()
                                                }
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>



                        </div>
                    </div>

                    <div className="ability paddingBottom24">
                        <div className="paddingBottom32 H2-Black-Left">
                            Basic Information
                        </div>
                        <div className="lBody-Dark-Grey-Left">Bio</div>
                        <div className="bio-info ">

                            <FormItem >

                                {getFieldDecorator('bio', {
                                    rules: [{ whitespace: true }],
                                    initialValue: userData.bio
                                })(
                                    <TextArea placeholder="Type something about yourself..." />
                                )}
                            </FormItem>
                        </div>
                        <div className="lBody-Dark-Grey-Left">Skills</div>
                        <div className="skill-info marginBottom24">

                            {
                                listData && <MajorTagContainer
                                    listData={listData.skillData}
                                    value={skills}
                                    text={"Add your strength of skills..."}
                                    onMajorChange={onTagSkillChange}
                                    color="#006cd9"
                                />
                            }

                            {/* <CustomTagContainer
                                    text={"Add your strength of skills..."}
                                    onTagsChange={onTagSkillChange}
                                    tags={skills}
                                /> */}

                        </div>
                        <div className="lBody-Dark-Grey-Left">Interests</div>
                        <div className="skill-info marginBottom24">

                            {
                                listData && <MajorTagContainer
                                    listData={listData.skillData}
                                    color="#12ca00"
                                    value={interests}
                                    text={"Add your most interests..."}
                                    onMajorChange={onTagInterestChange}
                                />}


                            {/* <CustomTagContainer
                                    text={"Add your most interests..."}
                                    onTagsChange={onTagInterestChange}
                                    tags={interests}
                                /> */}

                        </div>
                        <div className="lBody-Dark-Grey-Left">Majors</div>
                        <div className="skill-info ">

                            {
                                listData && <MajorTagContainer
                                    listData={listData.majorData}
                                    color="#edf0f2"
                                    value={majors}
                                    text={"Add majors"}
                                    onMajorChange={onMajorChange}
                                />
                            }


                        </div>
                    </div>
                    <div className="ability paddingBottom24">

                    </div>
                    <div className="links paddingBottom40">
                        <div className="paddingBottom32 H2-Black-Left">
                            Social Links
                        </div>
                        <div className="links-tag-container">
                            <CustomTagContainer
                                text={"Add link"}
                                type="link"
                                onTagsChange={onTagLinkChange}
                                tags={links} />
                        </div>

                    </div>
                    {/* <div className="paddingBottom16 InputLeftBlack-Style">
                            Receive emails for new projects that match your skills!
                        </div>

                        <Checkbox className="paddingBottom40" onChange={onEmailReceiveChange}>Yes, send me updates.</Checkbox> */}

                    <div className="update-button">
                        <a onClick={() => Router.push('/profile')} className="skip-button">Cancel</a>
                        <div className="next-button ">

                            <Button className="Button-White-Center" loading={status === 'running'} htmlType={"submit"} type="primary">
                                SAVE</Button></div>
                    </div>
                </Form>


            </div>
        )
    }
}


