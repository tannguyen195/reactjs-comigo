import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import Head from '../head'
import LinkMedia from './LinkMedia'
import _linkMedia from './_linkMedia.less'

class LinkMediaContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            links: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {

            }
        });
    }
    onTagLinkChange = (links) => {
        this.setState({
            links
        })
    }

    render() {

        return (
            <div style={{ height: '100%' }}>
                <style dangerouslySetInnerHTML={{
                    __html: _linkMedia
                }} />
                <Head title="Link & Media" />
                <LinkMedia
                    onTagLinkChange={this.onTagLinkChange}
                    {...this.state}
                    {...this.props}
                />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        detail: state.project.detail,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LinkMediaContainer));
