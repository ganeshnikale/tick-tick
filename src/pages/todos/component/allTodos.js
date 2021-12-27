import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Card, List,Button, Typography,Form} from 'antd';


const AllTodos = () => {
   const {Title, Text,Paragraph} = Typography;

     const Todos = useSelector( state => state.todos.todos);
  
  const ChangeStatusHandler = (values) => {
    console.log(values)
  }
    return (
        <Card  title="All Tasks">
        <List itemLayout="vertical" dataSource={Todos}
        renderItem={item => (
         <List.Item>
           <List.Item.Meta
             title={item.text}
             
           />
           <Title level={5}>
           Project Name: {item.projectName}
           </Title>

           {(item.discription != null ?<Paragraph>

Task Discription: {item.discription}
</Paragraph> : ''  )}
           
           <Paragraph>

           status: {item.status}
           </Paragraph>

           
           <Form  layout="vertical" onFinish={ChangeStatusHandler} initialValues={{ remember: true,}} name="changeTaskStatus">
           <Button type="text" htmlType="submit"  value="complete">Complete</Button>
           <Button type="text" htmlType="submit"  value="ongoing">On Going</Button>
           <Button type="text" htmlType="submit"  value="pending">Pending</Button>
           </Form>
           <Paragraph lavel={5}>{Date(item.createAt)}</Paragraph>
         </List.Item>
       )}>
        </List>
      </Card>

    )
}


export default AllTodos;