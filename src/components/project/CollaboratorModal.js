import React, { Component } from 'react';
import { Modal, Col, Card, Form, Input, Button } from 'antd'
import Image from '../common/Image'
import _collaborator from './_collaborator.less'
export default class extends Component {
    render() {

        const { visibleCollaborator, toggleCollaborator, collaboratorData, } = this.props;
        return (

            <Modal
                title=""
                visible={visibleCollaborator}
                onOk={toggleCollaborator}
                onCancel={toggleCollaborator}
                footer={null}
            >
                <style dangerouslySetInnerHTML={{
                    __html: _collaborator
                }} />
                {
                    collaboratorData && <div className="collaborator">
                        <div className="H2-Black-Left">Collaborators</div>
                        <div className="collaborator__list">{

                            collaboratorData.map((item, index) => {
                                return <div key={index} className="collaborator__item">
                                    <div className="collaborator__item__info">
                                        <Image image={item.pictureURL} />
                                        <div className="info">
                                            <div className="Body-Black-Left">    {item.firstName + ` ` + item.lastName}</div>
                                            <div className="Caption-Grey-Left">{item.email}</div>
                                        </div>
                                    </div>

                                    <div className="collaborator__item__role Body-Black-Left">
                                        {item.role ? item.role : "Owner"}
                                    </div>
                                </div>
                            })
                        }</div>
                    </div>
                }

            </Modal>

        )
    }
}


