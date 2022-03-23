import React from "react";

import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const {  Sider } = Layout;

function Sidebar() {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {}}
      onCollapse={(collapsed, type) => {}}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="0">
          <h1 className="text-white">Logo</h1>
        </Menu.Item>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/">Overview </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/addTask">Tasks</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Documents
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Notes
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
