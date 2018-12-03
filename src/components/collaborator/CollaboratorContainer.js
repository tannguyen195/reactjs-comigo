import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import Head from '../head'
import Collaborator from './Collaborator'
import _collaborator from './_collaborator.less'
import * as toggleAction from '../../actions/toggle'
import CollaboratorRequest from './CollaboratorRequest'
import CollaboratorRemove from './CollaboratorRemove'
class CollaboratorContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
            }
        });
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
                <CollaboratorRequest {...this.props} />
                <CollaboratorRemove {...this.props} />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        visibleRequestCollaborator: state.toggle.visibleRequestCollaborator,
        visibleRemoveCollaborator: state.toggle.visibleRemoveCollaborator,
        collaboratorData: state.toggle.collaboratorData,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...toggleAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CollaboratorContainer));
