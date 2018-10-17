import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CustomTag from './CustomTag'
import _customTag from './_customTag.less'

class CustomTagContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVisible: false,
            inputValue: '',

        }
    }

    handleClose = (removedTag) => {
        const tags = this.props.tags.filter(tag => tag !== removedTag);

        this.props.onTagsChange(tags)
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = this.props.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        this.props.onTagsChange(tags)
        this.setState({
            inputVisible: false,
            inputValue: '',
        });
    }

    saveInputRef = input => this.input = input

    render() {

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _customTag
                }} />

                <CustomTag
                    {...this.state}
                    {...this.props}
                    handleClose={this.handleClose}
                    showInput={this.showInput}
                    handleInputChange={this.handleInputChange}
                    handleInputConfirm={this.handleInputConfirm}
                    saveInputRef={this.saveInputRef}
                />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {

    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomTagContainer);
