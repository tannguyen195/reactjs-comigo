import React, { Component } from 'react';
import _leftBar from './_leftBar.less'
import { Link } from 'routes'
import { Affix } from 'antd'
import UserBar from '../../common/userBar/UserBar'

const addIcon = '/static/images/icon-add.svg'
export default class extends Component {

    render() {
        const { userData } = this.props
        return (
            <Affix offsetTop={30}>
                <div className="left-bar">
                    <style dangerouslySetInnerHTML={{
                        __html: _leftBar
                    }} />

                    <UserBar userData={userData} />

                    <div className="workspace">
                        <div className="title H3-Black-Left">Workspace</div>

                        <div className="workspace__projects">
                            {
                                userData.projects.map((item, index) => {
                                    return <Link prefetch to={"/" + item._id} key={index} >
                                        <a className="project">
                                            <img alt="avatar" src={item.coverURL} />
                                            <div className="info ">
                                                <div className="Button-Black-Left">
                                                    {item.name}
                                                </div>
                                                <div className="Caption-Grey-Left"> {item.shares.length + 1} members</div>
                                            </div>
                                        </a>

                                    </Link>
                                })
                            }
                            <Link prefetch to="/new-project" >
                                <a className="project">
                                    <img alt="avatar" src={addIcon} />
                                    <div className="info ">
                                        <div className="Button-Dark-Grey-Left">
                                            Create Project
                                    </div>

                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>

                </div>
            </Affix>
        )
    }
}
