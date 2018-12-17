import React, { Component } from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd'
import EditCollaborator from '../common/editCollaborator/EditCollaborator'
import NoResult from '../common/noResult/NoResult'

export default class extends Component {
    render() {

        const { toggleRequestCollaborator, collaborators } = this.props;
        return (
            <div className="collaborator__edit-container">
                <Card className="collaborator__edit marginTop8" bordered={false} >

                    {
                        collaborators.length > 0 ?
                            collaborators.map((item, index) => {
                                return <EditCollaborator {...this.props} key={index} data={item} />
                            }) : <NoResult height="initial" />
                    }

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


