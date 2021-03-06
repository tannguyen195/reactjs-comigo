import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Head from '../head'
import Profile from './Profile'
import _profile from './_profile.less'
import _ from 'lodash'
import * as userAction from '../../actions/user'
class ProfileContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userBadge: null
        }
    }
    handleLogout = () => {
        const { logout } = this.props

        logout()
    }
    componentWillReceiveProps(nextProps) {

        const { badgeList, userData } = nextProps
        if (userData && badgeList) {
          
            let temp = badgeList
            badgeList.map((item, index) => {
                if (_.find(userData.nods, ['badgeID', item._id])) {
                    temp[index] = {
                        ...temp[index],
                        count: _.find(userData.nods, ['badgeID', item._id]).count
                    }
                }

            })
            this.setState({
                userBadge: temp
            })
        }
    }
    componentDidMount() {

        const { badgeList, userData } = this.props
        if (userData && badgeList) {
           
            let temp = badgeList
            badgeList.map((item, index) => {
                if (_.find(userData.nods, ['badgeID', item._id])) {
                    temp[index] = {
                        ...temp[index],
                        count: _.find(userData.nods, ['badgeID', item._id]).count
                    }
                }

            })
            this.setState({
                userBadge: temp
            })
        }
    }
    render() {
        const { userData } = this.props
       
        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _profile
                }} />
                <Head title="Your portfolio" />
                {
                    userData &&
                    <Profile
                        {...this.state}
                        {...this.props}
                        handleLogout={this.handleLogout}
                    />
                }

            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        userData: state.user.data,
        badgeList: state.user.badgeList
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...userAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
