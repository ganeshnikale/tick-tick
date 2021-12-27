import React from "react";
import  {userLogin} from '../../store/usersAction';
import { useDispatch } from "react-redux";
import { Layout, Menu, Button } from 'antd';
import  {  UserOutlined  }  from '@ant-design/icons';
const { Header,  } = Layout;


const HeaderNav = () => {
    const dispatch = useDispatch();
    const loginHandler = () => {
        console.log('aaa')
        dispatch(userLogin());
    }

    return (
        <Layout>
        <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">All Projects</Menu.Item>
        <Menu.Item key="2">All Tasks</Menu.Item>
        <Menu.Item key="3">
            <Button type="primary" shape="round" onClick={loginHandler} icon={<UserOutlined />} >
            Login
            </Button>
        </Menu.Item>
      </Menu>
    </Header>
        </Layout>
        
    )
}


export default HeaderNav