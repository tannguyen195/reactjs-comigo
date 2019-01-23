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
            interests: [],
            majors: [],
            graduationYear: "",
            visibleUploadModal: false,
            preloadImage: null
        }
    }

    componentWillReceiveProps(nextProps) {
        const { userData, } = nextProps
        if (userData !== this.props.userData) {
            this.setState({
                interests: userData.interests || [],
                skills: userData.skills || [],
                links: userData.links || [],
                majors: userData.majors || [],
                graduationYear: userData.graduationYear || "",
                preloadImage: userData.pictureURL
            })

        }
        if (nextProps.returnImage != this.props.returnImage)
            this.setState({
                preloadImage: nextProps.returnImage
            })
    }
    componentDidMount() {
        const { userData } = this.props

        if (userData) {
            this.setState({
                interests: userData.interests || [],
                skills: userData.skills || [],
                links: userData.links || [],
                majors: userData.majors || [],
                graduationYear: userData.graduationYear || "",
                preloadImage: userData.pictureURL
            })

        }
    }
    onMajorChange = (majors) => {
        this.setState({
            majors
        })
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
    onTagInterestChange = (interests) => {
        this.setState({
            interests
        })
    }
    toggleUploadModal = () => {
        this.setState({
            visibleUploadModal: !this.state.visibleUploadModal
        })
    }
    handleSubmit = (e) => {
        const { updateProfile, } = this.props
        const { links, skills, preloadImage, majors, interests } = this.state
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {

            if (!err) {
                updateProfile({
                    majors: majors,
                    interests: interests,
                    graduationYear: values.graduationYear,
                    links: links,
                    skills: skills,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    bio: values.bio,
                    pictureURL: preloadImage
                })
            }
        });
    }



    render() {
        const { visibleUploadModal, preloadImage } = this.state
        const { userData, } = this.props

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _updateProfile
                }} />
                <Head title="Update your profile" />
                {
                    userData && <UpdateProfile
                        {...this.state}
                        {...this.props}
                        onMajorChange={this.onMajorChange}
                        handleSubmit={this.handleSubmit}
                        toggleUploadModal={this.toggleUploadModal}
                        onTagSkillChange={this.onTagSkillChange}
                        onTagLinkChange={this.onTagLinkChange}
                        onTagInterestChange={this.onTagInterestChange}
                    />
                }

                <UploadPhotoContainer

                    ratio={1}
                    imageUrl={preloadImage}
                    toggleUploadModal={this.toggleUploadModal}
                    visibleUploadModal={visibleUploadModal} />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        userData: state.user.data,
        status: state.user.status,
        image: state.file.image,
        returnImage: state.file.returnImage
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...fileAction,
        ...userAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(UpdateProfileContainer));

