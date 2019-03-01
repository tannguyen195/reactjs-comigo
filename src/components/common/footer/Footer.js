import React, { Component } from 'react'
import _footer from './_footer.less'    
import { Link } from 'routes'


const linkedInIcon = '/static/images/icon-social-linkedin.svg'
const facebookIcon = '/static/images/icon-social-facebook.svg'
const instagramIcon = '/static/images/icon-social-instagram.svg'

export default class extends Component {

    render() {
        return (
            <footer className="footer-container">
                <style dangerouslySetInnerHTML={{ __html: _footer }} />

                <div className="footer-max-width">
                    <div>
                        <Link prefetch to="/why">
                            <a className="Title-14-Left footer-item">Why Comigo?</a>
                        </Link>

                        <Link prefetch to="/contact">
                            <a className="Title-14-Left footer-item">Contact us</a>
                        </Link>

                        <Link prefetch to="/faq">
                            <a className="Title-14-Left footer-item">FAQ?</a>
                        </Link>
                    </div>

                    <div>
                        <div className="social-icon">

                            <a href="https://www.linkedin.com/company/comigoco/" target="_blank">
                                <img alt="icon" src={linkedInIcon} />
                            </a>
                            <a href="https://www.instagram.com/comigo.co/" target="_blank">
                                <img alt="icon" src={instagramIcon} />
                            </a>


                            <a href="https://www.facebook.com/comigo.co/" target="_blank">
                                <img alt="icon" src={facebookIcon} />
                            </a>


                        </div>
                    </div>
                </div>


            </footer>
        )
    }
}


