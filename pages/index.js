
import HomeContainer from '../src/components/home/HomeContainer'

import DashboardContainer from '../src/components/dashboard/DashboardContainer'


import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class MainPage extends Component {


    render() {
        const { isLoggedIn } = this.props
        return (
            <div style={{ width: '100%' }}>
                {
                    isLoggedIn ? <DashboardContainer /> : <HomeContainer />
                }

            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        isLoggedIn: state.authReducer.isLoggedIn
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
