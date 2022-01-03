
import './App.css';
import React,{useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import AllTodos from './components/todos/allTodos';
import AddTodos  from './components/todos/addTodos';
import HeaderNav from './components/header/header';
import AddProject from './components/projects/AddProject';
import AllProjects from './components/projects/AllProjects';
import {  Row, Col  } from 'antd';

import {fetchTodos} from './store/todosAction';
import {fetchProject} from './store/projectsAction';



function App() {
  const dispatch = useDispatch();
  
  const Guid = useSelector(state => state.users.googleuserDetails[0].uid);
  console.log(Guid);
  const userAuth = useSelector(state => state.users.userAuthenticated);
  console.log(Guid)

  useEffect(() => {
    if(userAuth && Guid != undefined) {
      dispatch(fetchTodos(Guid));
      dispatch(fetchProject(Guid));
    }
  },[userAuth])

  return (
      <Row>
         <Col xs={24}>
           <HeaderNav />
        </Col>

       <Col xs={2} sm={4} md={6} lg={4} xl={6}>
         {userAuth ? <AllProjects /> : ''}
       
     </Col>

     <Col xs={2} sm={4} md={6} lg={4} xl={6}>
     {userAuth ? <AllTodos/> : ''}
       
     </Col>

     <Col xs={2} sm={4} md={6} lg={4} xl={6}>
     {userAuth ? <AddProject/> : ''}
       
     </Col>

     <Col xs={2} sm={4} md={6} lg={4} xl={6}>
     {userAuth ? <AddTodos/> : ''}
       
     </Col>
      </Row>
      
       
        
      
  );
}

export default App;
