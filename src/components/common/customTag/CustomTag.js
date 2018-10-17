import React, { Component } from 'react';
import { Input, Tag, Icon, Tooltip } from 'antd'

export default class extends Component {

    render() {
        const {

            handleInputChange,
            handleInputConfirm,
            handleClose,
            tags,
            inputVisible,
            saveInputRef,
            showInput,
            inputValue,

            type,
        } = this.props
        return (
            <div>
                {tags.map((tag, index) => {
                    const isLongTag = tag.length > 20;
                    const tagElem = (
                        <Tag key={tag} closable afterClose={() => handleClose(tag)}>
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </Tag>
                    );
                    return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                })}
                {inputVisible && (
                    <Input
                        ref={saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: type === "link" ? 200 : 80}}
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputConfirm}
                        onPressEnter={handleInputConfirm}
                    />
                )}
                {!inputVisible && (
                    <Tag
                        className="new-tag"
                        onClick={showInput}
                        style={{ background: '#fff', borderStyle: type === "link" ? 'solid' : 'dashed' }}
                    >
                        <Icon type="plus" /> {type === "link" ? "Add Link" : "Add Skill"}</Tag>
                )}

            </div>

        )
    }
}

