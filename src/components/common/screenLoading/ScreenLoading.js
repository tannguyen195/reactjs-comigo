import React, { Component } from 'react';
import _screenLoading from './_screenLoading.less'
class ScreenLoading extends Component {

    render() {

        return (
            <div className="screen-loading">
                <style dangerouslySetInnerHTML={{ __html: _screenLoading }} />

                <div className="sk-cube-grid">
                    <div className="sk-cube sk-cube1"></div>
                    <div className="sk-cube sk-cube2"></div>
                    <div className="sk-cube sk-cube3"></div>
                    <div className="sk-cube sk-cube4"></div>
                    <div className="sk-cube sk-cube5"></div>
                    <div className="sk-cube sk-cube6"></div>
                    <div className="sk-cube sk-cube7"></div>
                    <div className="sk-cube sk-cube8"></div>
                    <div className="sk-cube sk-cube9"></div>
                </div>
            </div>
        )
    }
}

export default ScreenLoading;
