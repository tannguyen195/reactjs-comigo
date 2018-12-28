import React, { Component } from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd'
import EditCollaborator from '../common/editCollaborator/EditCollaborator'
import NoResult from '../common/noResult/NoResult'
import Image from '../common/Image'
export default class extends Component {
    render() {

        const { toggleRequestCollaborator, collaborators, detail } = this.props;
        return (
            <div className="collaborator__edit-container">
                <Card className="collaborator__edit marginTop8" bordered={false} >

                    {
                        collaborators.length > 0 &&
                        collaborators.map((item, index) => {
                            return <EditCollaborator {...this.props} key={index} data={item} />
                        })
                    }
                    {
                        detail && detail.pendingShares && detail.pendingShares.map((item, index) => {
                            return <div key={index} className="pending__collaborator-container">
                                <div className="collaborator__picture"><Image image={item.pictureURL} /></div>
                                <div className="collaborator__pending">
                                    <Input value={item.email} disabled className="collaborator__name" />
                                    <div className="text">Response pending</div>
                                </div>
                                <Input disabled={true}
                                    value={item.role}
                                    className="collaborator__role"
                                />
                            </div>
                        })
                    }
                    {collaborators.length > 0 && detail.pendingShare > 0 && <NoResult height="initial" />}
                </Card>
                <div className="button__send marginTop8">
                    <Button onClick={toggleRequestCollaborator} type="primary">
                        Send a collaboration request
                        </Button>
                </div>
            </div>
        )
    }
}


