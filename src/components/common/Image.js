import React, { Component } from 'react'
import { Card, Row, Col, Tag } from 'antd'
const profileIcon = '/static/images/icon-profile.svg'
export default class extends Component {

    render() {
        const { image, height, width } = this.props

        return (
            <img height={height} width={width} src="avatar" src={image ? image : profileIcon} />
        )
    }
}


