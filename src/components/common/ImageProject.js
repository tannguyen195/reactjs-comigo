import React, { Component } from 'react'
import { Card, Row, Col, Tag } from 'antd'
const projectIcon = '/static/images/icon-project.svg'
export default class extends Component {

    render() {
        const { image } = this.props
        return (
            <img src="project" src={image ? image : projectIcon} />
        )
    }
}


