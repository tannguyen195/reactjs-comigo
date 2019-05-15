import React, { Component } from 'react'
import { Card, Button, Input } from 'antd'
import Image from '../../common/Image'
import { Link } from 'routes'
const profileIcon = '/static/images/icon-profile.svg'
const { TextArea } = Input;

export default class extends Component {

    render() {
        const { userData } = this.props

        return (
            <div className="user-bar">
                <img alt="avatar" src={userData.pictureURL ? userData.pictureURL : profileIcon} />
                <div className="info">
                    <div className="Button-Black-Left">{`${userData.firstName} ${userData.lastName}`}</div>
                    <div className="Caption-Grey-Left">{`${userData.email}`}</div>
                </div>
            </div>

        )
    }
}


