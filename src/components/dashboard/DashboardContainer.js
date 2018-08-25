import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleSidebarPosition } from '../../actions/toggleAction'


import Dashboard from './Dashboard'
import _dashboard from './_dashboard.less'


class DashboardContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div className="dashboard-container">

                <style dangerouslySetInnerHTML={{
                    __html: _dashboard
                }} />
                <Dashboard
                    {...this.state}
                    {...this.props}

                />
            </div>

        )
    }
}

export function mapStateToProps(state) {
    return {
        visibleSidebarPosition: state.toggleReducer.visibleSidebarPosition
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleSidebarPosition
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
