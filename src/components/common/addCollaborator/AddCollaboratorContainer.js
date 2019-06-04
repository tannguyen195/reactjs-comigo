import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import AddCollaborator from './AddCollaborator'
import _addCollaborator from './_addCollaborator.less'

let id = 0;

class AddCollaboratorContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collaborators: []
        }
    }


    removeField = (k) => {
        
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            form.setFieldsValue({
                keys: []   
            })
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };


    render() {

        return (
            <div style={{ height: '100%' }}>
                <style dangerouslySetInnerHTML={{
                    __html: _addCollaborator
                }} />

                <AddCollaborator
                   
                   removeField={this.removeField}
                    add={this.add}
                    {...this.state}
                    {...this.props}

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
export default connect(mapStateToProps, mapDispatchToProps)(AddCollaboratorContainer);
