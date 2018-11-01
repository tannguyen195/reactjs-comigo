import React, { Component } from 'react';
import { AutoComplete, Input, Icon, } from 'antd'
import { Link } from 'routes'
export default class extends Component {

    render() {
        const {
            onPressEnter,
            visibleProject,
            toggleHomeView,
            onSearchValueChange
        } = this.props
        return (
            <AutoComplete
                dataSource={[]}
                style={{ width: 380 }}
                onSearch={onSearchValueChange}
            >
                <Input
                    onPressEnter={onPressEnter}
                    onChange={onSearchValueChange}
                    placeholder="Search for projects, skills etc."
                    suffix={
                        <div className="siffix-container">
                            <Icon type="search" className="certain-category-icon" />
                            <div className="devider">
                            </div>
                            <div className="search-view">
                                <Link to="/">
                                    <a onClick={toggleHomeView} className="Body-12">
                                        {
                                            visibleProject === true ? "Project" : "People"
                                        }
                                    </a>

                                </Link>
                            </div>
                        </div>} />
            </AutoComplete>
        )
    }
}


