import React from 'react'
import { Form, Input, Button, Modal, Tabs, Upload, Icon } from 'antd';
import SignatureCanvas from 'react-signature-canvas'

const TabPane = Tabs.TabPane
const Dragger = Upload.Dragger;

const props = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export default class extends React.Component {
    renderDrawSignature() {
        const {

            toggleSignatureModal
        } = this.props

        return <div className="draw-container">
            <h4 className="H4BlackCenter">Draw Your Signature</h4>
            <div className="Body2RegularDarkGreyCenter">
                Slowly sign your signature in the box below</div>
            <div className="signature-pad">
                <SignatureCanvas penColor='green'
                    canvasProps={{ width: 400, height: 200, className: 'sigCanvas' }} />
            </div>

            <div className="button-apply">
                <Button onClick={toggleSignatureModal} type="primary" className="ButtonNormalWhiteCenter">APPLY</Button>
            </div>
        </div>

    }
    renderUploadSignature() {
        const {

            toggleSignatureModal
        } = this.props

        return <div className="draw-container">
            <h4 className="H4BlackCenter">Use Your Signature Image</h4>
            <div className="Body2RegularDarkGreyCenter">
                Image types can included PNG, JPG, JPEG</div>
            <div className="signature-pad">
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>

                </Dragger>
            </div>
            <div className="button-apply">
                <Button onClick={toggleSignatureModal} type="primary" className="ButtonNormalWhiteCenter">APPLY</Button>
            </div>
        </div>

    }
    render() {
        const {

            visibleSignature,
            toggleSignatureModal
        } = this.props

        return (
            <div>

                <Modal
                    width={540}
                    visible={visibleSignature}
                    title='' footer={null}
                    onCancel={toggleSignatureModal}
                    className="modal-body"
                >

                    <div className="signature-container">
                        <Tabs defaultActiveKey="1" >
                            <TabPane tab="Draw Your Own" key="1">
                                {this.renderDrawSignature()}
                            </TabPane>
                            <TabPane tab="Upload Image" key="2">
                                {this.renderUploadSignature()}
                            </TabPane>
                        </Tabs>
                    </div>

                </Modal >
            </div>
        )
    }
}
