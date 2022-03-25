import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProjects } from "../../store/projectsAction";

import { Form, Input, Button, Card } from "antd";

const AddProject = () => {
  const dispatch = useDispatch();

  const uid = useSelector((state) => state.users.googleuserDetails[0].uid);

  const [form] = Form.useForm();

  const addProjectHandler = (values) => {
    dispatch(addProjects({ projectName: values.projectName, userId: uid }));
  };

  return (
    <Card title="Add Project">
      <Form
        layout="vertical"
        onFinish={addProjectHandler}
        form={form}
        initialValues={{ remember: true }}
        name="addProject"
      >
        <Form.Item label="Project Name" name="projectName">
          <Input placeholder="Add Project Name" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Add Project
        </Button>
      </Form>
    </Card>
  );
};

export default AddProject;
