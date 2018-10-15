import React, { Component } from 'react';
import PostCard from '../common/postCard/PostCard'

export default class extends Component {

    render() {

        return (
            <div className="newsfeed-container max-width">
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
        )
    }
}

