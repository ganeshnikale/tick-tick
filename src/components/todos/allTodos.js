import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Card, List, Radio, Typography, Form, Divider } from "antd";
import {ChangeStatus} from '../../store/todosAction';


const AllTodos = () => {
  const { Title, Text, Paragraph } = Typography;
  const dispatch = useDispatch();

  const Todos = useSelector((state) => state.todos.filterSortedTodos);
  const filterBy = useSelector((state) => state.todos.filterBy);
 


  const ChangeStatusHandler = (values) => {
    dispatch(ChangeStatus(values.target.value))
  };
  return (
    <div>
      <List
        itemLayout="vertical"
        dataSource={Todos}
        renderItem={(item) => (
          <li className="site-card-border-less-wrapper" style={{marginBottom:15, borderRadius:15, overflow: "hidden", boxShadow: "0 5px 10px #eee"}}>
              <Card bordered={false}>
                  <h5 className="ant-typography ant-typography-danger" > {item.projectName}</h5>
                  
                  <Divider style={{marginTop:5, marginBottom:8}}/>
                  
                  <Paragraph style={{textAlign: "right"}}>Status: <b>{item.status}</b></Paragraph>
                  
                  <Divider style={{marginTop:0, marginBottom:5}}/>

                  {item.discription != null ? (
                    <Paragraph>{item.discription}</Paragraph>
                  ) : (
                    ""
                  )}
                  <Divider style={{marginTop:5, marginBottom:5}}/>

                  <Divider orientation="left" plain>
                    Change status
                  </Divider>

                  <Radio.Group onChange={ChangeStatusHandler}>
                    <Radio name="change" value={`${item.todoId}, Backlog`}>
                      Backlog
                    </Radio>
                    <Radio name="change" value={`${item.todoId}, In Progress`}>
                      In Process
                    </Radio>
                    <Radio name="change" value={`${item.todoId}, In Review`}>
                    In Review
                    </Radio>
                    <Radio name="change" value={`${item.todoId}, Done`}>
                      Done
                    </Radio>
                  </Radio.Group>
                  <Divider orientation="left" plain>
                    Time
                  </Divider>
                  <Paragraph lavel={5}>{Date(item.createAt)}</Paragraph>
              </Card>
          </li>

          // <List.Item className={item.status}>
          //   <List.Item.Meta title={item.text} />
          //   <Title level={5}>Project Name: {item.projectName}</Title>

          //   {item.discription != null ? (
          //     <Paragraph>Task Discription: {item.discription}</Paragraph>
          //   ) : (
          //     ""
          //   )}
            
          //   <Paragraph>status: {item.status}</Paragraph>

          //   <Radio.Group onChange={ChangeStatusHandler}>
          //     <Radio name="change" value={`${item.todoId}, complete`}>
          //       Complete
          //     </Radio>
          //     <Radio name="change" value={`${item.todoId}, ongoing`}>
          //       On going
          //     </Radio>
          //     <Radio name="change" value={`${item.todoId}, pending`}>
          //       Pending
          //     </Radio>
          //     <Radio name="change" value={`${item.todoId}, hold`}>
          //       Hold
          //     </Radio>
          //   </Radio.Group>
          //   <Paragraph lavel={5}>{Date(item.createAt)}</Paragraph>
          // </List.Item>
        )}
      >
        
      </List>
    </div>
  );
};

export default AllTodos;
