import React, { Component } from 'react';
import { Card, Button, Row, Col, Form, Input, Tag, Icon, Tooltip, Checkbox } from 'antd'
const FormItem = Form.Item;
const profileIcon = '/static/images/icon-project-photo.svg'
const { TextArea } = Input;
export default class extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const { onEmailReceiveChange,
            nextStep,
           
            tagsProject,
            tagsLooking,
            inputProjectVisible,
            inputLookingVisible,
            inputProjectValue,
            inputLookingValue,
            
            handleProjectClose,
            saveProjectInputRef,
            handleProjectInputChange,
            handleProjectInputConfirm,
            showProjectInput,

            handleLookingClose,
            saveLookingInputRef,
            handleLookingInputChange,
            handleLookingInputConfirm,
            showLookingInput,

            toggleUploadModal,
            croppedImage } = this.props
        return (
            <div className="new-project-container max-width">
                <div className="project-title Headline-1CenterBlack-Style">Create New Project</div>
                <Card bordered={false}>
                    <Form>
                        <div className="basic-info-container">
                            <div>
                                {
                                    croppedImage ?
                                        <div className="cropped-container">
                                            <div className="wrapper"><div onClick={toggleUploadModal} className="edit-text">Edit Photo</div></div>
                                            <img className="user-photo" alt="avatar" src={croppedImage} />
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
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem className="marginBottom0">
                                    <div className="label-form ">Project Name</div>
                                    {getFieldDecorator('description', {
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
                                Information
                        </div>
                            <div className="bio-info paddingBottom32">
                                <div className="label-form">Description</div>
                                <FormItem >

                                    {getFieldDecorator('bio', {
                                        rules: [{ whitespace: true }],
                                    })(
                                        <TextArea />
                                    )}
                                </FormItem>
                            </div>

                            <div className="skill-info marginBottom32">
                                <div className="label-form">Project Skills</div>

                                {tagsProject.map((tag, index) => {
                                    const isLongTag = tag.length > 20;
                                    const tagElem = (
                                        <Tag key={tag} closable afterClose={() => handleProjectClose(tag)}>
                                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                        </Tag>
                                    );
                                    return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                                })}
                                {inputProjectVisible && (
                                    <Input
                                        ref={saveProjectInputRef}
                                        type="text"
                                        size="small"
                                        style={{ width: 78 }}
                                        value={inputProjectValue}
                                        onChange={handleProjectInputChange}
                                        onBlur={handleProjectInputConfirm}
                                        onPressEnter={handleProjectInputConfirm}
                                    />
                                )}
                                {!inputProjectVisible && (
                                    <Tag
                                        className="new-tag"
                                        onClick={showProjectInput}
                                        style={{ background: '#fff', borderStyle: 'dashed' }}
                                    >
                                        <Icon type="plus" /> Add Skill</Tag>
                                )}

                            </div>
                            <div className="skill-info looking">
                                <div className="label-form">Looking for Skills</div>

                               {tagsLooking.map((tag, index) => {
                                    const isLongTag = tag.length > 20;
                                    const tagElem = (
                                        <Tag key={tag} closable afterClose={() => handleLookingClose(tag)}>
                                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                        </Tag>
                                    );
                                    return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                                })}
                                {inputLookingVisible && (
                                    <Input
                                        ref={saveLookingInputRef}
                                        type="text"
                                        size="small"
                                        style={{ width: 78 }}
                                        value={inputLookingValue}
                                        onChange={handleLookingInputChange}
                                        onBlur={handleLookingInputConfirm}
                                        onPressEnter={handleLookingInputConfirm}
                                    />
                                )}
                                {!inputLookingVisible && (
                                    <Tag
                                        className="new-tag"
                                        onClick={showLookingInput}
                                        style={{ background: '#fff', borderStyle: 'dashed' }}
                                    >
                                        <Icon type="plus" /> Add Skill</Tag>
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



                        <div className="update-button">
                            <div className="skip-button">Save as Draft</div>
                            <div className="next-button">

                                <Button onClick={nextStep} type="primary">
                                    Create</Button></div>
                        </div>
                    </Form>

                </Card>
            </div>

        )
    }
}

