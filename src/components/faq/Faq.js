import React, { Component } from 'react';
import { Collapse } from 'antd'
const Panel = Collapse.Panel;
const questions = [
    {
        q: '  Is Comigo free?',
        a: 'Hooray! Comigo is completely free for students. Just be sure to login with your college email address 😊'
    },
    {
        q: 'Is Comigo available to anyone?',
        a: 'Comigo is a student community. Therefore, only students with the email domain of an affiliated college will have the ability to login. Non-student community members do not have access at this time. Just student helping students.'
    },
    {
        q: `Can I see students from other colleges, and can they see me?`,
        a: `Nope! Users can only view other users who go to the same school as them. It’s one of our many efforts to build truly engaged campus communities. `
    },
    {
        q: `I want Comigo on my campus.What do I do?`,
        a: ` We’re glad to hear it! Let 2 people know you’re interested: us(shoot us an email at info@comigo.co) and your university administrator(s).Entrepreneurship professors and directors might be the best bet, but that’s up to you!`
    },
    {
        q: `What could I gain from Comigo ?`,
        a: `- A community that shares your interests
- A team – anything from a volunteer to a co - founder 
- A network to brainstorm ideas, build connections, announce updates, etc.
- Relevant experience – you won’t graduate with a boring resume
- Access to the innovation happening on your campus – from the coolest projects to the awesome people backing them`
    },
    {
        q: `What is Comigo ?`,
        a: `- Crowdsourced peer support on student ideas, projects, and startups
- A tool to find / grow your team & campus network
- A tool to find / support exciting projects
- A resume & experience booster
- A method to post announcements & promotions for your project
- A hub for student innovation, creativity, engineering, and support`
    },
    {
        q: `What is Comigo not ?`,
        a: `- A project management tool.We recommend Trello, Slack, and others for that.
- A tool for collaboration among different universities.For now, users can only see other users on their very own campus.
- Read our community guidelines and Terms & Conditions to learn about what Comigo is not and what our platform will not tolerate.`
    }
]

class Faq extends Component {

    render() {
        const { handleOpen, visibleDrawer, arrayVisible } = this.props
        return (
            <div className="faq-container">
                <div className="faq">
                    <div className="Title-Large-Left-LandingPage faq-header ">Frequently Asked Questions</div>
                    <div className="Body-16-Grey-Left">Can't find answer? Call us at 319-400-9929 or email team@comigo.org!</div>
                    <div className="faq-body">
                        <Collapse onChange={handleOpen} bordered={false} defaultActiveKey={arrayVisible}>
                            {
                                questions.map((item, index) => {
                                    return <Panel
                                        showArrow={false}
                                        header={
                                            <div className="faq-question">
                                                <div className="media-header">
                                                    <div onClick={handleOpen} id={arrayVisible.includes(index.toString()) ? "burger-container-open" : "burger-container"}>
                                                        <div id="burger">
                                                            <span> &nbsp;</span>
                                                            <span> &nbsp;</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="Title-16-Left-Black">{item.q}</div>
                                            </div>
                                        } key={index}>
                                        <div className="faq__answer Body-16-Left">
                                            {item.a}
                                        </div>
                                    </Panel>
                                })
                            }
                        </Collapse>
                    </div>

                </div>

            </div >
        )
    }
}

export default Faq
