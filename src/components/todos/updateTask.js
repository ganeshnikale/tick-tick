import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateTask} from '../../store/todosAction';

import { useNavigate } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Form, Input, Button, Select, Card, Row, Col } from "antd";

const UpdateTask = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [form] = Form.useForm();
  

    const editorData = htmlToDraft(props.taskForUpdate[0].discription);
    console.log(editorData.contentBlocks);
    
    const UpdateTodoHandler = (value) =>{
        console.log('handler clicked');
        console.log(value);
    }
 
    const Projects = useSelector((state) => state.projects.project);
  return (
    <Card title="Add Todo">
      <Form
        layout="vertical"
        onFinish={UpdateTodoHandler}
        form={form}
        fields={props.taskForUpdate}
        initialValues={ props.taskForUpdate[0]}
        name="basic"
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            {/* Task Title */}
            <Form.Item label="Task Title" name="text" style={{marginBottom: 0}}>
              <Input placeholder="Add Todo" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            {/* Select project */}
            <Form.Item label="Select Project" name="projectName" style={{marginBottom: 0}}>
              <Select>
                {Projects &&
                  Projects.map((x, i) => (
                    <Select.Option key={i} value={x.projectId}>
                      {x.projectName}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>

          <Col xl={24}>
            {/* text editor */}
            <Form.Item name="discription" label="Task Discription">
              <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                editorState={editorData}
                editorStyle={{height:16 + 'rem', border:1 + 'px solid lightGrey'}}
              />
            </Form.Item>
          </Col>

          <Col xl={24}>
            <Button type="primary" htmlType="submit">
              {" "}
              Add Todo
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default UpdateTask;
