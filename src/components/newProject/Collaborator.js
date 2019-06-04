import React, { Component } from 'react';
import { Card, Button, Form, Input, } from 'antd'
import _collaborator from './_collaborator.less'
import AddCollaboratorContainer from '../common/addCollaborator/AddCollaboratorContainer'
const FormItem = Form.Item;
const profileIcon = '/static/images/icon-project-photo.svg'
const { TextArea } = Input;
export default class extends Component {
    componentDidMount() {
        const {
            form, data,
        } = this.props
        data && form.setFieldsValue({
            email: data.email,
            role: data.role,
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {
            handleSubmit,
            handleBack
        } = this.props
        return (
            <div className="collaborator">
                <style dangerouslySetInnerHTML={{
                    __html: _collaborator
                }} />
                <div className="Body-Dark-Grey-Left">Add folks who have helped with your project along the way. Or, add collaborators later!</div>
                <AddCollaboratorContainer {...this.props} />
                <div className="update-button">

                    <div onClick={handleBack} className="skip-button Button-Dark-Grey-Left">Back</div>
                    <div className="next-button">
                        <Button className="Button-White-Center" onClick={handleSubmit} htmlType="submit" type="primary">
                            Next</Button>
                    </div>

                </div>
            </div>

        )
    }
}

