import React, { Component } from 'react'
import { Link, } from 'routes'
import { Input, Icon } from 'antd'
import Image from '../Image'
const cancelIcon = '/static/images/icon-cancel-2.svg'
const trashIcon = '/static/images/icon-trash.svg'
const editIcon = '/static/images/icon-edit.svg'
const checkIcon = '/static/images/icon-check-2.svg'
export default class extends Component {

    render() {

        const {
            data,
            toggleRemoveCollaborator,
            onCollaboratorRoleChange,
            onCollaboratorRoleClick,
            handleChangeRole
        } = this.props
        return (
            <div className="edit__collaborator-container">
                <div className="collaborator__picture">
                    <Image image={data.pictureURL} />
                </div>
                <div className="collaborator__info">
                    <div className="Body-Black-Left">    {data.firstName + ` ` + data.lastName}</div>
                    <div className="Caption-Grey-Left">{data.email}</div>
                </div>

                <Input
                    onChange={(e) => onCollaboratorRoleChange({ e, data })}
                    disabled={!data.isChanged}
                    value={data.role}
                    className="collaborator__role"
                    suffix={!data.isChanged ? <img onClick={() => onCollaboratorRoleClick(data)} src={editIcon} alt="edit" /> :
                        <img onClick={() => onCollaboratorRoleClick(data)} src={cancelIcon} alt="cancel" />} />
                {
                    !data.isChanged ?
                        <div className="edit__options">
                            <img onClick={() => toggleRemoveCollaborator(data)} src={trashIcon} alt="delete" />
                        </div>
                        :
                        <div className="edit__options">
                            <img onClick={() => handleChangeRole(data)} src={checkIcon} alt="check" />
                        </div>


                }

            </div>
        )
    }
}


