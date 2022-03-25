import React from "react";
import {  Routes, Route } from "react-router-dom";
import {  Layout } from "antd";
import HeaderNav from "../header/header";
import TaskDashboard from "../../pages/taskDashboard/taskDashboard";
import AddTaskPage from "../../pages/addTaskPage/addTaskPage";
import Projects from '../../pages/project/project';
import TaskDetailsPage from '../../pages/taskDetailsPage/taskDetailsPage';
import Sidebar from "./Sidbar";

const { Header, Content } = Layout;

const HomeLayout = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, textAlign: "right" }}
        >
          <HeaderNav />
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <Routes>
            <Route exact path="/" element={<TaskDashboard />} />
            <Route path="/addTask" element={<AddTaskPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/taskDetails/:taskId" element={<TaskDetailsPage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomeLayout;
