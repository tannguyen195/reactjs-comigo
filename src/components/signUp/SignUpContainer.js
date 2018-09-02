import React, { Component } from 'react'
import SignUp from './SignUp.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'

import _signUp from './_signUp.less'

class SignUpContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			step: 1,
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
		this.setState({
			step: this.state.step + 1
		})
	}

	onPreviousStep() {
		this.setState({
			step: this.state.step - 1
		})
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

	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
