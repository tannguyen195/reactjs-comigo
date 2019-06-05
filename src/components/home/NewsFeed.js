import React, { Component } from 'react';
import PostCard from '../common/postCard/PostCard'
import { Link } from 'routes'

import People from './People'

import NoResult from '../common/noResult/NoResult'
import JobPost from '../common/jobPost/JobPost'

const loading = '/static/images/loading.gif'
const options = [
    { label: 'All Posts', value: "all" },
    { label: 'Projects', value: "project" },
    { label: 'Jobs', value: "job" },
    { label: 'People', value: "people" },
];
export default class extends Component {
    renderProject = (list) => {
        const { filterValue } = this.props
        return list.map((item, index) => {
            return <Link prefetch key={index} to={"/" + item._id} >
                <a>
                    <PostCard filterValue={filterValue} data={item} /></a>
            </Link >
        })
    }
    renderNewsFeed() {
        const { list, people, jobList, filterValue, status } = this.props

        if (list && list.length === 0)
            return <NoResult />
        else if (status === 'running')
            return <div className="loading-feed">
                <img src={loading} alt="loading" />
            </div>
        else if (filterValue === "all" && list) {

            return <div>
                <div className="H2-Black-Left filter__title">All Posts</div>
                {this.renderProject(list)}
            </div>

        }
        else if (filterValue === "project" && list) {

            return <div>
                <div className="H2-Black-Left filter__title">Projects</div>
                {this.renderProject(list)}
            </div>
        }
        else if (filterValue === "job" && jobList) {

            return <div>
                <div className="H2-Black-Left filter__title">Jobs</div>
                {
                    jobList.map((item, index) => {
                        if (item.postedUserData)
                            return <JobPost key={index} detail={item.projectData} user={item.postedUserData} jobDetail={item} />
                    })
                }
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
