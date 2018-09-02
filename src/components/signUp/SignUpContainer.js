import React, { Component } from 'react'
import SignUp from './SignUp.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { toggleSignInModal } from '../../actions/toggleAction'
import { nextStep, previousStep } from '../../actions/authAction'
import SignInModalContainer from '../signIn/SignInModalContainer'
import _signUp from './_signUp.less'

class SignUpContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			visibleConfirm: false,
			visibleSignature: false,
		}
	}
	toggleConfirmModal() {
		this.setState({
			visibleConfirm: !this.state.visibleConfirm
		})
	}
	toggleSignatureModal() {
		this.setState({
			visibleSignature: !this.state.visibleSignature
		})
	}
	onNextStep() {
		this.props.nextStep()
	}

	onPreviousStep() {
		this.props.previousStep()
	}

	render() {
		return (
			<div>
				<style dangerouslySetInnerHTML={{
					__html: _signUp
				}} />
				<SignUp
					{...this.state}
					{...this.props}
					onNextStep={() => { this.onNextStep() }}
					onPreviousStep={() => { this.onPreviousStep() }}
					toggleConfirmModal={() => { this.toggleConfirmModal() }}
					toggleSignatureModal={() => { this.toggleSignatureModal() }}
				/>
				<SignInModalContainer />
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
		nextStep,
		previousStep,
		toggleSignInModal
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
