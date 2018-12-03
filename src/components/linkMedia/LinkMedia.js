import React, { Component } from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd'
import EditCollaborator from '../common/editCollaborator/EditCollaborator'
import CustomTagContainer from '../common/customTag/CustomTagContainer';

const projectIcon = '/static/images/icon-project-photo.svg'

export default class extends Component {
    render() {
        const { onTagLinkChange, links } = this.props;
        return (
            <div className="link-container">
                <Card className=" marginTop8" bordered={false} >

                    <div className="links ">
                        <div className="paddingBottom16 Title-Section-Left">
                            Links (optional)
                        </div>
                        <div className="links-tag-container">
                            <CustomTagContainer
                                type="link"
                                onTagsChange={onTagLinkChange}
                                tags={links} />
                        </div>
                    </div>
                </Card>
                <Card className=" marginTop8" bordered={false} >

                    <div className="links ">
                        <div className="marginBottom8 Title-Section-Left">
                            Media (optional)
    </div>
                        <div className="Sub-Title-Left">
                            You can upload up to 3 photos, we support .JPG .JPEG .PNG with maximum 2MB/file.
                        </div>


                        <div className="upload__holder-container">
                            <div className="upload__holder">
                                <img src={projectIcon} alt="project" />
                                <div className="Link-Button-4">+ Add Photos</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}


