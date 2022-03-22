import { Col, Typography, Card, Divider } from "antd";
import TaskCard from "../TaskCard/TaskCard";

import { useSelector, useDispatch } from "react-redux";
import AllTodos from "../todos/allTodos";
import { useEffect } from "react";
import { filterByStatus } from "../../store/todosAction";
const { Title } = Typography;

const TaskColumn = (props) => {
  const { title, style, columnFor } = props.columnMeta;

  const dispatch = useDispatch();

  const Guid = useSelector((state) => state.users.googleuserDetails[0].uid);
  const userAuth = useSelector((state) => state.users.userAuthenticated);

  const Tasks = useSelector((state) => state.todos.filterByStatus);
  console.log(Tasks[columnFor]);

  useEffect(() => {
    if (userAuth && Guid != undefined) {
      dispatch(filterByStatus(columnFor));
    }
  }, [userAuth]);

  return (
    <Col xs={2} sm={4} md={6} lg={4} xl={6}>
      <Title level={4} style={style}>
        {title}
      </Title>

      <TaskCard taskMeta={Tasks[columnFor]} />
    </Col>
  );
};

export default TaskColumn;
