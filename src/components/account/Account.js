import React, { Component } from 'react';

import { Menu, Icon, Button } from 'antd';
import Profile from './Profile'
import AccountUser from './AccountUser'
import Banking from './Banking'
import Notification from './Notification'
import Friend from './Friend'
import CloseAccount from './CloseAccount'
class Account extends Component {
    renderMenuContent() {
        const { contentKey, logout } = this.props
        switch (contentKey) {
            case 'profile':
                return <Profile />
            case 'account':
                return <AccountUser />
            case 'banking':
                return <Banking />
            case 'noti':
                return <Notification />
            case 'friend':
                return <Friend />
            case 'logout':
                logout()
                return;
            case 'close':
                return <CloseAccount />
            default: return
        }

    }
    render() {
        const { onMenuContentChange } = this.props

        return (
            <div>
                <div className="main-wrapper body-content account-container">
                    <div className="account-menu-container">

                        <Menu
                            defaultSelectedKeys={['profile']}
                            onClick={onMenuContentChange}
                        >
                            <Menu.Item key="profile">
                                <div className="menu-item-sider">
                                    <Icon type="user-add" />
                                    <span >Profile</span>
                                </div>

                            </Menu.Item>
                            <Menu.Item key="account">
                                <div className="menu-item-sider">
                                    <Icon type="lock" />
                                    <span >Account</span>
                                </div>

                            </Menu.Item>
                            <Menu.Item key="banking">
                                <div className="menu-item-sider">
                                    <Icon type="credit-card" />
                                    <span >Banking</span>
                                </div>

                            </Menu.Item>
                            <Menu.Item key="noti">
                                <div className="menu-item-sider">
                                    <Icon type="notification" />
                                    <span >Notifications</span>
                                </div>

                            </Menu.Item>
                            <Menu.Item key="friend">
                                <div className="menu-item-sider">
                                    <Icon type="user-add" />
                                    <span >Refer Friends</span>
                                </div>

                            </Menu.Item>
                            <Menu.Item key="logout">
                                <div className="menu-item-sider">
                                    <Icon type="logout" />
                                    <span >Log out</span>
                                </div>

                            </Menu.Item>
                            <Menu.Item style={{ marginTop: '80px' }} key="close">
                                <div className="menu-item-sider close">
                                    <Icon type="delete" />
                                    <span >Close Account</span>
                                </div>

                            </Menu.Item>
                        </Menu>
                    </div>

                    <div className="account-content">
                        {
                            this.renderMenuContent()
                        }
                    </div>
                </div>

            </div >
        )


    }
}

export default Account
