import React, { Component } from 'react';
import { Card, Button, Row, Col, Form, Input, Tag, Icon, Tooltip, Checkbox } from 'antd'
const profileIcon = '/static/images/icon-profile.svg'
const FormItem = Form.Item;
const { TextArea } = Input;
export default class extends Component {

    render() {
        const { onEmailReceiveChange,
            nextStep, handleClose, tags,
            inputVisible, saveInputRef,
            inputValue, handleInputChange,
            handleInputConfirm, showInput,
            toggleUploadModal
        } = this.props
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="profile-update-container">
                <Card>
                    <Form>


                        <div className="basic-info-container">
                            <div>
                                <div onClick={toggleUploadModal} className="photo-container">
                                    <img alt="profile" src={profileIcon} />
                                    <div className="add-photo">Add photo</div>
                                </div>
                            </div>
                            <div className="basic-info">
                                <Row gutter={16}>
                                    <Col md={12} lg={12}>
                                        <FormItem className="marginBottom32">
                                            <div className="label-form">First Name</div>
                                            {getFieldDecorator('firstname', {
                                                rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col md={12} lg={12}>
                                        <FormItem >
                                            <div className="label-form">Last Name</div>
                                            {getFieldDecorator('lastname', {
                                                rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <FormItem className="marginBottom0">
                                    <div className="label-form ">Email</div>
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            type: 'email', message: 'The input is not valid E-mail!',
                                        }, {
                                            message: 'Please input your E-mail!',
                                        }],
                                    })(
                                        <Input />
                                    )}
                                </FormItem>

                            </div>
                        </div>

                        <div className="ability">
                            <div className="paddingBottom32 font-medium">
                                Information & Abilities
                        </div>
                            <div className="bio-info paddingBottom32">
                                <div className="label-form">Bio</div>
                                <FormItem >

                                    {getFieldDecorator('bio', {
                                        rules: [{ whitespace: true }],
                                    })(
                                        <TextArea />
                                    )}
                                </FormItem>
                            </div>

                            <div className="skill-info">
                                <div className="label-form">Skills</div>

                                {tags.map((tag, index) => {
                                    const isLongTag = tag.length > 20;
                                    const tagElem = (
                                        <Tag key={tag} closable afterClose={() => handleClose(tag)}>
                                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                        </Tag>
                                    );
                                    return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                                })}
                                {inputVisible && (
                                    <Input
                                        ref={saveInputRef}
                                        type="text"
                                        size="small"
                                        style={{ width: 78 }}
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onBlur={handleInputConfirm}
                                        onPressEnter={handleInputConfirm}
                                    />
                                )}
                                {!inputVisible && (
                                    <Tag
                                        onClick={showInput}
                                        style={{ background: '#fff', borderStyle: 'dashed' }}
                                    >
                                        <Icon type="plus" /> New Tag</Tag>
                                )}

                            </div>
                        </div>
                        <div className="links paddingBottom40">
                            <div className="paddingBottom16 font-medium">
                                Links (optional)
                        </div>
                            <div className="link-button">
                                <Button icon="plus">Add links</Button>
                            </div>

                        </div>

                        <div className="paddingBottom16 InputLeftBlack-Style">
                            Receive emails for new projects that match your skills!
                        </div>

                        <Checkbox className="paddingBottom40" onChange={onEmailReceiveChange}>Yes, send me updates.</Checkbox>

                        <div className="update-button">
                            <div className="skip-button">Skip for later</div>
                            <div className="next-button">

                                <Button onClick={nextStep} type="primary">
                                    Next</Button></div>
                        </div>
                    </Form>

                </Card>
            </div>
        )
    }
}


