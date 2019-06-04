import React, { Component } from 'react';
import { Card, Button, Form, Input, } from 'antd'

import Overview from './Overview'
import Collaborator from './Collaborator'
import Media from './Media'
const FormItem = Form.Item;
const profileIcon = '/static/images/icon-project-photo.svg'
const { TextArea } = Input;
const buttons = [
    "Overview", "Collaborators", "Links & Media"
]
export default class extends Component {
    renderTab(step) {
        const {onTabClick} = this.props
        switch (step) {
            case 0: return <Overview {...this.props} />
            case 1: return <Collaborator handleSubmit={onTabClick} {...this.props} />
            case 2: return <Media {...this.props} />
        }
    }
    render() {  
        const {
            handleSubmit,
            step
        } = this.props
        return (
            <div className="new-project ">
                <div className="project-title  H1-Black-Left">Create a Project</div>

                <div className="button__group">
                    {
                        buttons.map((item, index) => {
                            return <Button className={`"Button-White-Center ${step!==index && "not-click"}`} type={step === index ? "primary" : "default"} key={index}>{item}</Button>
                        })
                    }
                </div>
                {this.renderTab(step)}

            </div>

        )
    }
}

