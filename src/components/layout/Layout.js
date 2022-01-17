
import React, { useEffect } from "react";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import { Row, Col, Layout, Menu } from 'antd';

import HeaderNav from "../header/header";


import { useSelector, useDispatch } from "react-redux";
import AllTodos from "../todos/allTodos";
import AddTodos from "../todos/addTodos";
import AddProject from "../projects/AddProject";
import AllProjects from "../projects/AllProjects";

import Sidebar from "./Sidbar"

import { fetchTodos } from "../../store/todosAction";
import { fetchProject } from "../../store/projectsAction";

const { SubMenu } = Menu;
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
