import React, { Component } from 'react';
import { Link } from 'routes'
class ArticleCard extends Component {

    render() {
        const {
            item
        } = this.props
        return (
            <Link route="/learn/nice">
                <div className="article-card">
                    <div className="article-image">
                        <img alt="article" src={item.image} />
                    </div>

                    <div className="article-info ">
                        <div className="article-type ButtonSmallBlueLeft">{item.type}</div>
                        <div className="CaptionRegularDarkGreyLeft">{item.date}</div>
                    </div>
                    <h5 className="article-title H5BlackLeft ">
                        {item.title}
                    </h5>
                </div>
            </Link>
        )
    }
}

export default ArticleCard;
