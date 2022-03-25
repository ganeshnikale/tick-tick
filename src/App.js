import "./App.css";
import React from "react";

import HomeLayout from "./components/layout/Layout";
import { Row, Col } from "antd";


function App() {
  return (
    <Row>
      <Col xs={24}>
      <HomeLayout />
      </Col>
    </Row>
  );
}

export default App;
