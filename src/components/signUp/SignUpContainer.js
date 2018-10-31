import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userAction from '../../actions/user'
import { Form } from 'antd'
import Head from '../head'
import SignUp from './SignUp'
import _signUp from './_signUp.less'

class SignUpContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmDirty: false
        }
    }
    handleSubmit = (e) => {
        const { signup } = this.props
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
              
                signup({
                    lastName: values.lastname,
                    firstName: values.firstname,
                    email: values.email,
                    password: values.password
                })
                
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
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

    render() {
        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _signUp
                }} />
                <Head title="Sign Up" />
                <SignUp
                    {...this.state}
                    {...this.props}
                    handleSubmit={this.handleSubmit}
                    compareToFirstPassword={this.compareToFirstPassword}
                    validateToNextPassword={this.validateToNextPassword}
                    handleConfirmBlur={this.handleConfirmBlur}
                />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        step: state.user.step,
        status: state.user.statusSignUp,
        message: state.user.message,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...userAction
    }, dispatch)
}
const WrappedSignUpContainer = Form.create()(SignUpContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedSignUpContainer);
