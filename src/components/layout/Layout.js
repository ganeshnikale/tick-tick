
import React, { useEffect } from "react";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import { Row, Col, Layout, Menu, Typography, Card, Divider } from 'antd';

import HeaderNav from "../header/header";
import { useSelector, useDispatch } from "react-redux";
import AllTodos from "../todos/allTodos";
import AddTodos from "../todos/addTodos";
import AddProject from "../projects/AddProject";
import AllProjects from "../projects/AllProjects";
import Sidebar from "./Sidbar"

import { fetchTodos } from "../../store/todosAction";
import { fetchProject } from "../../store/projectsAction";

// const { SubMenu } = Menu;
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const HomeLayout = () => {
    const dispatch = useDispatch();

    const Guid = useSelector((state) => state.users.googleuserDetails[0].uid);
    console.log(Guid);
    const userAuth = useSelector((state) => state.users.userAuthenticated);
    console.log(Guid);

    useEffect(() => {
        if (userAuth && Guid != undefined) {
        dispatch(fetchTodos(Guid));
        dispatch(fetchProject(Guid));
        }
    }, [userAuth]);

    return (
        <Layout>
            <Sidebar/>
            <Layout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0, textAlign: 'right' }}>
                <HeaderNav/>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Row>
                        <Col xs={2} sm={4} md={6} lg={4} xl={6}>
                            <Title level={4} style={{color: "#eb2f96", marginBottom:15}}>Backlog</Title>

                            {userAuth ? <AllTodos /> : ""}

                            <div className="site-card-border-less-wrapper" style={{marginBottom:15, borderRadius:15, overflow: "hidden", boxShadow: "0 5px 10px #eee"}}>
                                <Card bordered={false}>
                                    <h5 className="ant-typography ant-typography-danger" >Landing Page </h5>
                                    <Divider style={{marginTop:5, marginBottom:5}}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <p>Card content</p>
                                </Card>
                            </div>

                            <div className="site-card-border-less-wrapper" style={{marginBottom:15, borderRadius:15, overflow: "hidden", boxShadow: "0 5px 10px #eee"}}>
                                <Card bordered={false}>
                                    <h5 className="ant-typography ant-typography-danger" >Dashboard</h5>
                                    <Divider style={{marginTop:5, marginBottom:5}}/>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <p>Card content</p>
                                </Card>
                            </div>
                        </Col>

                        <Col xs={2} sm={4} md={6} lg={4} xl={6}>
                            <Title level={4} style={{color: "#2f54eb", marginBottom:15}}>In Progress</Title>
                            <div className="site-card-border-less-wrapper" style={{marginBottom:15, borderRadius:15, overflow: "hidden", boxShadow: "0 5px 10px #eee"}}>
                                <Card bordered={false}>
                                    <h5 className="ant-typography ant-typography-warning" >Illustration</h5>
                                    <Divider style={{marginTop:5, marginBottom:5}}/>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <p>Card content</p>
                                </Card>
                            </div>

                            <div className="site-card-border-less-wrapper" style={{marginBottom:15, borderRadius:15, overflow: "hidden", boxShadow: "0 5px 10px #eee"}}>
                                <Card bordered={false}>
                                    <h5 className="ant-typography" style={{color: '#1890ff'}}>Mobile App</h5>
                                    <Divider style={{marginTop:5, marginBottom:5}}/>
                                    <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <p>Card content</p>
                                </Card>
                            </div>
                        </Col>

                        <Col xs={2} sm={4} md={6} lg={4} xl={6}>
                            <Title level={4} style={{color: "#1890ff", marginBottom:15}}>In Review</Title>

                            <div className="site-card-border-less-wrapper" style={{marginBottom:15, borderRadius:15, overflow: "hidden", boxShadow: "0 5px 10px #eee"}}>
                                <Card bordered={false}>
                                    <h5 className="ant-typography" style={{color: '#b37feb'}}>Mobile App</h5>
                                    <Divider style={{marginTop:5, marginBottom:5}}/>
                                    <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <p>Card content</p>
                                </Card>
                            </div>

                            <div className="site-card-border-less-wrapper" style={{marginBottom:15, borderRadius:15, overflow: "hidden", boxShadow: "0 5px 10px #eee"}}>
                                <Card bordered={false}>
                                    <h5 className="ant-typography" style={{color: '#13c2c2'}}>Illustration</h5>
                                    <Divider style={{marginTop:5, marginBottom:5}}/>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <p>Card content</p>
                                </Card>
                            </div>
                        </Col>

                        <Col xs={2} sm={4} md={6} lg={4} xl={6}>
                            <Title level={4} style={{color: "#389e0d", marginBottom:15}}>Done</Title>
                            <div className="site-card-border-less-wrapper" style={{marginBottom:15, borderRadius:15, overflow: "hidden", boxShadow: "0 5px 10px #eee"}}>
                                <Card bordered={false}>
                                    <h5 className="ant-typography ant-typography-success" >Landing Page </h5>
                                    <Divider style={{marginTop:5, marginBottom:5}}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <p>Card content</p>
                                </Card>
                            </div>

                            <div className="site-card-border-less-wrapper" style={{marginBottom:15, borderRadius:15, overflow: "hidden", boxShadow: "0 5px 10px #eee"}}>
                                <Card bordered={false}>
                                    <h5 className="ant-typography" style={{color: '#85a5ff'}} >Dashboard</h5>
                                    <Divider style={{marginTop:5, marginBottom:5}}/>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <p>Card content</p>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <Col xs={2} sm={4} md={6} lg={4} xl={6}>
                        {userAuth ? <AllProjects /> : ""}
                    </Col>

                    <Col xs={2} sm={4} md={6} lg={4} xl={6}>
                        {userAuth ? <AllTodos /> : ""}
                    </Col>

                    <Col xs={2} sm={4} md={6} lg={4} xl={6}>
                        {userAuth ? <AddProject /> : ""}
                    </Col>

                    <Col xs={2} sm={4} md={6} lg={4} xl={6}>
                        {userAuth ? <AddTodos /> : ""}
                    </Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>All rights regereved ©2022 by Ganesh Nikale</Footer>
            </Layout>
        </Layout>
    )
}

export default HomeLayout
