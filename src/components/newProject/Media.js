import React, { Component } from 'react';
import { Upload, Button, Form, Input, Icon } from 'antd'
import _media from './_media.less'

const FormItem = Form.Item;

const projectIcon = '/static/images/icon-project-photo.svg'
export default class extends Component {

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const {
            handleBack,
            onTabClick,
            addLink,
            removeLink,
            media,
            statusUpload,
            onMediaChange,
            handleRemoveImage
        } = this.props


        const links = getFieldValue('links') || [];
        const formItems = links.map((k, index) => (
            <div className="form-items" key={k}>


                <FormItem
                    required={false}
                >
                    {getFieldDecorator(`link[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: "Please input link or delete this field.",
                            },
                        ],
                    })(<Input placeholder="Link" style={{ width: "300px", marginRight: "10px" }} />)}

                </FormItem>

                <div>
                    {links.length > 0 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => removeLink(k)}
                        />
                    ) : null}
                </div>
            </div>
        ));

        getFieldDecorator('links', { initialValue: [] });
        return (
            <div className="media">
                <style dangerouslySetInnerHTML={{
                    __html: _media
                }} />
                <div className="H2-Black-Left">Social Links</div>
                <Form className='paddingTop40'>
                    {formItems}

                    <a onClick={addLink} className="">Add Link</a>

                </Form>

                <div className="H2-Black-Left paddingTop40">Media</div>
                <div className="Body-Dark-Grey-Left">You can upload up to 3 photos. We support
.JPG .JPEG .PNG with maximum 2MB/file.</div>
                <div className="upload__holder-container">
                    {
                        media && media.length > 0 && media.map((item, index) => {
                            return <div key={index} className="image__holder">
                                <Icon onClick={()=>handleRemoveImage(index)} type="close-circle" />
                                <img src={item} alt="project" />

                            </div>
                        })
                    }
                    {
                        media.length < 3 && <Upload
                            onChange={(e) => onMediaChange({ ...e, index: 3, uploadType: "mediaNew" })}
                            showUploadList={false}
                        >
                            <div className="upload__holder">
                                {
                                    statusUpload === "running" ? <Icon type="loading" ></Icon> : <img src={projectIcon} alt="project" />
                                }

                                <div className="Link-Button-4">+ Add Photos</div>
                            </div>
                        </Upload>
                    }
                </div>
                <div className="update-button">

                    <div onClick={handleBack} className="skip-button Button-Dark-Grey-Left">Back</div>
                    <div className="next-button">
                        <Button className="Button-White-Center" onClick={onTabClick} htmlType="submit" type="primary">
                            Finish</Button>
                    </div>

                </div>
            </div>

        )
    }
}

