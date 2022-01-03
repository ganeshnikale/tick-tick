import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Card, List, Radio, Typography, Form } from "antd";
import {ChangeStatus} from '../../store/todosAction';


const AllTodos = () => {
  const { Title, Text, Paragraph } = Typography;
  const dispatch = useDispatch();

  const Todos = useSelector((state) => state.todos.filterSortedTodos);
  const filterBy = useSelector((state) => state.todos.filterBy);
  console.log(filterBy);


  const ChangeStatusHandler = (values) => {
    dispatch(ChangeStatus(values.target.value))
  };
  return (
    <Card title={(filterBy != undefined) ? `All Tasks ${filterBy}` : "All Task"}>
      <List
        itemLayout="vertical"
        dataSource={Todos}
        renderItem={(item) => (
          <List.Item className={item.status}>
            <List.Item.Meta title={item.text} />
            <Title level={5}>Project Name: {item.projectName}</Title>

            {item.discription != null ? (
              <Paragraph>Task Discription: {item.discription}</Paragraph>
            ) : (
              ""
            )}
            <Paragraph>status: {item.status}</Paragraph>

            <Radio.Group onChange={ChangeStatusHandler}>
              <Radio name="change" value={`${item.todoId}, complete`}>
                Complete
              </Radio>
              <Radio name="change" value={`${item.todoId}, ongoing`}>
                On going
              </Radio>
              <Radio name="change" value={`${item.todoId}, pending`}>
                Pending
              </Radio>
              <Radio name="change" value={`${item.todoId}, hold`}>
                Hold
              </Radio>
            </Radio.Group>
            <Paragraph lavel={5}>{Date(item.createAt)}</Paragraph>
          </List.Item>
        )}
      ></List>
    </Card>
  );
};

export default AllTodos;
