import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from './Home'

import _home from './_home.less'


class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
       
        }
    }

    render() {

        return (
            <div>

                <style dangerouslySetInnerHTML={{
                    __html: _home
                }} />
                <Home
                    {...this.state}
                    {...this.props}

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
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
