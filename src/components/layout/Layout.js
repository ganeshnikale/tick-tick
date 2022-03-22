
import React, { useEffect } from "react";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import { Row, Col, Layout, Menu, Typography, Card, Divider } from 'antd';

import HeaderNav from "../header/header";
import { useSelector, useDispatch } from "react-redux";

import TaskColumn from '../taskColumn/taskColumn';

import { fetchTodos } from "../../store/todosAction";
import Sidebar from "./Sidbar"



// const { SubMenu } = Menu;
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const HomeLayout = () => {

    const dispatch = useDispatch();

    const Guid = useSelector((state) => state.users.googleuserDetails[0].uid);
    const userAuth = useSelector((state) => state.users.userAuthenticated);

  

    useEffect(() => {
        if (userAuth && Guid != undefined) {
        dispatch(fetchTodos(Guid));
        }
    }, [userAuth]);

    let columnMeta = [
        {title:'Backlog', style:{color: "#eb2f96", marginBottom:15}, columnFor:'backlog'},
        {title:'In Progress', style:{color: "#2f54eb", marginBottom:15}, columnFor:'inProgress'},
        {title:'In Review', style:{color: "#1890ff", marginBottom:15}, columnFor:'inReview'},
        {title:'Done', style:{color: "#389e0d", marginBottom:15}, columnFor:'done'}
    ]

    return (
        <Layout>
            <Sidebar/>
            <Layout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0, textAlign: 'right' }}>
                <HeaderNav/>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <Row>
                   {columnMeta.map( (x, i) => {
                      return <TaskColumn key={i} columnMeta={x} />
                   })}
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>All rights regereved ©2022 by Ganesh Nikale</Footer>
            </Layout>
        </Layout>
    )
}

export default HomeLayout
