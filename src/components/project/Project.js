import React, { Component } from 'react'
import { Tabs } from 'antd'

import ProjectDetail from './ProjectDetail'
import Update from './Update'
const TabPane = Tabs.TabPane;
export default class extends Component {

    render() {

        return (
            <div className="project">
                <div className="project__container">
                    <ProjectDetail {...this.props} />
                </div>
            </div>
        )
    }
}


