import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../../actions/user'
import { Form } from 'antd'
import Head from '../head'
import Login from './Login'
import _login from './_login.less'
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
                <Head title="Home page" />
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
        status: state.user.status,
        errMessage: state.user.errMessage
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login

    }, dispatch)
}
const WrappedLoginContainer = Form.create()(LoginContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedLoginContainer);
