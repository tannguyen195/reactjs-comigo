import React, { Component } from 'react';
import { Button, Icon, Dropdown, Menu } from 'antd';
import MediaQuery from 'react-responsive'

import moment from 'moment'

import { Link, Router } from 'routes'

const appLogo = '/static/images/logo-app.svg'
class Header extends Component {

    render() {

        const {

            toggleSignInModal
        } = this.props
        return (
            <header className="header-container" >
                <Link to="/">
                    <a className="header-logo">
                        <img alt="logo-app" src={appLogo} />
                    </a>
                </Link>
                <div className="header-left">
                    <div className="header-routes">
                        <Link to="/">
                            <a className="route-item NavigationDarkGreyCenter">
                                Home
                        </a>
                        </Link>

                        <Link to="/performance">
                            <a className="route-item NavigationDarkGreyCenter">
                                Performance
                        </a>
                        </Link>

                        <Link to="/learn">
                            <a className="route-item NavigationDarkGreyCenter">
                                Learn
                        </a>
                        </Link>
                        <Link to="/pricing">
                            <a className="route-item NavigationDarkGreyCenter">
                                Pricing
                        </a>
                        </Link>

                    </div>
                    <div className="header-auth">
                        <div className="sign-in-button">
                            <Button onClick={toggleSignInModal} className="ButtonSmallBlackCenter">SIGN IN</Button>
                        </div>
                        <div className="sign-up-button ">
                            <Button onClick={() => {
                                Router.push('/signUp')
                            }} className="ButtonSmallWhiteCenter" type="primary">JOIN NOW</Button>
                        </div>


                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
