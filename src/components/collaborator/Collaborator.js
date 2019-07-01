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
                <div className="H2-Black-Left">Members</div>
                <div className="collaborator__edit marginTop8"  >

                    {
                        collaborators.length > 0 &&
                        collaborators.map((item, index) => {
                            return <EditCollaborator {...this.props} key={index} data={item} />
                        })
                    }

                    <div className="Button-Black-Left paddingBottom20">Pending member</div>
                    {
                        detail && detail.pendingShares && detail.pendingShares.map((item, index) => {
                            return <div key={index} className="pending__collaborator-container">
                                <div className="collaborator__picture">
                                    <Image image={item.pictureURL} /></div>
                                <div className="collaborator__pending">

                                    <div className="collaborator__info">
                                        <div className="Body-Black-Left">    {item.firstName + ` ` + item.lastName}</div>
                                        <div className="Caption-Grey-Left">{item.email}</div>
                                    </div>

                                </div>
                                <div className="Body-Black-Left">{item.role}</div>

                            </div>
                        })
                    }
                    {collaborators.length > 0 && detail.pendingShare > 0 && <NoResult height="initial" />}
                </div>
                
            </div>
        )
    }
}


