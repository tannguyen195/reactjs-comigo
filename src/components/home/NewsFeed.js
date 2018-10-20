import React, { Component } from 'react';
import PostCard from '../common/postCard/PostCard'
import { Modal } from 'antd'
import ProjectDetail from '../common/projectDetail/ProjectDetail'

export default class extends Component {
    renderProject = (list) => {
        const { handleOpenModalProject } = this.props
        return list.map((item, index) => {
            return <div onClick={() => handleOpenModalProject(item)} key={item.id}>
                <PostCard data={item} />
            </div>
        })
    }
    render() {
        const { list, visibleProject, handleCloseModalProject, detail } = this.props
        return (
            <div className="newsfeed-container max-width">
                {
                    this.renderProject(list)
                }
              
            </div>
        )
    }
}
