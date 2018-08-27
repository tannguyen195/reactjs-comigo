import React, { Component } from 'react'
import SignInModal from './SignInModal.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { toggleSignInModal } from '../../actions/toggleAction'
import { signIn } from '../../api/authApi'
import _signIn from './_signIn.less'

class SignInModalContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	handleSignIn(e) {
		e.preventDefault()
		this.props.signIn()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.signIn({
					email: values.email,
					password: values.password
				})
			}
		})
	}
	render() {
		return (
			<div>
				<style dangerouslySetInnerHTML={{
					__html: _signIn
				}} />
				<SignInModal
					{...this.state}
					{...this.props}
					handleSignIn={(e) => this.handleSignIn(e)}
				/>
			</div>

		)
	}
}


export function mapStateToProps(state) {
	return {
		visibleSignIn: state.toggleReducer.visibleSignIn,
	};
}
export function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		toggleSignInModal,
		signIn
	}, dispatch)
}

SignInModalContainer = Form.create()(SignInModalContainer)
export default connect(mapStateToProps, mapDispatchToProps)(SignInModalContainer);
