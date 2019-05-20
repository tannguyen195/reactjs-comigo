import React from 'react'
import { Form, Input, Button, Modal, Icon } from 'antd';
import { Link } from 'routes'
import MajorTagContainer from '../common/majorTag/MajorTagContainer';
const TextArea = Input.TextArea
const FormItem = Form.Item

class PostJobModal extends React.Component {

    render() {
        const {
            onTagSkillChange,
            handlePostJob,
            visiblePostJob,
            status,
            listData,
            skills,
            togglePostJob
        } = this.props

        const { getFieldDecorator, } = this.props.form

        return (
            <div>
                <Modal

                    visible={visiblePostJob}
                    title='' footer={null}
                    onCancel={togglePostJob}
                    className="modal-body"
                    wrapClassName="ant-modal-sign-in"
                >
                    <div className="post-job">

                        <div className="H2-Black-Center">Post a job</div>
                        <div className="Body-Dark-Grey-Center desc">Get some support for your project! What kind of help are you looking for?</div>

                        <div className="form">

                            <Form onSubmit={handlePostJob} >
                                <div >
                                    <div>Job Title</div>
                                    <FormItem>
                                        {getFieldDecorator('title', {
                                            rules: [{ required: true, message: 'Please enter job title!' }],
                                        })(
                                            <Input className="Body2RegularBlack80Left" placeholder="Title" />
                                        )}
                                    </FormItem>
                                </div>

                                <div>
                                    <div className="Body-Dark-Grey-Left">Job Description</div>
                                    <FormItem>
                                        {getFieldDecorator('description', {
                                            rules: [{ required: true, message: 'Please enter job description!' }],
                                        })(
                                            <TextArea className="Body2RegularBlack80Left" placeholder="Description" />
                                        )}
                                    </FormItem>
                                </div>
                                <div>Job Skill</div>
                                <div className="skill-job marginBottom24">

                                    {
                                        listData && <MajorTagContainer
                                            listData={listData.skillData}
                                            value={skills}
                                            text={"Add your strength of skills..."}
                                            onMajorChange={onTagSkillChange}
                                            color="#006cd9"
                                        />
                                    }

                                    {/* <CustomTagContainer
                                    text={"Add your strength of skills..."}
                                    onTagsChange={onTagSkillChange}
                                    tags={skills}
                                /> */}

                                </div>
                                <div className="button-post">

                                    <Button loading={status === "running"}
                                        type="primary" htmlType="submit"
                                        className="Button-White-Center">
                                        POST JOB </Button>

                                </div>


                            </Form>
                        </div>
                    </div>
                </Modal >
            </div>
        )
    }
}

export default PostJobModal