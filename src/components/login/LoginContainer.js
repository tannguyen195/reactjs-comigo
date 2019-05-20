import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../../actions/user'
import { Form } from 'antd'
import Head from '../head'
import Login from './Login'
import _login from './_login.less'
import { toggleForgotModal } from '../../actions/toggle'
import { Cookies } from 'react-cookie'

class LoginContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleSubmit(e) {
        const { login } = this.props

        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {

                login(values)
            }
        });
    }
    render() {

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _login
                }} />
                <Head title="Sign In" />
                <Login
                    {...this.state}
                    {...this.props}
                    handleSubmit={(e) => this.handleSubmit(e)}
                />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        status: state.user.statusSignIn,
        message: state.user.message
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login,
        toggleForgotModal
    }, dispatch)
}
const WrappedLoginContainer = Form.create()(LoginContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedLoginContainer);
