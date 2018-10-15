import React, { Component } from 'react';
import { AutoComplete, Input, Icon, Select } from 'antd'

const Option = Select.Option;
export default class extends Component {

    render() {

        const {
            toggleSignInModal,
            isLoggedIn
        } = this.props
        return (
            <AutoComplete
                dataSource={[]}
                style={{ width: 380 }}

            >
                <Input placeholder="Search for projects, skills etc."
                    suffix={
                        <div className="siffix-container">
                            <Icon type="search" className="certain-category-icon" />
                            <div className="devider">
                            </div>
                            <Select defaultValue="lucy" style={{ minWidth: 60, fontSize: 12 }} >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>Disabled</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>} />
            </AutoComplete>
        )
    }
}


