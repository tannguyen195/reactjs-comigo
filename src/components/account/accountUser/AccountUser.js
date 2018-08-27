import React, { PureComponent } from 'react';
import _accountUser from './_accountUser.less'
import { Input, Button } from 'antd'

class AccountUser extends PureComponent {

    render() {
        const {

        } = this.props
        return (
            <div className="account-user-container">
                <style dangerouslySetInnerHTML={{
                    __html: _accountUser
                }} />
                <h4 className="H4BlackLeft">Change Your Password</h4>
                <section className="account-user-body">
                    <div className="input-item">
                        <Input
                            placeholder="Current password"
                            type="password"
                            className="Body2RegularBlack80Left" />
                    </div>

                    <div className="input-item">
                        <Input
                            placeholder="New password"
                            type="password"
                            className="Body2RegularBlack80Left" />
                    </div>
                    <div className="change-button">
                        <Button className="ButtonNormalWhiteCenter" type="primary">
                            CHANGE PASSWORD
                    </Button>
                    </div>
                </section>

            </div>
        )
    }
}

export default AccountUser;
