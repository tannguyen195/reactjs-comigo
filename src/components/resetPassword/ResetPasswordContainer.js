import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'

import ResetPassword from './ResetPassword'
import _resetPassword from './_resetPassword.less'
import { Router } from 'routes'
import { Form } from 'antd'
import * as userAction from '../../actions/user'
class ResetPasswordContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmDirty: null
        }

    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('newPassword')) {
            callback('Your passwords did not match. Please try again!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    handleResetPassword = (e) => {
        const { resetPassword } = this.props
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
            
                resetPassword({
                    "newPassword": values.newPassword,
                    "token": Router.query.token
                })
            }
        })
    }


    render() {

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _resetPassword
                }} />

                <ResetPassword
                    handleConfirmBlur={this.handleConfirmBlur}
                    compareToFirstPassword={this.compareToFirstPassword}
                    validateToNextPassword={this.validateToNextPassword}
                    handleResetPassword={this.handleResetPassword}
                    {...this.state}
                    {...this.props} />

            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        status: state.user.status,
        errorMessage: state.user.errorMessage
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...userAction
    }, dispatch)
}
ResetPasswordContainer = Form.create()(ResetPasswordContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordContainer)

