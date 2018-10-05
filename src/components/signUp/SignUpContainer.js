import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextStep, previousStep } from '../../actions/authAction'
import { Form } from 'antd'
import Head from '../head'
import SignUp from './SignUp'
import _signUp from './_signUp.less'


class SignUpContainer extends Component {
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
                    __html: _signUp
                }} />
                <Head title="Home page" />
                <SignUp
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
        step: state.authReducer.step
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        nextStep, previousStep
    }, dispatch)
}
const WrappedSignUpContainer = Form.create()(SignUpContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedSignUpContainer);
