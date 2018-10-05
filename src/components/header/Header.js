import React, { Component } from 'react';
import { Link } from 'routes'
class Header extends Component {

    render() {

        const {

            toggleSignInModal
        } = this.props
        return (
            <header className="header-container" >
                <div className="header-max">
                    <div className="header-left">
                        <div className="logo">
                        </div>
                        <div className="logo-name Headline-4LeftBlack-Style">Comigo</div>
                    </div>
                    <div className="header-right">
                        <Link to="/">
                            <a className="header-item Navigation-BarRightBlack-Style">Features</a>
                        </Link>
                        <Link to="about">
                            <a className="header-item Navigation-BarRightBlack-Style">About Us</a>
                        </Link>
                        <Link to="login">
                            <a className="header-item Navigation-BarRightBlack-Style">Log In</a>
                        </Link>
                        <Link to="signUp">
                            <a className="header-item Navigation-BarRightBlack-Style">Get Started</a>
                        </Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
