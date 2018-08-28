import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Sidebar from './Sidebar'
import _sidebar from './_sidebar.less'
import { Router } from 'routes'
import { toggleSidebar } from '../../actions/toggleAction'
class SidebarContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    handleChangeRoute(e) {
        if (e.key === "dashboard")
            Router.pushRoute("/")
        else
            Router.pushRoute("/" + e.key)
    }

    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: _sidebar }} />
                <Sidebar
                    {...this.state}
                    {...this.props}
                    handleChangeRoute={(e) => this.handleChangeRoute(e)}
                  
                />

            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {
        visibleSidebar: state.toggleReducer.visibleSidebar
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleSidebar
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
