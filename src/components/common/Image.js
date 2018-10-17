import React, { Component } from 'react'
import { Card, Row, Col, Tag } from 'antd'
const profileIcon = '/static/images/icon-profile.svg'
export default class extends Component {

    render() {
        const { imageURL } = this.props
        return (
            <img src="avatar" src={imageURL ? imageURL : profileIcon} />
        )
    }
}


