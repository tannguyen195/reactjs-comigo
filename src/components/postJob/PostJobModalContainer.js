import React, { Component } from 'react'
import PostJobModal from './PostJobModal.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { togglePostJob } from '../../actions/toggle'
import { postJob } from '../../actions/job'
import _postJob from './_postJob.less'


class PostJobModalContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			skills: []
		}
	}
	handlePostJob(e) {
		const { detail } = this.props
		
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.postJob({
					title: values.title,
					description: values.description,
					projectID: detail._id,
					tags: this.state.skills,
				})
			}
		})
	}

	onTagSkillChange = (skills) => {
		this.setState({
			skills
		})
	}
	render() {
		return (
			<div>
				<style dangerouslySetInnerHTML={{
					__html: _postJob
				}} />
				<PostJobModal
					{...this.state}
					{...this.props}
					onTagSkillChange={this.onTagSkillChange}
					handlePostJob={(e) => this.handlePostJob(e)}
				/>
			</div>

		)
	}
}


export function mapStateToProps(state) {
	return {
		visiblePostJob: state.toggle.visiblePostJob,
		status: state.job.status,
		errorMessage: state.user.errorMessage,
		detail: state.project.detail,
		listData: state.project.listData
	};
}
export function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		togglePostJob,
		postJob
	}, dispatch)
}

PostJobModalContainer = Form.create()(PostJobModalContainer)
export default connect(mapStateToProps, mapDispatchToProps)(PostJobModalContainer);
