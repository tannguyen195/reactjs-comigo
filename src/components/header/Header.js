import React, { Component } from 'react';
import { Link } from 'routes'
const profileIcon = '/static/images/icon-profile.svg'
const logoIcon = '/static/images/logo.svg'


const menuItem = [
    {
        title: "Why Comigo?",
        link: "/"
    },
    {
        title: "Contact us",
        link: "/contact"
    },
    {
        title: "Log In",
        link: "/login"
    },
    {
        title: "Get Started",
        link: "/signUp"
    }
]
class Header extends Component {

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

                    </div>
                    {
                        !isLoggedIn ?
                            <div className="header-right">
                                {
                                    menuItem.map((item, index) => {
                                        return <Link key={index} to={item.link}>
                                            <a className="header-item Menu-Button">{item.title}</a>
                                        </Link>
                                    })
                                }
                            </div> :
                            <div className="header-right">
                                <div className="header-user">
                                    <img alt="avatar" src={profileIcon} />
                                    <div className="user-name">Tan</div>
                                </div>
                            </div>
                    }

                </div>
            </header>
        )
    }
}

export default Header;
