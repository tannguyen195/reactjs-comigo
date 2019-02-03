import React, { Component } from 'react';
import { Input, Tag, Tooltip, Select } from 'antd'

const Option = Select.Option;


export default class extends Component {
    renderMajor(listData) {
        let children = [];
        for (let i = 0; i < listData.length; i++) {
            children.push(<Option key={listData[i]}>{listData[i]}</Option>);
        }
        return children
    }
    render() {

        const {
            value,
            handleChange,
            listData
        } = this.props
        return (
            <div className="major__container">
                {
                    listData && <Select
                        value={value}
                        mode="multiple"
                        style={{ width: '100%'}}
                        placeholder="Please select"
                        onChange={handleChange}
                    >
                        {
                            this.renderMajor(listData)
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

