import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import UpdateCard from './UpdateCard'
import _updateCard from './_updateCard.less'
import EditUpdateModal from './EditUpdateModal'
import EditCommentModal from './EditCommentModal'
import * as projectAction from '../../../actions/project'
import * as toggleAction from '../../../actions/toggle'
class UpdateCardContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editUpdateContent: "",
            editCommentContent: "",
            comment: "",
            isShowMore: false,
            isShowMoreTitle: false,
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.updateData && nextProps.updateData
            !== this.props.updateData) {
            this.setState({
                editUpdateContent: nextProps.updateData.content
            })
        }

        if (nextProps.commentData && nextProps.commentData
            !== this.props.commentData) {
            this.setState({
                editCommentContent: nextProps.commentData.content
            })
        }
    }
    handleShowMore = () => {
        this.setState({
            isShowMore: !this.state.isShowMore
        })
    }
    handleShowMoreTitle = () => {
        this.setState({
            isShowMoreTitle: !this.state.isShowMoreTitle
        })
    }
    handleDeletePost = (e) => {
        const { removeProjectUpdate, detail } = this.props
        removeProjectUpdate({
            "updateID": e._id,
            "projectID": detail._id,
        })
    }
    handleSaveEditUpdate = (e) => {
        const { editProjectUpdate, detail, updateData } = this.props
        editProjectUpdate({
            "updateID": updateData._id,
            "projectID": detail._id,
            "content": this.state.editUpdateContent
        })
    }
    onEditUpdateChange = (e) => {
        this.setState({
            editUpdateContent: e.target.value
        })
    }

    handleDeleteComment = (e) => {
        const { removeComment, data } = this.props

        removeComment({
            "updateID": data._id,
            "commentID": e._id,
        })
    }
    handleSaveEditComment = (e) => {
        const { editComment, data, commentData } = this.props
        editComment({
            "updateID": data._id,
            "commentID": commentData._id,
            "newContent": this.state.editCommentContent
        })
    }
    onEditCommentChange = (e) => {
        this.setState({
            editCommentContent: e.target.value
        })
    }

    handlePostComment = (e) => {

        const { postComment, data, form, isNewFeed, detail, postCommentDetail } = this.props

        e.preventDefault();
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                form.setFieldsValue({

                    "comment": "",
                })
                if (isNewFeed)
                    postComment({
                        "updateID": data._id,
                        "content": values.comment,
                        "projectID": detail._id
                    })
                else
                    postCommentDetail({
                        "updateID": data._id,
                        "content": values.comment,
                        "projectID": detail._id
                    })
            }
        });

    }

    onCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
        if (e.keyCode == 13 && e.shiftKey == false) {
            this.handlePostComment(e)

        }

    }
    handleGetComment = (e) => {
        const { getComment } = this.props
        getComment({ updateID: e })
    }
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{
                    __html: _updateCard
                }} />
                <EditUpdateModal
                    onEditUpdateChange={this.onEditUpdateChange}
                    handleSaveEditUpdate={this.handleSaveEditUpdate}
                    {...this.props}
                    {...this.state} />
                <EditCommentModal
                    onEditCommentChange={this.onEditCommentChange}
                    handleSaveEditComment={this.handleSaveEditComment}
                    {...this.props}
                    {...this.state} />
                <UpdateCard
                    {...this.state}
                    {...this.props}
                    handleShowMoreTitle={this.handleShowMoreTitle}
                    handleShowMore={this.handleShowMore}
                    handleDeletePost={this.handleDeletePost}
                    handleGetComment={this.handleGetComment}
                    handlePostComment={this.handlePostComment}
                    handleDeleteComment={this.handleDeleteComment}

                />


            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        visibleEditUpdate: state.toggle.visibleEditUpdate,
        visibleEditComment: state.toggle.visibleEditComment,
        userData: state.user.data,

        status: state.project.status,
        updateData: state.toggle.updateData,
        commentData: state.toggle.commentData
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...projectAction,
        ...toggleAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(UpdateCardContainer));
