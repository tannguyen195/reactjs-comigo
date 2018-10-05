import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'
import Feature from './Feature'
import _feature from './_feature.less'


class FeatureContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _feature
                }} />
                <Head title="Home page" />
                <Feature
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
export default connect(mapStateToProps, mapDispatchToProps)(FeatureContainer);
