import React, { Component } from 'react'


import _loading from './_loading.less'

const loading = '/static/images/loading.gif'
export default class extends Component {

    render() {

        return (
            <div className="loading-container">
                <style dangerouslySetInnerHTML={{ __html: _loading }} />
                <img src={loading} alt="loading"/>
            </div>

        )
    }
}


