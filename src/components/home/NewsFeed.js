import React, { Component } from 'react';
import PostCard from '../common/postCard/PostCard'
import { Link } from 'routes'
import { Card, Checkbox, Radio } from 'antd'
import People from './People'
import Loading from '../common/loading/Loading'
import NoResult from '../common/noResult/NoResult'


const options = [
    { label: 'All Posts', value: "all" },
    { label: 'Project', value: "project" },
    { label: 'People', value: "people" },
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
    renderNewsFeed() {
        const { visibleProject, list, people, status, filterValue } = this.props

        if (list.length === 0)
            return <NoResult />
        else if (filterValue === "all" && list) {

            return <div>
                <div className="H2-Black-Left filter__title">All Posts</div>
                {this.renderProject(list)}
            </div>

        }
        else if (filterValue === "project" && list) {

            return <div>
                <div className="H2-Black-Left filter__title">Project</div>
                {this.renderProject(list)}
            </div>
        }
        else if (filterValue === "people" && people)
            return <div>
                <div className="H2-Black-Left filter__title">People</div>
                <People
                    {...this.state}
                    {...this.props}
                />
            </div>

    }
    render() {
        const { list, userData, onFilterChange,
            visibleProject, filterValue } = this.props
    
        return (
            <div className="newsfeed ">
                <div className="newsfeed__header">
                    {
                        options.map((item, index) => {
                            return <a
                                onClick={() => onFilterChange(item.value)}
                                key={index}
                                className={`${filterValue === item.value && "item__clicked"} header__item Button-Black-Center`}>{item.label}</a>
                        })
                    }
                </div>

                {userData &&
                    this.renderNewsFeed()
                }

            </div>
        )
    }
}
