import React, { Component } from 'react';
import { Input, Tag, Tooltip, Select } from 'antd'

const Option = Select.Option;


function handleChange(value) {
    console.log(`selected ${value}`);
}
export default class extends Component {
    renderMajor(majorList) {
        let children = [];
        for (let i = 0; i < majorList.length; i++) {
            children.push(<Option key={majorList[i]}>{majorList[i]}</Option>);
        }
        return children
    }
    render() {
      
        const {
            value,
            handleChange,
            majorList
        } = this.props
        return (
            <div className="major__container">
                {
                    majorList && <Select
                        value={value}
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        onChange={handleChange}
                    >
                        {
                            this.renderMajor(majorList)
                        }

                    </Select>
                }

                {/* {!inputVisible && (
                    <Tag
                        className="new-tag"
                        onClick={showInput}
                        style={{ background: '#fff', borderStyle: type === "link" ? 'solid' : 'dashed' }}
                    >
                        <Icon type="plus" /> {text}</Tag>
                )} */}

            </div>

        )
    }
}

