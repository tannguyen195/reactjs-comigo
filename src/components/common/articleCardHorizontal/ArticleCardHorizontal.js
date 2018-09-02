import React, { Component } from 'react';
import { Link } from 'routes'
export default class extends Component {

    render() {
        const {
            item
        } = this.props
        return (
            <Link to="/learn/1" >
                <a className="article-card-horizontal">
                    <div className="article-image">
                        <img alt="article" src={item.image} />
                    </div>
                    <div className="article-right">
                        <div>
                            <div className="article-info ">
                                <div className="article-type ButtonSmallBlueLeft">{item.type}</div>
                                <div className="date CaptionRegularDarkGreyLeft">{item.date}</div>
                            </div>
                            <h6 className="article-title H6BlackLeft ">
                                {item.title}
                            </h6>
                        </div>
                        <div className="article-desc BodyRegularBlackLeft ">
                            {item.content}
                        </div>
                    </div>
                </a>
            </Link>
        )
    }
}

