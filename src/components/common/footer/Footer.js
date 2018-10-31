import React, { Component } from 'react'
import _footer from './_footer.less'
import { Link } from 'routes'

const twitterIcon = '/static/images/icon-social-twitter.svg'
const linkedInIcon = '/static/images/icon-social-linkedin.svg'
const facebookIcon = '/static/images/icon-social-facebook.svg'
const youtubeIcon = '/static/images/icon-social-youtube.svg'

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
                            <a>
                                <img alt="icon" src={twitterIcon} />
                            </a>
                            <a>
                                <img alt="icon" src={linkedInIcon} />
                            </a>
                            <a>
                                <img alt="icon" src={youtubeIcon} />
                            </a>


                            <a>
                                <img alt="icon" src={facebookIcon} />
                            </a>


                        </div>
                    </div>
                </div>


            </footer>
        )
    }
}


