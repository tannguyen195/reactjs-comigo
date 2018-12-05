import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'antd'
import PostUpdate from '../common/postUpdate/PostUpdate'
import UpdateCard from '../common/updateCard/UpdateCard'
import EditUpdateModal from './EditUpdateModal'
import { Link, Router } from 'routes'

export default class extends Component {

    render() {
        const {
            detail
        } = this.props
   
        return (
            <div className="project__update-container">
                <EditUpdateModal {...this.props} />
                <PostUpdate {...this.props} />
                {
                    detail.updates.map((item, index) => {
                        return <UpdateCard {...this.props} updateData={item} key={index} />
                    })
                }

            </div>
        )
    }
}


