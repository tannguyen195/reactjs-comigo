
import FeatureContainer from '../src/components/feature/FeatureContainer'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class MainPage extends Component {


    render() {
        return (
            <FeatureContainer />
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
