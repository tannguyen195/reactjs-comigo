import React, { Component } from 'react';
import SearchBar from './SearchBar'
const profileIcon = '/static/images/icon-profile.svg'
const multipleIcon = '/static/images/icon-multiple.svg'
const logoIcon = '/static/images/logo.svg'

import { Link } from 'routes'
export default class extends Component {

    render() {

        const {
            userData
        } = this.props
        return (
            <header className="header-container" >
                <div className="header-max">
                    <div className="header-left">
                        <Link to="/">
                            <a className="logo">
                                <img src={logoIcon} alt="logo" />
                            </a>
                        </Link>
                        <div className="search-container">
                            <SearchBar />
                        </div>

                        <div className="view-button">
                            <img src={multipleIcon} alt="multiple" />
                        </div>
                    </div>

                    <div className="header-right">
                        <Link to="/new-project">
                            <a className="add-project-button">Add project</a>
                        </Link>

                        <Link to="/profile">
                            <a className="header-user">

                                <img alt="avatar" src={userData.pictureURL ? userData.pictureURL : profileIcon} />
                                <div className="user-name">{userData.firstName}</div>
                            </a>
                        </Link>
                    </div>
                </div>
            </header>
        )
    }
}


