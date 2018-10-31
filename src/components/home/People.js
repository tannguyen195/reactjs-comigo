


import React, { Component } from 'react';
import PeopleCard from '../common/peopleCard/PeopleCard'

export default class extends Component {
    renderPeople = (list) => {
        return list.map((item, index) => {
            return <div key={index}>
                <PeopleCard data={item} />
            </div>
        })
    }
    render() {
        const { people } = this.props
        return (
            <div className="newsfeed-container max-width">
                {
                    this.renderPeople(people)
                }
            </div>
        )
    }
}


