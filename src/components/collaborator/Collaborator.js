import React, { Component } from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd'
import EditCollaborator from '../common/editCollaborator/EditCollaborator'
const collaborators = [
    {
        name: "Babila Ebwélé",
        role: "Graphic Designer",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Homura Yunosuke",
        role: "UI Designer",
        image: "https://randomuser.me/api/portraits/men/34.jpg"
    }
    ,
    {
        name: "Daisy Murphy",
        role: "Sale Manager",
        image: "https://randomuser.me/api/portraits/men/31.jpg"
    }
    ,
    {
        name: "Yahiro Ayuko",
        role: "UX Designer",
        image: "https://randomuser.me/api/portraits/men/30.jpg"
    }
    ,
    {
        name: "Isak Johannesson",
        role: "Front-end Developer",
        image: "https://randomuser.me/api/portraits/men/29.jpg"
    }
    ,
    {
        name: "Jube Bowman",
        role: "Back-end Developer",
        image: "https://randomuser.me/api/portraits/men/25.jpg"
    }
]

export default class extends Component {
    render() {

        const { toggleRequestCollaborator, toggleRemoveCollaborator } = this.props;
        return (
            <div className="collaborator__edit-container">
                <Card className="collaborator__edit marginTop8" bordered={false} >

                    {
                        collaborators.map((item, index) => {
                            return <EditCollaborator {...this.props} key={index} data={item} />
                        })
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


