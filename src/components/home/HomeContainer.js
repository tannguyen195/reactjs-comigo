import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'

import NewsFeed from './NewsFeed'
import _newsFeed from './_newsFeed.less'

import Home from './Home'
import _home from './_home.less'


class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { isLoggedIn } = this.props
       
        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _home + _newsFeed
                }} />
                <Head title="Home page" />

                {
                    isLoggedIn ?
                        <NewsFeed
                            {...this.state}
                            {...this.props}

                        /> :
                        <Home
                            {...this.state}
                            {...this.props}

                        />}
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
