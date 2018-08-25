import React, { Component } from 'react';
import { Button, Icon, Dropdown, Menu, Layout } from 'antd';
const appLogo = 'static/images/logo-app.svg'
const accountIcon = 'static/images/icon-account.svg'
const chartIcon = 'static/images/icon-chart.svg'
const homeIcon = 'static/images/icon-home.svg'
const learnIcon = 'static/images/icon-learn.svg'

const appIcon = 'static/images/icon.svg'
const { Header, Sider, Content } = Layout;
class Sidebar extends Component {

    render() {
        const { visibleSidebar, handleChangeRoute, toggleSidebar } = this.props
        return (
            <Sider
                width={244}
                trigger={null}
                collapsible
                collapsed={visibleSidebar}
            >
                <div className="toggle-sider" onClick={toggleSidebar} >
                    <Icon type="menu-fold" />
                </div>
                {
                    !visibleSidebar ?
                        <div className="sider-logo" >
                            <img alt="app-logo" src={appLogo} />
                        </div> :
                        <div className="sider-icon" >
                            <img alt="app-logo" src={appIcon} />
                        </div>
                }

                <Menu
                    onClick={handleChangeRoute}
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}>
                    <Menu.Item key="dashboard">
                        <div className="menu-item-sider">
                            <Icon type="home" />
                            <span >Dashboard</span>
                        </div>

                    </Menu.Item>
                    <Menu.Item key="performance">
                        <div className="menu-item-sider">
                            <Icon type="bar-chart" />
                            <span>Performance</span>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="learn">
                        <div className="menu-item-sider">
                            <Icon type="book" />
                            <span >Learn</span>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="account">
                        <div className="menu-item-sider">
                            <Icon type="user" />
                            <span >Account</span>
                        </div>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default Sidebar;
