import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'antd'
import PostUpdate from '../common/postUpdate/PostUpdate'
import UpdateCardContainer from '../common/updateCard/UpdateCardContainer'

import { Link, Router } from 'routes'

export default class extends Component {

    render() {
        const {
       
            detail,
            edit
        } = this.props

        return (
            <div className="project__update-container">
                
                {
                    edit && <PostUpdate {...this.props} />
                }
                {
                    detail.updates.map((item, index) => {
                        return <UpdateCardContainer detail={detail} edit={edit} data={item} key={index} />
                    })
                }

            </div>
        )
    }
}


