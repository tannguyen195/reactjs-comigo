import React, { Component } from 'react';
import PostCard from '../common/postCard/PostCard'
import { Link } from 'routes'
import { Card, Checkbox, Radio } from 'antd'
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const options = [
    { label: 'Project', value: false },
    { label: 'People', value: true },
];
export default class extends Component {
    renderProject = (list) => {

        return list.map((item, index) => {
            return <Link prefetch key={index} to={"/" + item._id} >
                <a>
                    <PostCard data={item} /></a>
            </Link >
        })
    }

    render() {
        const { list, userData, onFilterChange,
            visibleProject } = this.props
        return (
            <div className="newsfeed-container ">

                {userData &&
                    this.renderProject(list)
                }

            </div>
        )
    }
}
