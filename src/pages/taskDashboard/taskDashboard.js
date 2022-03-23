import React, { useEffect } from "react";
import { Typography, Row} from "antd";
import { useSelector, useDispatch } from "react-redux";

import TaskColumn from "../../components/taskColumn/taskColumn";

import { fetchTodos } from "../../store/todosAction";


const TaskDashboard = () => {
    const dispatch = useDispatch();

  const Guid = useSelector((state) => state.users.googleuserDetails[0].uid);
  const userAuth = useSelector((state) => state.users.userAuthenticated);

  useEffect(() => {
    if (userAuth && Guid != undefined) {
      dispatch(fetchTodos(Guid));
    }
  }, [userAuth]);

    let columnMeta = [
        {
          title: "Backlog",
          style: { color: "#eb2f96", marginBottom: 15 },
          columnFor: "backlog",
        },
        {
          title: "In Progress",
          style: { color: "#2f54eb", marginBottom: 15 },
          columnFor: "inProgress",
        },
        {
          title: "In Review",
          style: { color: "#1890ff", marginBottom: 15 },
          columnFor: "inReview",
        },
        {
          title: "Done",
          style: { color: "#389e0d", marginBottom: 15 },
          columnFor: "done",
        },
      ];

    return  (
        <Row>

            {columnMeta.map((x, i) => {
                return <TaskColumn key={i} columnMeta={x} />;
              })}
        </Row>
    )
}


export default TaskDashboard