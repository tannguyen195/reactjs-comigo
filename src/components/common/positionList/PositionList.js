import React, { Component } from 'react';
import { Icon, Layout } from 'antd';
import _positionList from './_positionList.less'
const { Sider } = Layout;

const list = [
    {
        ticker: "S&P 500",
        name: `Standard and Poor's`,
        share: 2762.59,
        pl: {
            value: -11.16,
            rate: 0.40,
            isInscrease: true
        }
    }, {
        ticker: "S&P 500",
        name: `Standard and Poor's`,
        share: 2762.59,
        pl: {
            value: -11.16,
            rate: 0.40,
            isInscrease: false
        }
    }, {
        ticker: "S&P 500",
        name: `Standard and Poor's`,
        share: 2762.59, pl: {
            value: -11.16,
            rate: 0.40,
            isInscrease: false
        }
    }, {
        ticker: "S&P 500",
        name: `Standard and Poor's`,
        share: 2762.59, pl: {
            value: -11.16,
            rate: 0.40,
            isInscrease: true
        }
    }, {
        ticker: "S&P 500",
        name: `Standard and Poor's`,
        share: 2762.59, pl: {
            value: -11.16,
            rate: 0.40,
            isInscrease: true
        }
    }, {
        ticker: "S&P 500",
        name: `Standard and Poor's`,
        share: 2762.59, pl: {
            value: -11.16,
            rate: 0.40,
            isInscrease: true
        }
    }, {
        ticker: "S&P 500",
        name: `Standard and Poor's`,
        share: 2762.59, pl: {
            value: -11.16,
            rate: 0.40,
            isInscrease: false
        }
    }, {
        ticker: "S&P 500",
        name: `Standard and Poor's`,
        share: 2762.59, pl: {
            value: -11.16,
            rate: 0.40,
            isInscrease: true
        }
    }, {
        ticker: "S&P 500",
        name: `Standard and Poor's`,
        share: 2762.59, pl: {
            value: -11.16,
            rate: 0.40,
            isInscrease: false
        }
    },
]
class PositionList extends Component {
    renderPositionListItem() {
        return list.map((item, index) => {
            return <div key={index} className="list-item">
                <div className="item-ticker">
                    <div className="BodyMediumBlackLeft">{item.ticker}</div>
                    <div className="CaptionRegularDarkGreyLeft">{item.name}</div>
                </div>
                <div className="item-share">
                    {item.share}
                </div>
                <div className="item-pl">
                    <div >
                        {item.pl.value}
                    </div>
                    <div style={{ color: item.pl.isInscrease ? "#70cc33" : "#e6395c" }} className="rate">
                        <Icon type={item.pl.isInscrease ? "caret-up" : "caret-down"} />{item.pl.rate}%
                    </div>

                </div>
            </div>
        })
    }
    render() {
        const { toggleSidebarPosition, visibleSidebarPosition } = this.props

        return (

            <Sider
                width={360}
                trigger={null}
                collapsedWidth="0"
                collapsible
                collapsed={visibleSidebarPosition}
            >
                <style dangerouslySetInnerHTML={{ __html: _positionList }} />
                <div className="toggle-sider-position" onClick={toggleSidebarPosition} >
                    <Icon type="menu-fold" />
                </div>
                <div className="position-list-container">
                    <div className="position-list-header ">
                        <h6 className="H6BlackLeft">
                            Position List
                    </h6>
                    </div>
                    <div className="position-list-body ">
                        <div className="list-header">
                            <div className="LabelDarkGreyLeft ticker">TICKER</div>
                            <div className="LabelDarkGreyLeft shares">SHARES</div>
                            <div className="LabelDarkGreyLeft ticker">P/L</div>
                        </div>

                        <div className="list-body">
                            {this.renderPositionListItem(list)}

                        </div>
                    </div>
                </div>
            </Sider>
        )
    }
}

export default PositionList;
