import React, {useRef} from "react";
import { useDispatch ,useSelector} from "react-redux";
import {AddTodo} from '../../store/todosAction';
import { 
    Form,
    Input,
    Button,
    Select,
   Card
   } from 'antd';
const AddTodos = () => {

    const uid = useSelector(state => state.users.googleuserDetails[0].uid);
    const Projects = useSelector(state => state.projects.project);

    
    const dispatch = useDispatch();

    const [form] = Form.useForm();
    const AddTodoHandler = (values) => {
      
        console.log(values)
       dispatch(AddTodo({uid: uid, todoText: values.taskTitle,todoDicscription:values.taskDiscription, projectId:values.selectProject}));
        //console.log(Projects);
    }

    return(
        <Card title="Add Todo">
            <Form  layout="vertical" onFinish={AddTodoHandler}  form={form} initialValues={{ remember: true,}} name="basic">
                <Form.Item label="Task Title" name="taskTitle">
                    <Input placeholder="Add Todo"/>
                </Form.Item>

                <Form.Item label="Select Project" name="selectProject">
                    <Select  >
                    {Projects && Projects.map( (x, i) => (<Select.Option key={i} value={x.projectId}>{x.projectName}</Select.Option>))}
                    </Select>
                </Form.Item>
                <Form.Item name="taskDiscription" label="Task Discription">
                    <Input.TextArea />
                </Form.Item>
                
                <Button type="primary" htmlType="submit" > Add Todo</Button>
            </Form>
        </Card>
    )

}

export default AddTodos;