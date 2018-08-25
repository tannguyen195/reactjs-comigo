import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Account from './Account'
import _accounnt from './_account.less'

import { logout } from '../../api/authApi'
class AccountContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contentKey: 'profile'
        }
    }
    onMenuContentChange(e) {
        this.setState({
            contentKey: e.key
        })
    }
    render() {
        return (
            <div style={{ width: '100%' }}>

                <style dangerouslySetInnerHTML={{
                    __html: _accounnt
                }} />
                <Account
                    {...this.state}
                    {...this.props}
                    onMenuContentChange={(e) => this.onMenuContentChange(e)}
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
        logout
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
