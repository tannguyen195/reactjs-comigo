import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from '../head'

import Faq from './Faq'
import _faq from './_faq.less'

class FaqContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleDrawer: false,
            arrayVisible: ["0"]
        }
    }
    handleOpen = (e) => {
        this.setState({
            visibleDrawer: !this.state.visibleDrawer,
            arrayVisible: e
        })
    }
    render() {


        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _faq
                }} />
                <Head title="Faq" />
                <Faq
                    {...this.state}
                    {...this.props}
                    handleOpen={this.handleOpen}
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
export default connect(mapStateToProps, mapDispatchToProps)(FaqContainer);
