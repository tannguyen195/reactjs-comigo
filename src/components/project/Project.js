import React, { Component } from 'react'
import { Tabs } from 'antd'

import ProjectDetail from './ProjectDetail'
import Update from './Update'
const TabPane = Tabs.TabPane;
export default class extends Component {

    render() {

        return (
            <div className="project-container">
                <div className="project-tab-container">
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="Information" key="1">
                            <ProjectDetail {...this.props} />
                        </TabPane>
                        <TabPane tab="Update" key="2">
                            <Update {...this.props} />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}


