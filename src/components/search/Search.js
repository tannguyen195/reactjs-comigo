import React, { Component } from 'react';
import { Spin } from 'antd'
import PostCard from '../common/postCard/PostCard'
import JobPost from '../common/jobPost/JobPost'
import PeopleCard from '../common/peopleCard/PeopleCard'
import PeopleJoin from '../common/peopleJoin/PeopleJoin'
import UpdateCardContainer from '../common/updateCard/UpdateCardContainer'
export default class extends Component {

    renderFeed = (feed) => {
        const { filterValue, toggleJobDetail,
            handleSearchSkill, edit } = this.props

        return feed.map((item, index) => {

            switch (item.itemType) {
                case "people":
                    return <PeopleCard
                        key={index}
                        data={item} />
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
                        detail={item.projectData}
                        user={item.postedUserData}
                        jobDetail={item} />
                case "collaborator":
                    return <PeopleJoin
                        key={index}
                        data={item} />
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

    render() {
        const {

            status,

            searchResult,
        } = this.props;

        return (
            <div className="search__result">
                <div className="H2-Black-Left">Search Result</div>
                <Spin spinning={status === "running"} tip="Searching...">


                    <div className="search__result__body">

                        {
                            searchResult && this.renderFeed(searchResult)
                        }
                    </div>
                </Spin>
            </div>
        )
    }
}


