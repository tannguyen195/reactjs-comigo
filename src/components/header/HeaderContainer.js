import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './Header'
import LoggedHeader from './LoggedHeader'
import _header from './_header.less'
import { withRouter } from "next/router"

class HeaderContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { isLoggedIn } = this.props
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: _header }} />
                {
                    !isLoggedIn ?
                        <Header
                            {...this.state}
                            {...this.props}
                        /> :
                        <LoggedHeader
                            {...this.state}
                            {...this.props}
                        />

                }

            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
