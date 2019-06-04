import React, { Component } from 'react'
import { Link, Form, Button, Icon, Input } from 'antd'

import Image from '../Image'
const FormItem = Form.Item
const cancelIcon = '/static/images/icon-cancel-2.svg'
const trashIcon = '/static/images/icon-trash.svg'
const editIcon = '/static/images/icon-edit.svg'
const checkIcon = '/static/images/icon-check-2.svg'

export default class extends Component {

    render() {
        
        const { add, removeField, handleSubmit, handleBack } = this.props
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const keys = getFieldValue('keys') || [];
        const formItems = keys.map((k, index) => (
            <div className="form-items" key={k}>


                <FormItem
                    required={false}
                >
                    {getFieldDecorator(`email[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                type: 'email',
                                required: true,
                                whitespace: true,
                                message: "Please input email or delete this field.",
                            },
                            {
                                type: 'email',
                               
                                message: "Please input correct email format ",
                            },
                        ],
                    })(<Input placeholder="Email" style={{ width: "255px" }} />)}

                </FormItem>
                <FormItem
                    required={false}

                >
                    {getFieldDecorator(`role[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: "Please input role or delete this field.",
                            },
                        ],
                    })(<Input placeholder="Role" style={{ width: "210px" }} />)}

                </FormItem>
                <div>
                    {keys.length > 0 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => removeField(k)}
                        />
                    ) : null}
                </div>
            </div>
        ));
        getFieldDecorator('keys', { initialValue: [] });
        return (
            <div className="add-collaborator">

                <Form >
                    {formItems}

                    <FormItem >
                        <a onClick={add}><Icon type="plus"></Icon>Add collaborator</a>
                    </FormItem>
                    

                </Form>
            </div>
        )
    }
}


