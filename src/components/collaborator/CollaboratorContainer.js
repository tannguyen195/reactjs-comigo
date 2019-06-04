import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import Head from '../head'
import Collaborator from './Collaborator'
import _collaborator from './_collaborator.less'
import * as toggleAction from '../../actions/toggle'
import * as projectAction from '../../actions/project'
import CollaboratorRequest from './CollaboratorRequest'
import CollaboratorRemove from './CollaboratorRemove'
import update from 'immutability-helper';

class CollaboratorContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collaborators: []
        }
    }
    componentWillReceiveProps(nextProps) {
        let tempCollaborators = []
        const { detail } = nextProps
        if (detail && detail.shares && detail.shares !== this.props.detail.shares) {

            detail.shares.forEach((item) => {
                tempCollaborators.push({
                    ...item,
                    isChanged: false
                })

            })
            this.setState({
                collaborators: tempCollaborators
            })
        }
        if (nextProps.statusRequest === "success" || nextProps.statusRequest === "error" && this.props.statusRequest !== nextProps.statusRequest) {
            this.props.form.setFieldsValue({
                email: "",
                role: "",
            })
        }
    }
    componentDidMount() {

        const { detail } = this.props
        let tempCollaborators = []
        if (detail) {
            detail.shares.forEach((item) => {
                tempCollaborators.push({
                    ...item,
                    isChanged: false
                })
            })
            this.setState({
                collaborators: tempCollaborators
            })
        }

    }
    onCollaboratorRoleClick = (value) => {
        const { collaborators } = this.state

        !collaborators[collaborators.findIndex((e) => e._id === value._id)].isChanged ?
            this.setState({
                collaborators: update(collaborators, {
                    [collaborators.findIndex((e) => e._id === value._id)]:
                        { isChanged: { $set: !collaborators[collaborators.findIndex((e) => e._id === value._id)].isChanged } }
                })
            }) :
            this.setState({
                collaborators: this.props.detail.shares
            })
    }
    onCollaboratorRoleChange = ({ e, data }) => {
        const { collaborators } = this.state
        this.setState({
            collaborators: update(collaborators, {
                [collaborators.findIndex((value) => value._id === data._id)]:
                    { role: { $set: e.target.value } }
            })
        })

    }
    handleChangeRole = (e) => {
        const { editUserRole, detail } = this.props
        editUserRole({
            projectID: detail._id,
            newRole: e.role,
            collaboratorEmail: e.email
        })
    }
    handleSubmitRequest = (e) => {
        e.preventDefault();
        const { form } = this.props
        form.setFieldsValue({
            "sharedEmail": "",
            "sharedRole": "",
        })
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const { createShareLink, detail } = this.props
                createShareLink({
                    "projectID": detail._id,
                    "sharedEmail": values.email,
                    "sharedRole": values.role,
                    "sendEmail": true
                })
            }
        });
    }
    handleRemoveCollaborator = (e) => {
        const { detail, collaboratorData, removeSharedUser } = this.props
        removeSharedUser({
            "removeUserID": collaboratorData._id,
            "projectID": detail._id
        })
    }
    render() {

        return (
            <div style={{ height: '100%' }}>
                <style dangerouslySetInnerHTML={{
                    __html: _collaborator
                }} />
                <Head title="Collaborator" />
                <Collaborator
                    {...this.state}
                    {...this.props}
                    onCollaboratorRoleChange={this.onCollaboratorRoleChange}
                    onCollaboratorRoleClick={this.onCollaboratorRoleClick}
                    handleChangeRole={this.handleChangeRole}
                />
                <CollaboratorRequest
                    {...this.props}
                    handleSubmitRequest={this.handleSubmitRequest}
                />
                <CollaboratorRemove
                    {...this.props}
                    handleRemoveCollaborator={this.handleRemoveCollaborator} />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        visibleRequestCollaborator: state.toggle.visibleRequestCollaborator,
        visibleRemoveCollaborator: state.toggle.visibleRemoveCollaborator,
        collaboratorData: state.toggle.collaboratorData,
        detail: state.project.detail,
        status: state.project.status,
        statusRequest: state.project.statusRequest,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...toggleAction,
        ...projectAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CollaboratorContainer));
