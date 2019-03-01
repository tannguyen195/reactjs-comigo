import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import Head from '../head'
import Contact from './Contact'
import _contact from './_contact.less'

class ContactContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                window.location = `mailto:${values.email}?subject=[${values.name}]%20-%20Contact&body=${values.body}`
            }
        });
    }
    render() {

        return (
            <div style={{ height: '100%' }}>
                <style dangerouslySetInnerHTML={{
                    __html: _contact
                }} />
                <Head title="Contact" />
                <Contact
                    handleSubmit={this.handleSubmit}
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ContactContainer));
