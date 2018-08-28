import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Footer from './Footer'

import { withRouter } from "next/router"
import _footer from './_footer.less'
class FooterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    render() {
        const { router } = this.props

        return (
            router.pathname.includes("/learn")
                || router.pathname.includes("/signUp")
                ?
                <div /> :
                <div>
                    <style dangerouslySetInnerHTML={{ __html: _footer }} />
                    <Footer {...this.state} {...this.props} >

                    </Footer>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FooterContainer));
