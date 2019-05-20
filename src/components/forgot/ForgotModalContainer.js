import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ForgotModal from './ForgotModal'

import { Form } from 'antd'
import _forgot from './_forgot.less'
import * as userAction from '../../actions/user'
import { toggleForgotModal } from '../../actions/toggle'
class ForgotModalContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {


		}
	}

	handleForgot = (e) => {
		const { sendPasswordReset } = this.props
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
			
				sendPasswordReset({

					"username": "user",
					"email": values.emailForgot

				})
			}
		})
	}

	render() {
		return (
			<div>
				<style dangerouslySetInnerHTML={{ __html: _forgot }} />
				<ForgotModal
					{...this.state}
					{...this.props}

					handleForgot={this.handleForgot}
				/>
			</div>

		)
	}
}
export function mapStateToProps(state) {
	return {
		visibleForgot: state.toggle.visibleForgot
	};
}
export function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		...userAction,
		toggleForgotModal
	}, dispatch)
}

ForgotModalContainer = Form.create()(ForgotModalContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ForgotModalContainer)