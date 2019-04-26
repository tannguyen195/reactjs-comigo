import React, { Component } from 'react';
import SearchBar from './SearchBar'
import { Button } from 'antd'
const profileIcon = '/static/images/icon-profile.svg'
const multipleIcon = '/static/images/icon-multiple.svg'
const logoIcon = '/static/images/logo.svg'

import { Link } from 'routes'
export default class extends Component {

    render() {

        const {
            logout,
            userData,
            onLogoClick
        } = this.props
        return (
            <header className="header-container" >
                <div className="header-max">
                    <div className="header-left">
                        <Link prefetch to="/">
                            <a onClick={onLogoClick} className="logo">
                                <img src={logoIcon} alt="logo" />
                                <div className="Title-Card">Comigo</div>
                            </a>

                        </Link>
                        <div className="search-container">
                            <SearchBar {...this.props} />
                        </div>

                        {/* <div className="view-button">
                            <img src={multipleIcon} alt="multiple" />
                        </div> */}
                    </div>

                    <div className="header-right">


                        <Link prefetch to="/profile">
                            <a className="header-user">

                                <img alt="avatar" src={userData.pictureURL ? userData.pictureURL : profileIcon} />
                                <div className="user-name">{userData.firstName}</div>
                            </a>
                        </Link>
                        {
                            userData.verified ? <Link to="/new-project">
                                <a ><Button type="primary" className="add-project-button" icon="plus">
                                    PROJECT
                                    </Button></a>
                            </Link> :
                                <a onClick={logout} className="add-project-button">Log out</a>
                        }
                    </div>
                </div>
            </header>
        )
    }
}


