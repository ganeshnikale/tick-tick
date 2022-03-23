import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProject } from "../../store/projectsAction";
import { AddTodo } from "../../store/todosAction";

import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Form, Input, Button, Select, Card } from "antd";

const AddTodos = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.users.googleuserDetails[0].uid);

  const [form] = Form.useForm();

  const AddTodoHandler = (values) => {
    dispatch(
      AddTodo({
        uid: uid,
        todoText: values.taskTitle,
        todoDicscription: draftToHtml(values.taskDiscription),
        projectId: values.selectProject,
      })
    );
  };

 

  useEffect(() => {
    dispatch(fetchProject(uid));
  }, [AddTodoHandler]);
  const Projects = useSelector((state) => state.projects.project);

  return (
    <Card title="Add Todo">
      <Form
        layout="vertical"
        onFinish={AddTodoHandler}
        form={form}
        initialValues={{ remember: true }}
        name="basic"
      >
        <Form.Item label="Task Title" name="taskTitle">
          <Input placeholder="Add Todo" />
        </Form.Item>
        <Form.Item label="Select Project" name="selectProject">
          <Select>
            {Projects &&
              Projects.map((x, i) => (
                <Select.Option key={i} value={x.projectId}>
                  {x.projectName}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item name="taskDiscription" label="Task Discription">
          {/* <Input.TextArea /> */}
          <Editor
          
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          
        />
        </Form.Item>


        
        
        <Button type="primary" htmlType="submit">
          {" "}
          Add Todo
        </Button>
      </Form>
    </Card>
  );
};

export default AddTodos;
