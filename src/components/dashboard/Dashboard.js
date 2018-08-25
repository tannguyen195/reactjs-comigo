import React, { Component } from 'react';
import { Tabs } from 'antd';
import PositionList from '../common/positionList/PositionList'
import Today from './today/Today'
import Past from './past/Past'
import Funding from './funding/Funding'
const TabPane = Tabs.TabPane;


class Dashboard extends Component {
    render() {

        return (

            <div className="dashboard-content">
                <div className="dashboard-header">


                    <Tabs >
                        <TabPane tab="Today" key="1">
                            <div className="tab-container">
                                <Today />
                            </div></TabPane>
                        <TabPane tab="Past" key="2">
                            <div className="tab-container">
                                <Past />
                            </div>
                        </TabPane>
                        <TabPane tab="Funding" key="3">
                            <div className="tab-container">
                                <Funding />
                            </div>
                        </TabPane>
                    </Tabs>

                </div>
                <div>
                    <PositionList {...this.props} />
                </div>
            </div>

        )


    }
}

export default Dashboard
