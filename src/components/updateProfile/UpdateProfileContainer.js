import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import Head from '../head'
import UpdateProfile from './UpdateProfile'
import _updateProfile from './_updateProfile.less'
import UploadPhotoContainer from '../common/uploadPhoto/UploadPhotoContainer'
import * as fileAction from '../../actions/file'
import * as userAction from '../../actions/user'
class UpdateProfileContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            links: [],
            skills: [],
            visibleUploadModal: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        const { userData } = nextProps
        if (userData) {
            this.setState({
                skills: userData.skills || [],
                links: userData.links || []
            })

        }
    }
    componentDidMount() {
        const { userData } = this.props
        if (userData) {
            this.setState({
                skills: userData.skills || [],
                links: userData.links || []
            })

        }
    }
    onTagLinkChange = (links) => {
        this.setState({
            links
        })
    }
    onTagSkillChange = (skills) => {
        this.setState({
            skills
        })
    }
    toggleUploadModal = () => {
        this.setState({
            visibleUploadModal: !this.state.visibleUploadModal
        })
    }
    handleSubmit = (e) => {
        const { updateProfile, profilePhoto } = this.props
        const { links, skills } = this.state
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {

            if (!err) {
                updateProfile({
                    links: links,
                    skills: skills,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    bio: values.bio,
                    pictureURL: profilePhoto.cropData
                })
            }
        });
    }



    render() {
        const { visibleUploadModal } = this.state
        const { profilePhoto, changePhoto, getCroppedPhoto, upload, userData } = this.props

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _updateProfile
                }} />
                <Head title="Home page" />
                {
                    userData && <UpdateProfile
                        {...this.state}
                        {...this.props}
                        handleSubmit={this.handleSubmit}
                        toggleUploadModal={this.toggleUploadModal}
                        onTagSkillChange={this.onTagSkillChange}
                        onTagLinkChange={this.onTagLinkChange}
                    />
                }

                <UploadPhotoContainer
                    toggleUploadModal={this.toggleUploadModal}
                    visibleUploadModal={visibleUploadModal}
                />

                <UploadPhotoContainer
                    upload={upload}
                    getCroppedPhoto={getCroppedPhoto}
                    changePhoto={changePhoto}

                    ratio={1}
                    imageUrl={profilePhoto.imageUrl}
                    cropData={profilePhoto.cropData}

                    toggleUploadModal={this.toggleUploadModal}
                    visibleUploadModal={visibleUploadModal} />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        userData: state.user.data,
        profilePhoto: state.file.coverProject,
        status: state.user.status
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...fileAction,
        ...userAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(UpdateProfileContainer));

