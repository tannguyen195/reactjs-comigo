import React from 'react'
import { Link } from 'routes'
import { Steps, Tabs, } from 'antd';

import SignUp1 from './SignUp1'
import SignUp2 from './SignUp2'
import SignUp3 from './SignUp3'
import SignUp4 from './SignUp4'
import SignUp5 from './SignUp5'
import SignUp6 from './SignUp6'
import SignUp7 from './SignUp7'
import SignUp8 from './SignUp8'
import SignUp9 from './SignUp9'
import SignUp10 from './SignUp10'
import SignUp11 from './SignUp11'
import SignUp12 from './SignUp12'

const appIcon = '/static/images/icon.svg'
const TabPane = Tabs.TabPane;
class SignUp extends React.Component {
    renderSignUpStep(step) {
        switch (step) {
            case 1: return <SignUp1 {...this.props} />;
            case 2: return <SignUp2 {...this.props} />;
            case 3: return <SignUp3 {...this.props} />;
            case 4: return <SignUp4 {...this.props} />;
            case 5: return <SignUp5 {...this.props} />;
            case 6: return <SignUp6 {...this.props} />;
            case 7: return <SignUp7 {...this.props} />;
            case 8: return <SignUp8 {...this.props} />;
            case 9: return <SignUp9 {...this.props} />;
            case 10: return <SignUp10 {...this.props} />;
            case 11: return <SignUp11 {...this.props} />;
            case 12: return <SignUp12 {...this.props} />;
            default: return <SignUp1 {...this.props} />;
        }
    }
    render() {
        const {
            step,

        } = this.props


        return (
            <div className="sign-up-container">
                <div className="sign-up-header">
                    <Link route="/">
                        <a>
                            <img alt="egg" src={appIcon} />
                        </a>
                    </Link>
                </div>

                <div className="sign-up-body">

                    {
                        this.renderSignUpStep(step)
                    }

                </div>
            </div>
        )
    }
}

export default SignUp