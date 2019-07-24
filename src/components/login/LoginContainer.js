import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../../actions/user'
import { Form } from 'antd'
import Head from '../head'
import Login from './Login'
import _login from './_login.less'
import { toggleForgotModal } from '../../actions/toggle'
import ForgotModalContainer from '../forgot/ForgotModalContainer'
import { Router } from 'routes'
class LoginContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFlipped: false
        }
    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    componentDidMount() {

        if (Router.router.query && Router.router.query.isNewUser) {
            this.setState({
                isFlipped: true
            })
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
            <div style={{ height: "100%", background: "#ffd250" }}>
                <style dangerouslySetInnerHTML={{
                    __html: _login
                }} />
                <Head title="Sign In" />
                <Login
                    {...this.state}
                    {...this.props}
                    handleClick={this.handleClick}
                    handleSubmit={(e) => this.handleSubmit(e)}
                />
                <ForgotModalContainer />
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
