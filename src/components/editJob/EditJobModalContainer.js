import React, { Component } from 'react'
import EditJobModal from './EditJobModal.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { toggleEditJob, toggleRemoveJob } from '../../actions/toggle'
import { updateJob, deleteJob } from '../../actions/job'
import _editJob from './_editJob.less'


class EditJobModalContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			skills: []
		}
	}
	handleEditJob(e) {
		const { jobDetail } = this.props

		e.preventDefault()
		this.props.form.validateFields((err, values) => {

			if (!err) {
				this.props.updateJob({
					title: values.title,
					description: values.description,
					jobID: jobDetail._id,
					tags: this.state.skills,
					incentive: values.incentive,
					expectedTime: values.expectedTime
				})
			}
		})
	}


	componentWillReceiveProps(nextProps) {
		const { form } = this.props
		const { jobDetail } = nextProps
		if (jobDetail && jobDetail !== this.props.jobDetail) {
			form.setFieldsValue({
				title: jobDetail.title,
				description: jobDetail.description,
				projectID: jobDetail._id,
				tags: jobDetail.tags,
				incentive: jobDetail.incentive,
				expectedTime: jobDetail.expectedTime
			})
			this.setState({
				skills: jobDetail.tags
			})
		}
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
					__html: _editJob
				}} />
				<EditJobModal
					{...this.state}
					{...this.props}

					onTagSkillChange={this.onTagSkillChange}
					handleEditJob={(e) => this.handleEditJob(e)}
				/>
			</div>

		)
	}
}


export function mapStateToProps(state) {
	return {
		visibleEditJob: state.toggle.visibleEditJob,
		status: state.job.status,
		errorMessage: state.user.errorMessage,
		detail: state.project.detail,
		listData: state.project.listData,
		jobDetail: state.toggle.jobDetail
	};
}
export function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		toggleRemoveJob,
		toggleEditJob,
		updateJob,
		deleteJob
	}, dispatch)
}

EditJobModalContainer = Form.create()(EditJobModalContainer)
export default connect(mapStateToProps, mapDispatchToProps)(EditJobModalContainer);
