import React, { Component } from 'react';
import { Link } from 'routes'
const profileIcon = '/static/images/icon-profile.svg'
const logoIcon = '/static/images/logo.svg'


const menuItem = [
    {
        title: "Why Comigo?",
        link: "/why"
    },
    {
        title: "Contact us",
        link: "/contact"
    },
    {
        title: "Log In",
        link: "/login"
    },
]
class Header extends Component {

    render() {

        const {
         
            isLoggedIn
        } = this.props
        return (
            <header className="header-container" >
                <div className="header-max">
                    <div className="header-left">
                        <Link prefetch to="/">
                            <a  className="logo">
                                <img src={logoIcon} alt="logo" />
                            </a>
                        </Link>
                    </div>
                    {
                        !isLoggedIn ?
                            <div className="header-right">
                                {
                                    menuItem.map((item, index) => {
                                        return <Link prefetch key={index} to={item.link}>
                                            <a className="header-item Menu-Button">{item.title}</a>
                                        </Link>
                                    })
                                }
                                <Link prefetch to='/signUp'>
                                    <a className="header-item Menu-Button sign-up__button">Get Started</a>
                                </Link>
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
