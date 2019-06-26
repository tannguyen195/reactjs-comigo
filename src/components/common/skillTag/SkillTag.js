import React, { Component } from 'react'
import { Card, Row, Col, Tag, Button } from 'antd'
import Image from '../Image'
import moment from 'moment'
import { Router } from 'routes'

import { searchSkill } from '../../../sagas/search';


export default class extends Component {
    
    handleSearchSkill = (e) => {
      
        window.location.replace("/search?key=" + e.replace(/ /g, '-') + "&skill=true")

    }
    render() {
        const { tags,
        } = this.props

        return (
            <div className="skill-tag">
                {
                    tags.map((item, index) => {
                        return <div key={index} onClick={() => this.handleSearchSkill(item)} className="tag-item Body-Dark-Grey-Center">{item}</div>
                    })
                }
            </div>
        )
    }
}


