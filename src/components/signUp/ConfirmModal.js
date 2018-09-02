import React from 'react'
import { Form, Input, Button, Modal, Icon,  } from 'antd';


export default class extends React.Component {

    render() {
        const {

            visibleConfirm,
            toggleConfirmModal,
            
        } = this.props


        return (
            <div>


                <Modal
                    width={480}
                    visible={visibleConfirm}
                    title='' footer={null}
                    onCancel={toggleConfirmModal}
                    className="modal-body"
                >
                    <div className="confirm-container">
                        <h4 className="H4BlackCenter">Do you agree to the pricing plans?</h4>
                        <div className="Body2RegularDarkGreyCenter">
                            Your subscription fee will be calculated according
                            to your account size.</div>
                        <div className="button-agree">
                            <Button onClick={toggleConfirmModal} className="ButtonNormalBlackCenter">No, I don’t</Button>
                            <Button onClick={toggleConfirmModal} type="primary" className="ButtonNormalWhiteCenter">Yes, Agree</Button>
                        </div>
                    </div>
                </Modal >
            </div>
        )
    }
}
