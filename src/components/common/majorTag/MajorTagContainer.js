import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMajorList } from '../../../actions/project'
import MajorTag from './MajorTag'
import _majorTag from './_majorTag.less'

class MajorTagContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVisible: false,
            inputValue: '',
        }
    }


    componentDidMount() {
        this.props.getMajorList()
    }
    handleChange = (e) => {
        this.props.onMajorChange(e)
    }
    render() {

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _majorTag
                }} />

                <MajorTag
                    {...this.state}
                    {...this.props}
                    handleChange={this.handleChange}
                />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        majorList: state.project.majorList
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMajorList
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MajorTagContainer);
