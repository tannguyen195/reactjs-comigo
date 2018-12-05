import React, { Component } from 'react'
import { Card, Button, Input } from 'antd'
import Image from '../../common/Image'
import { Link } from 'routes'
const { TextArea } = Input;

export default class extends Component {

    render() {
        const { detail, handlePostUpdate, onUpdateChange, updateContent, status } = this.props

        return (
            <Card bordered={false} className="post-update-container">
                <div className="post__content-container">
                    <Image image={detail.owner.pictureURL} />
                    <TextArea onChange={onUpdateChange} value={updateContent} className="Paragraph-12" placeholder="Post something about project update here..." autosize />
                </div>
                <div className="post__button">
                    <Button loading={status === "running"} onClick={handlePostUpdate}>Post</Button>
                </div>
            </Card>

        )
    }
}


