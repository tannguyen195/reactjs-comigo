import React, { Component } from 'react';
import { AutoComplete, Input, Icon, Select } from 'antd'
export default class extends Component {

    render() {
        const {
            
            visibleProject,
            toggleHomeView
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
                            <div className="search-view">
                                <a onClick={toggleHomeView} className="Body-12">
                                    {
                                        visibleProject === true ? "Project" : "People"
                                    }
                                </a>


                            </div>
                        </div>} />
            </AutoComplete>
        )
    }
}


