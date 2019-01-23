import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Head from '../head'
import Profile from './Profile'
import _profile from './_profile.less'

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
        if (userData && userData.nods.length === 0 && badgeList) {
            let temp = []
            nextProps.badgeList.map(item => {
                temp.push({ ...item, count: 0 })
            })
            this.setState({
                userBadge: temp
            })
        }

        else if (userData && userData.nods && badgeList) {

            let temp = badgeList
            let choseBadge = []

            temp.map((item, index) => {
                temp[index] = {
                    ...item,
                    isChoose: false
                }
            })

            userData.nods.map(item => {
                item.nodUserIDs.map(id => {
                    if (id === nextProps.userData._id) {
                        choseBadge.push({ badgeID: item.badgeID, count: item.count })
                    }
                })
            })

            temp.map((item, index) => {
                temp[index] = {
                    ...item,
                    count: 0
                }
                choseBadge.map(badge => {
                    if (badge.badgeID === item._id) {
                        temp[index] = {
                            ...item,
                            isChoose: true,
                            count: badge.count
                        }
                    }
                })
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
        badgeList:state.user.badgeList
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...userAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
