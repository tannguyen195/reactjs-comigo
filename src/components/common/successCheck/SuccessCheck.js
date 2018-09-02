import React, { Component } from 'react';
import { Link } from 'routes'
import _successCheck from './_successCheck.less'
export default class extends Component {

    render() {
        const {
            checked
        } = this.props
        let className = checked ? "sa-icon sa-success animate hide" : "sa-icon sa-success animate"
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: _successCheck }} />
            
                    <div className={className}>
                        <span className="sa-line sa-tip animateSuccessTip"></span>
                        <span className="sa-line sa-long animateSuccessLong"></span>
                        <div className="sa-placeholder"></div>
                        <div className="sa-fix"></div>
                    </div>
    
            </div>
        )
    }
}

