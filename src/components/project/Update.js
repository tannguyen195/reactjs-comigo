import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'antd'
import PostUpdate from '../common/postUpdate/PostUpdate'
import UpdateCard from '../common/updateCard/UpdateCard'
import { Link, Router } from 'routes'

export default class extends Component {

    render() {
        const {

        } = this.props
        return (
            <div className="project__update-container">
                <PostUpdate {...this.props} />

                <UpdateCard {...this.props} />
            </div>
        )
    }
}


