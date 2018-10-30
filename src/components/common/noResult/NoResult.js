import React, { Component } from 'react'
const logoIcon = '/static/images/logo.svg'

import _noResult from './_noResult.less'

export default class extends Component {

    render() {

        return (
            <div className="no-result__container">
                <style dangerouslySetInnerHTML={{ __html: _noResult }} />
                <img src={logoIcon} alt="logo" />

                <div className="Title-Small-Center announce">It's empty in here.</div>
                <div className="Body-16">Oops! Seems like there's nothing in this page!</div>
            </div>

        )
    }
}


