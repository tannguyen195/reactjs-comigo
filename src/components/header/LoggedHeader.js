import React, { Component } from 'react';
import SearchBar from './SearchBar'
const profileIcon = '/static/images/icon-profile.svg'
const multipleIcon = '/static/images/icon-multiple.svg'
const logoIcon = '/static/images/logo.svg'

import { Link } from 'routes'
export default class extends Component {

    render() {

        const {
            toggleSignInModal,
            isLoggedIn
        } = this.props
        return (
            <header className="header-container" >
                <div className="header-max">
                    <div className="header-left">
                        <div className="logo">
                            <img src={logoIcon} alt="logo" />
                        </div>
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
                        <div className="header-user">

                            <img alt="avatar" src={profileIcon} />
                            <div className="user-name">Tan</div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}


