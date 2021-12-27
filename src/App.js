
import './App.css';
import React,{useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import Projects from './pages/project/project';
import AllTodos from './pages/todos/component/allTodos';
import HeaderNav from './pages/header/header';
import  Pagelayout  from './pages/layout/Pagelayout';
import AddProject from './pages/project/component/AddProject';
import AllProjects from './pages/project/component/AllProjects';
import {  Row, Col  } from 'antd';
import AddTodos from './pages/todos/component/addTodos';

import {fetchTodos} from './store/todosAction';
import {fetchProject} from './store/projectsAction';



function App() {
  const dispatch = useDispatch();
  const userID = useSelector(state => state.users.user[0].userId);

  useEffect(() => {
    dispatch(fetchTodos(userID));
    dispatch(fetchProject(userID));
  },[userID])

  return (
    
      <Row>
        <Col xs={24}>
           <HeaderNav />
        </Col>
        <Col xs={2} sm={4} md={6} lg={4} xl={6}>
            <AllProjects />
        </Col>

        <Col xs={2} sm={4} md={6} lg={4} xl={6}>
          <AllTodos/>
        </Col>

        <Col xs={2} sm={4} md={6} lg={4} xl={6}>
          <AddProject/>
        </Col>

        <Col xs={2} sm={4} md={6} lg={4} xl={6}>
          <AddTodos/>
        </Col>

      </Row>
  );
}

export default App;
