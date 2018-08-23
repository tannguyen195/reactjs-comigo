import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Pricing from './Pricing'

import _pricing from './_pricing.less'


class PricingContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div>

                <style dangerouslySetInnerHTML={{
                    __html: _pricing
                }} />
                <Pricing
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
export default connect(mapStateToProps, mapDispatchToProps)(PricingContainer);
