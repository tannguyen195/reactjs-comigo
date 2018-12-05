import React, { Component } from 'react'
import { Link, } from 'routes'
import { Input, Icon } from 'antd'
import Image from '../Image'
const cancelIcon = '/static/images/icon-cancel-2.svg'
const trashIcon = '/static/images/icon-trash.svg'

export default class extends Component {

    render() {
        
        const {
            data,
            toggleRemoveCollaborator
        } = this.props
        return (
            <div className="edit__collaborator-container">
                <Image image={data.image} />
                <Input value={data.name} disabled className="collaborator__name" />
                <Input value={data.role} className="collaborator__role" />
                <img onClick={() => toggleRemoveCollaborator(data)} src={cancelIcon} alt="cancel" />
            </div>
        )
    }
}


