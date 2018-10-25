import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'

import Why from './Why'
import _why from './_why.less'

class WhyContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {


        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _why 
                }} />
                <Head title="Why" />
                <Why
                    {...this.state}
                    {...this.props} />
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
export default connect(mapStateToProps, mapDispatchToProps)(WhyContainer);
