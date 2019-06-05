import React, { Component } from 'react';
import { Modal, Col, Card, Form, Input, Button } from 'antd'
import _jobRemove from './_jobRemove.less'
const FormItem = Form.Item

export default class extends Component {
    render() {

        const { visibleRemoveJob, toggleRemoveJob, jobDetail, handleRemoveJob, statusJob } = this.props;
        return (

            <Modal
                title=""
                visible={visibleRemoveJob}
                onOk={toggleRemoveJob}
                onCancel={toggleRemoveJob}
                footer={null}
            >
                <style dangerouslySetInnerHTML={{
                    __html: _jobRemove
                }} />
                {
                    jobDetail && <div className="job__remove ">
                        <div className="H3-Black-Left marginTop24">Are you sure to remove this job
                        <span className="job__name"> </span>  from this project ?</div>
                        <div className="remove-button__group marginTop32">
                            <Button onClick={toggleRemoveJob} className="cancel">Cancel</Button>
                            <Button loading={statusJob === "running"} onClick={handleRemoveJob} className="remove">Remove</Button>
                        </div>
                    </div>
                }

            </Modal>

        )
    }
}


