import React, { Component } from 'react';
import { Row, Col, Card, Upload, Modal, Button, Icon } from 'antd'
import CustomTagContainer from '../common/customTag/CustomTagContainer';
import { endPoint } from '../../../constants/index';
import { Cookies } from 'react-cookie'
import { Router } from 'routes'
const cookies = new Cookies()
const confirm = Modal.confirm;
const projectIcon = '/static/images/icon-project-photo.svg'

export default class extends Component {
    render() {
        const { onTagLinkChange, links, handleSubmit, status, media, onMediaChange, statusUploadImage } = this.props;
        return (
            <div className="link-container paddingTop40">


                <div className="links marginTop8">
                    <div className="paddingBottom16 H2-Black-Left">
                        Social Links
                        </div>
                    <div className="links-tag-container">
                        <CustomTagContainer
                            text="Add Link"
                            type="link"
                            onTagsChange={onTagLinkChange}
                            tags={links} />
                    </div>
                </div>



                <div className="links  paddingTop40">
                    <div className="marginBottom8 H2-Black-Left">
                        Media (optional)
    </div>
                    <div className="Body-Dark-Grey-Left">
                        You can upload up to 3 photos, we support .JPG .JPEG .PNG with maximum 2MB/file.
                        </div>


                    <div className="upload__holder-container">

                        {
                            media && media.map((item, index) => {
                                return <Upload
                                    key={index}
                                    onChange={(e) => onMediaChange({ ...e, index })}
                                    showUploadList={false}
                                >
                                    <div className="image__holder">
                                        <img src={item} alt="project" />
                                    </div>
                                </Upload>
                            })
                        }
                        {
                            media ? media.length < 3 && <Upload
                                onChange={(e) => onMediaChange({ ...e, index: 3 })}
                                showUploadList={false}
                            >
                                <div className="upload__holder">
                                    {
                                        statusUploadImage === "running" ? <Icon type="loading" ></Icon> : <img src={projectIcon} alt="project" />
                                    }

                                    <div className="Link-Button-4">+ Add Photos</div>
                                </div>
                            </Upload> : <Upload
                                onChange={(e) => onMediaChange({ ...e, index: 3 })}
                                showUploadList={false}
                            >
                                    <div className="upload__holder">
                                        {
                                            statusUploadImage === "running" ? <Icon type="loading" ></Icon> : <img src={projectIcon} alt="project" />
                                        }

                                        <div className="Link-Button-4">+ Add Photos</div>
                                    </div>
                                </Upload>
                        }


                    </div>
                </div>


                <div className="update-button">
                    <div className="delete-button">

                    </div>
                    <div className="left-button">
                        <a onClick={() => Router.push('/profile')} className="skip-button">Cancel</a>
                        <div className="next-button">

                            <Button className="Button-White-Center" loading={status === 'running'} onClick={handleSubmit} type="primary">
                                SAVE</Button></div>
                    </div>
                </div>

            </div>
        )
    }
}


