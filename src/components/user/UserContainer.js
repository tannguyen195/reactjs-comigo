import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'
import User from './User'
import * as peopleAction from '../../actions/people'
import { Router } from 'routes'
import _user from './_user.less'
import _ from 'lodash'

import Loading from '../common/loading/Loading'
class UserContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: null
        }
    }
    static async getInitialProps({ query }) {
        if (query && query.detail)
            return {
                detail: query.detail
            }
        return {}
    }
    componentDidMount() {
        const { getPeopleDetail } = this.props
        getPeopleDetail(Router.query.id)
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
        peopleDetail: state.people.peopleDetail
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...peopleAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
