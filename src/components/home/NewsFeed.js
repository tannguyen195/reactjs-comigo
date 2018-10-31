import React, { Component } from 'react';
import PostCard from '../common/postCard/PostCard'
import { Link } from 'routes'


export default class extends Component {
    renderProject = (list) => {

        return list.map((item, index) => {
            return <Link prefetch to={"/" + item._id} key={item.id}>
                <a>
                    <PostCard data={item} /></a>
            </Link >
        })
    }
    render() {
        const { list } = this.props
        return (
            <div className="newsfeed-container max-width">
                {
                    this.renderProject(list)
                }

            </div>
        )
    }
}
