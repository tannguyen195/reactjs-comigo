import React, { Component } from 'react';
import { Input, Row, Col, Select, Radio, Button } from 'antd'
import _profile from './_profile.less'
const RadioGroup = Radio.Group;
class Profile extends Component {

    render() {
        const {

        } = this.props
        return (
            <div className="profile-container">
                <style dangerouslySetInnerHTML={{
                    __html: _profile
                }} />
                <h4 className="H4BlackLeft">Profile</h4>

                <section className="profile-body">
                    <h6 className="H6BlackLeft">Your Info</h6>

                    <Row gutter={40}>
                        <Col className="input-item" lg={12} md={12}>
                            <div className="input-title LabelDarkGreyLeft">First Legal Name</div>
                            <Input
                                className="Body2RegularBlack80Left" />
                        </Col>
                        <Col className="input-item" lg={12} md={12}>
                            <div className="input-title LabelDarkGreyLeft">Last Legal Name</div>
                            <Input
                                className="Body2RegularBlack80Left" />
                        </Col>
                    </Row>
                    <div className="input-item" lg={12} md={12}>
                        <div className="input-title LabelDarkGreyLeft">Address</div>
                        <Input
                            className="Body2RegularBlack80Left" />
                    </div>
                    <Row gutter={40}>
                        <Col className="input-item" lg={8} md={8}>
                            <div className="input-title LabelDarkGreyLeft">City</div>
                            <Select className="BodyMediumBlackLeft" defaultValue="American Bank">
                                <Option value="American Bank">Iowa</Option>
                                <Option value="Vietcombank">HCMC</Option>
                                <Option value="Agribank" >Denver</Option>
                            </Select>
                        </Col>
                        <Col className="input-item" lg={8} md={8}>
                            <div className="input-title LabelDarkGreyLeft">City</div>
                            <Select className="BodyMediumBlackLeft" defaultValue="American Bank">
                                <Option value="American Bank">Iowa</Option>
                                <Option value="Vietcombank">HCMC</Option>
                                <Option value="Agribank" >Denver</Option>
                            </Select>
                        </Col>
                        <Col className="input-item" lg={8} md={8}>
                            <div className="input-title LabelDarkGreyLeft">Zip code</div>
                            <Input
                                className="Body2RegularBlack80Left" />
                        </Col>
                    </Row>

                    <div className="input-item" >
                        <div className="input-title resident LabelDarkGreyLeft">Resident</div>
                        <RadioGroup value={1}>
                            <Radio value={1}>US Citizen</Radio>
                            <Radio value={2}>Green Card holder</Radio>

                        </RadioGroup>

                    </div>
                </section>

                <section className="profile-body">
                    <h6 className="H6BlackLeft">Financial Info</h6>

                    <Row gutter={40}>
                        <Col className="input-item" lg={12} md={12}>
                            <div className="input-title LabelDarkGreyLeft">Employment</div>
                            <Select className="BodyMediumBlackLeft" defaultValue="American Bank">
                                <Option value="American Bank">Iowa</Option>
                                <Option value="Vietcombank">HCMC</Option>
                                <Option value="Agribank" >Denver</Option>
                            </Select>
                        </Col>
                        <Col className="input-item" lg={12} md={12}>
                            <div className="input-title LabelDarkGreyLeft">Net worth</div>
                            <Select className="BodyMediumBlackLeft" defaultValue="American Bank">
                                <Option value="American Bank">Iowa</Option>
                                <Option value="Vietcombank">HCMC</Option>
                                <Option value="Agribank" >Denver</Option>
                            </Select>
                        </Col>
                    </Row>

                    <Row gutter={40}>
                        <Col className="input-item" lg={12} md={12}>
                            <div className="input-title LabelDarkGreyLeft">Age</div>
                            <Select className="BodyMediumBlackLeft" defaultValue="American Bank">
                                <Option value="American Bank">Iowa</Option>
                                <Option value="Vietcombank">HCMC</Option>
                                <Option value="Agribank" >Denver</Option>
                            </Select>
                        </Col>
                        <Col className="input-item" lg={12} md={12}>
                            <div className="input-title LabelDarkGreyLeft">Yearly Income</div>
                            <Select className="BodyMediumBlackLeft" defaultValue="American Bank">
                                <Option value="American Bank">Iowa</Option>
                                <Option value="Vietcombank">HCMC</Option>
                                <Option value="Agribank" >Denver</Option>
                            </Select>
                        </Col>
                    </Row>
                </section>


                <section className="profile-body">
                    <h6 className="H6BlackLeft">Security</h6>

                    <Row gutter={40}>
                        <Col className="input-item" lg={12} md={12}>
                            <div className="input-title LabelDarkGreyLeft">Email</div>
                            <Input
                                className="Body2RegularBlack80Left" />
                        </Col>
                        <Col className="input-item" lg={12} md={12}>
                            <div className="input-title LabelDarkGreyLeft">Phone Number</div>
                            <Input
                                className="Body2RegularBlack80Left" />
                        </Col>
                    </Row>


                </section>

                <div className="update-button">
                    <Button type="primary" className="ButtonNormalWhiteCenter">UPDATE PROFILE</Button>
                </div>
            </div>
        )
    }
}

export default Profile;
