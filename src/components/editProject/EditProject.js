import React, { Component } from 'react';
import { Tabs, Form, Input, Modal } from 'antd'
import LinkMedia from './LinkMedia'
import Information from './Information'
import CollaboratorContainer from '../collaborator/CollaboratorContainer'
const TabPane = Tabs.TabPane;
export default class extends Component {

    render() {
        return (
            <div className="edit-project-container max-width">

                <Tabs className="update__project__tab-container" defaultActiveKey="1" >
                    <TabPane tab="Overview" key="1">
                        <Information {...this.props} />
                    </TabPane>
                    <TabPane tab="Collaborators" key="2">
                        <CollaboratorContainer />
                    </TabPane>
                    <TabPane tab="Links & Media" key="3">
                        <LinkMedia {...this.props} />
                    </TabPane>
                </Tabs>
            </div >

        )
    }
}

