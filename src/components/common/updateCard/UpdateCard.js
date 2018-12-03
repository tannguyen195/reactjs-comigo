import React, { Component } from 'react'
import { Card, Row, Col, Tag } from 'antd'
import Image from '../../common/Image'
import { Link } from 'routes'


const optionIcon = '/static/images/icon-option-2.svg'

export default class extends Component {

    render() {
        const { detail } = this.props
        return (
            <Card bordered={false} className="update__card-container marginTop8">
                <div className="update__header-container">
                    <div className="update__left">
                        <Image image={detail.owner.pictureURL} />
                        <div className="update__title">
                            <div className="Input-Search-Empty">
                                <span className="Text-Style-3">
                                    {detail.owner.firstName + ` ` + detail.owner.lastName + ` `}
                                </span>

                                posted a new update for
                                <span className="text-blue">
                                    {` ` + detail.name}
                                </span>
                                .
                            </div>
                            <div className="Sub-Title-10-Left">2 days ago</div>
                        </div>
                    </div>
                    <div className="update__right">
                        <img alt="option" src={optionIcon} />
                    </div>
                </div>

                <div className="update__body-container Paragraph-12">
                    Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortise nibhing lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus. Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin rutrum, neque sem pretium metus, quis mollis nisl.. view more
                </div>
            </Card>

        )
    }
}


