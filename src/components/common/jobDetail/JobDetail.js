import React, { Component } from 'react'
import { Modal } from 'antd'
import _jobDetail from './_jobDetail.less'
const jobIcon = '/static/images/icon-job.svg'
export default class extends Component {

    render() {
        const { jobDetail, visibleJobDetail, toggleJobDetail } = this.props
    
        return (
            <div >
                <style dangerouslySetInnerHTML={{ __html: _jobDetail }} />
                <Modal visible={visibleJobDetail} footer={null} onCancel={toggleJobDetail}>
                    {
                        jobDetail && <div className="job-detail">
                            <div className="job-detail__image">
                                <img src={jobIcon} alt="job" />
                            </div>
                            <div className="H2-Black-Left marginBottom28">{jobDetail.title}</div>

                            <div className="Button-Black-Left">Time Commitment: <span className="Body-Black-Left">{jobDetail.expectedTime}</span></div>
                            <div className="Button-Black-Left marginBottom20">Incentive: <span className="Body-Black-Left">{jobDetail.incentive}</span></div>

                            <div className="H3-Black-Left">Job Description</div>

                            <div className="Body-Black-Left marginBottom20">{jobDetail.description}</div>
                            <div className="H3-Black-Left">Skills & Resources</div>
                            <div className="job-detail__tags">
                                {
                                    jobDetail.tags.map((item, index) => {
                                        return <div key={index} className="job__tag Body-Dark-Grey-Center">{item}</div>
                                    })
                                }
                            </div>
                        </div>
                    }

                </Modal>
            </div>

        )
    }
}


