import {  useDispatch } from "react-redux";
import { ChangeStatus } from "../../store/todosAction";
import ReactHtmlParser from 'react-html-parser';
import { Card, List, Radio, Typography, Divider } from "antd";
const {  Paragraph } = Typography;
const TaskCard = (props) => {
  const dispatch = useDispatch();
  const ChangeStatusHandler = (values) => {
    dispatch(ChangeStatus(values.target.value));
  };
  return (
    <div>
      <List
        itemLayout="vertical"
        dataSource={props.taskMeta}
        renderItem={(item) => (
          <li
            className="site-card-border-less-wrapper"
            style={{
              marginBottom: 15,
              borderRadius: 15,
              overflow: "hidden",
              boxShadow: "0 5px 10px #eee",
            }}
          >
            <Card bordered={false}>
              <h5 className="ant-typography ant-typography-danger">
                {" "}
                {item.projectName}
              </h5>

              <Divider style={{ marginTop: 5, marginBottom: 8 }} />

              <Paragraph style={{ textAlign: "right" }}>
                Status: <b>{item.status}</b>
              </Paragraph>

              <Divider style={{ marginTop: 0, marginBottom: 5 }} />

              {item.discription != null ? (
                <Paragraph>{ReactHtmlParser(item.discription)}</Paragraph>
              ) : (
                ""
              )}
              <Divider style={{ marginTop: 5, marginBottom: 5 }} />

              <Divider orientation="left" plain>
                Change status
              </Divider>

              <Radio.Group onChange={ChangeStatusHandler}>
                <Radio name="change" value={`${item.todoId},backlog`}>
                  Backlog
                </Radio>
                <Radio name="change" value={`${item.todoId},inProgress`}>
                  In Process
                </Radio>
                <Radio name="change" value={`${item.todoId},inReview`}>
                  In Review
                </Radio>
                <Radio name="change" value={`${item.todoId},done`}>
                  Done
                </Radio>
              </Radio.Group>
              <Divider orientation="left" plain>
                Time
              </Divider>
              <Paragraph lavel={5}>{Date(item.createAt)}</Paragraph>
            </Card>
          </li>
        )}
      ></List>
    </div>
  );
};

export default TaskCard;
