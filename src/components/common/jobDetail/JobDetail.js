import React, { Component } from 'react'
import { Modal, Button } from 'antd'
import _jobDetail from './_jobDetail.less'
const jobIcon = '/static/images/icon-job.svg'
export default class extends Component {

    render() {

        const { jobDetail, visibleJobDetail, toggleJobDetail, user, detail } = this.props
    
        const email = jobDetail.postedUserData.email
        const subject = `Interested in your job, ` + jobDetail.title
        const body = `Hi ${jobDetail.postedUserData.firstName}, 

I found your project, ${jobDetail.projectData.name}, on Comigo! I'm really interested in the job you shared, ${jobDetail.title}. If you're still looking for support, it would be great to chat more and see how I can help. Are you available to talk more about this opportunity, maybe this week or next? 

I look forward to hearing from you! 

All the best, 
${user.firstName}`

        return (
            <div >
                <style dangerouslySetInnerHTML={{ __html: _jobDetail }} />
                <Modal visible={visibleJobDetail} footer={null} onCancel={() => toggleJobDetail({ jobDetail: jobDetail })}>
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
                            <a href={`mailto:${email}?subject=Interested in your job ${subject}&body=${body}`}> <Button type="primary" className="Button-White-Center">Apply</Button></a>
                        </div>
                    }

                </Modal>
            </div>

        )
    }
}


