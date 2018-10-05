import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextStep, previousStep } from '../../actions/authAction'
import { Form } from 'antd'
import Head from '../head'
import Login from './Login'
import _login from './_login.less'


class LoginContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleSubmit(e) {
        const { nextStep } = this.props
        console.log("ASDAS")

        nextStep()

        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
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
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        nextStep, previousStep
    }, dispatch)
}
const WrappedLoginContainer = Form.create()(LoginContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedLoginContainer);
