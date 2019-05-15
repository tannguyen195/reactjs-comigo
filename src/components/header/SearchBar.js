import React, { Component } from 'react';
import { AutoComplete, Input, Icon, } from 'antd'
import { Link } from 'routes'
export default class extends Component {

    render() {
        const {
            onPressEnter,
            onSearchValueChange
        } = this.props
        return (
            <AutoComplete
                dataSource={[]}
                style={{ width: 247 }}
                onSearch={onSearchValueChange}
            >
                <Input
                    onPressEnter={onPressEnter}
                    onChange={onSearchValueChange}
                    placeholder="Search for projects, skills etc."
                    suffix={
                        <div className="siffix-container">
                            <Icon type="search" className="certain-category-icon" />
                        </div>} />
            </AutoComplete>
        )
    }
}


