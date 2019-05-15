import React, { Component } from 'react';
import SearchBar from './SearchBar'
import { Button } from 'antd'
const profileIcon = '/static/images/icon-profile.svg'
const multipleIcon = '/static/images/icon-multiple.svg'
const logo = '/static/images/logo-full.svg'

import { Link } from 'routes'
export default class extends Component {

    render() {

        const {
            logout,
            userData,
            onLogoClick
        } = this.props
        return (
            <header className="header" >
                <div className="header__container">
                    <div className="header__container__left">
                        <Link prefetch to="/">
                            <a onClick={onLogoClick} className="logo">
                                <img src={logo} alt="logo" />
                            </a>
                        </Link>

                        <div className="search">
                            <SearchBar {...this.props} />
                        </div>

                        {/* <div className="view-button">
                            <img src={multipleIcon} alt="multiple" />
                        </div> */}
                    </div>

                    <div className="header__container__right">
                        <Link prefetch to="/profile">
                            <a className="user">
                                <img alt="avatar" src={userData.pictureURL ? userData.pictureURL : profileIcon} />
                                <div className="item Button-Dark-Grey-Left">{userData.firstName}</div>
                            </a>
                        </Link>
                        {
                            !userData.verified && 
                                <a onClick={logout} className="add-project-button">Log out</a>
                        }
                    </div>
                </div>
            </header>
        )
    }
}


