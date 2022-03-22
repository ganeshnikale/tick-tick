import "./App.css";
import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import AllTodos from "./components/todos/allTodos";
import AddTodos from "./components/todos/addTodos";
import HeaderNav from "./components/header/header";
import HomeLayout from "./components/layout/Layout";
import AddProject from "./components/projects/AddProject";
import AllProjects from "./components/projects/AllProjects";
import { Row, Col, Layout, Menu, Breadcrumb } from "antd";

import { fetchTodos } from "./store/todosAction";
import { fetchProject } from "./store/projectsAction";
import AddTaskPage from "./pages/addTaskPage/addTaskPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Row>
      <Col xs={24}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomeLayout />} />

            <Route path="/addTask" element={<AddTaskPage />} />
          </Routes>
        </BrowserRouter>

        {/* <HeaderNav /> */}
      </Col>

      {/* <Col xs={2} sm={4} md={6} lg={4} xl={6}>
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
      </Col> */}
    </Row>
  );
}

export default App;
