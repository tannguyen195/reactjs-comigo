import React, { Component } from 'react';
import { Row, Col, Card, Upload, Modal, Button, Icon } from 'antd'
import CustomTagContainer from '../common/customTag/CustomTagContainer';
import { endPoint } from '../../../constants/index';
import { Cookies } from 'react-cookie'

const cookies = new Cookies()
const confirm = Modal.confirm;
const projectIcon = '/static/images/icon-project-photo.svg'

export default class extends Component {
    render() {
        const { onTagLinkChange, links, handleSubmit, status, media, onMediaChange, statusUploadImage } = this.props;
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

                            {
                                media.map((item, index) => {
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
                                media.length < 3 && <Upload
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

                                <Button loading={status === 'running'} onClick={handleSubmit} type="primary">
                                    SAVE</Button></div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

