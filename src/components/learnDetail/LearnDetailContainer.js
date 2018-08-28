import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LearnDetail from './LearnDetail'

import _learnDetail from './_learnDetail.less'

class LearnDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div style={{ width: '100%' }}>

                <style dangerouslySetInnerHTML={{
                    __html: _learnDetail
                }} />

                <LearnDetail
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
export default connect(mapStateToProps, mapDispatchToProps)(LearnDetailContainer);
