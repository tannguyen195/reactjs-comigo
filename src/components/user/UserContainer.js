import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'
import User from './User'
import * as peopleAction from '../../actions/people'
import * as userAction from '../../actions/user'
import { Router } from 'routes'
import _user from './_user.less'
import _ from 'lodash'

import Loading from '../common/loading/Loading'
class UserContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: null,
            userBadge: null
        }
    }
    static async getInitialProps({ query }) {
        if (query && query.detail)
            return {
                detail: query.detail
            }
        return {}
    }
    componentWillReceiveProps(nextProps) {

        const { peopleDetail, badgeList, userData } = nextProps
        if (peopleDetail && !peopleDetail.nods && badgeList) {
            let temp = []
            nextProps.badgeList.map(item => {
                temp.push({ ...item, count: 0, isChoose: false })
            })
            this.setState({
                userBadge: temp
            })
        }

        else if (peopleDetail && peopleDetail.nods && userData && badgeList) {

            let temp = badgeList
            let choseBadge = []

            temp.map((item, index) => {
                temp[index] = {
                    ...item,
                    isChoose: false
                }
            })

            peopleDetail.nods.map(item => {
                temp.map((node, idx) => {
                    if (item.badgeID === node._id)
                        temp[idx] = {
                            ...node,
                            count: item.count
                        }
                })
                item.nodUserIDs.map(id => {
                    if (id.userID === nextProps.userData._id) {
                        choseBadge.push({ badgeID: item.badgeID, count: item.count })
                    }
                })
            })
         
            temp.map((item, index) => {

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
    componentDidMount() {
        const { getPeopleDetail, } = this.props
        getPeopleDetail(Router.query.id)

    }
    giveUserNod = (badgeID) => {
    
        const { giveBadge, peopleDetail } = this.props

        giveBadge({
            userID: peopleDetail._id,
            badgeID
        })
    }
    render() {
        const { peopleDetail, status } = this.props
        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _user
                }} />
                <Head title="Comigo" />
                {
                    peopleDetail && status !== "running" ?
                        <User
                            {...this.state}
                            {...this.props}
                            giveUserNod={this.giveUserNod}
                        />
                        : <Loading />
                }

            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        status: state.people.status,
        peopleDetail: state.people.peopleDetail,
        badgeList: state.user.badgeList,
        userData: state.user.data
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...peopleAction,
        ...userAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
