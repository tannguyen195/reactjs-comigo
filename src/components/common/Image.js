import React, { Component } from 'react'
import { Card, Row, Col, Tag } from 'antd'
const profileIcon = '/static/images/icon-profile.svg'
export default class extends Component {

    render() {
        const { image } = this.props
        console.log("this", this.props)
        return (
            <img src="avatar" src={image ? image : profileIcon} />
        )
    }
}


