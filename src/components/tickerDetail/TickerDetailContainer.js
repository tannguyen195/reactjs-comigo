import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TickerDetail from './TickerDetail'

import _tickerDetail from './_tickerDetail.less'


class TickerDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div style={{ width: '100%' }}>

                <style dangerouslySetInnerHTML={{
                    __html: _tickerDetail
                }} />
                <TickerDetail
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
export default connect(mapStateToProps, mapDispatchToProps)(TickerDetailContainer);
