import React, { Component } from 'react';
import _rightBar from './_rightBar.less'
import { Link } from 'routes'
import { Affix } from 'antd'
import UserBar from '../../common/userBar/UserBar'
export default class extends Component {

    render() {
        const { people,peopleMayKnow } = this.props

        return (
            <Affix offsetTop={30}>
                <div className="right-bar">
                    <style dangerouslySetInnerHTML={{
                        __html: _rightBar
                    }} />

                    <div className="H3-Black-Left">People you may know</div>

                    <div className="people">
                        {
                            peopleMayKnow.map((item, index) => {
                                if (index < 4)
                                    return <UserBar key={index} userData={item} />
                            })
                        }
                    </div>
                </div>
            </Affix>
        )
    }
}
