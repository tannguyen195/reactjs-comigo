import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'
import About from './About'
import _about from './_about.less'


class AboutContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _about
                }} />
                <Head title="Home page" />
                <About
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
export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
