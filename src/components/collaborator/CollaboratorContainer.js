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
class CollaboratorContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleSubmitRequest = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
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
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...toggleAction,
        ...projectAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CollaboratorContainer));
