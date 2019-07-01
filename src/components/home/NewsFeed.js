import React, { Component } from 'react';
import PostCard from '../common/postCard/PostCard'
import { Link } from 'routes'
import { Spin } from 'antd'
import People from './People'

import NoResult from '../common/noResult/NoResult'
import JobPost from '../common/jobPost/JobPost'
import PeopleCard from '../common/peopleCard/PeopleCard'
import PeopleJoin from '../common/peopleJoin/PeopleJoin'
import UpdateCardContainer from '../common/updateCard/UpdateCardContainer'

const loading = '/static/images/loading.gif'
const options = [
    { label: 'All Posts', value: "all" },
    { label: 'Projects', value: "project" },
    { label: 'Jobs', value: "job" },
    { label: 'People', value: "people" },
];
export default class extends Component {
    renderFeed = (feed) => {
        const { filterValue, toggleJobDetail,
            handleSearchSkill, edit,
            userData } = this.props

        return feed.map((item, index) => {

            switch (item.itemType) {
                case "people":
                    return <PeopleCard key={index} data={item} />
                case "project":
                    return <PostCard
                        key={index}
                        handleSearchSkill={handleSearchSkill}
                        toggleJobDetail={toggleJobDetail}
                        filterValue={filterValue}
                        data={item} />
                case "job":
                    return <JobPost
                        toggleJobDetail={toggleJobDetail}
                        key={index}
                        postedUser={item.postedUserData}
                        user={userData}
                        jobDetail={item} />
                case "collaborator":
                    return <PeopleJoin key={index} data={item} />
                case "update":
                    return <UpdateCardContainer
                        key={index}
                        isNewFeed={true}
                        detail={item.projectData}
                        edit={edit}
                        data={{
                            ...item,
                            comments: [item.comment]
                        }} />
                default: return <div />
            }
        })
    }
    renderProjects = (projects) => {
        const { filterValue, toggleJobDetail,
            handleSearchSkill } = this.props
        return projects.map((item, index) => {
            return <PostCard
                key={index}
                handleSearchSkill={handleSearchSkill}
                toggleJobDetail={toggleJobDetail}
                filterValue={filterValue}
                data={item} />
        }
        )
    }
    renderNewsFeed() {
        const { projects, people, jobList, filterValue, toggleJobDetail, feed,
            statusFeed,
            statusProject,
            statusPeople,
            statusJob,
            userData } = this.props

        if (feed && feed.length === 0)
            return <NoResult />

        else if (filterValue === "all" && feed) {

            return <div>
                <div className="H2-Black-Left filter__title">All Posts</div>
                <Spin spinning={statusFeed === "running"} tip="Loading...">
                    {this.renderFeed(feed)}
                </Spin>
            </div>

        }
        else if (filterValue === "project" && projects) {
            return <div>
                <div className="H2-Black-Left filter__title">Projects</div>
                <Spin spinning={statusProject === "running"} tip="Loading...">
                    {this.renderProjects(projects)}
                </Spin>
            </div>
        }
        else if (filterValue === "job" && jobList) {

            return <div>
                <div className="H2-Black-Left filter__title">Jobs</div>
                <Spin spinning={statusJob === "running"} tip="Loading...">
                    {
                        jobList.map((item, index) => {
                            if (item.postedUserData)
                                return <JobPost
                                    toggleJobDetail={toggleJobDetail}
                                    key={index}
                                    postedUser={item.postedUserData}
                                    user={userData}
                                    jobDetail={item} />
                        })
                    }
                </Spin>
            </div>
        }
        else if (filterValue === "people" && people)
            return <div>
                <div className="H2-Black-Left filter__title">People</div>
                <Spin spinning={statusPeople === "running"} tip="Loading...">
                    <People
                        {...this.state}
                        {...this.props}
                    /></Spin>
            </div>

    }
    render() {
        const { feed, userData, onFilterChange,
            visibleProject, filterValue, } = this.props

        return (
            <div className="newsfeed ">
                {
                    feed && <div className="newsfeed__header">
                        {
                            options.map((item, index) => {
                                return <a
                                    onClick={() => onFilterChange(item.value)}
                                    key={index}
                                    className={`${filterValue === item.value && "item__clicked"} header__item Button-Black-Center`}>{item.label}</a>
                            })
                        }
                    </div>
                }
                {
                    userData && feed &&
                    this.renderNewsFeed()
                }

            </div>
        )
    }
}
