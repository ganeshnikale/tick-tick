import React from "react";
import ProjectCard from './projectCard';
import { Card, List } from "antd";

const AllProjects = (props) => {


  return (
     <Card title="All Projects">
            <List
                itemLayout="horizontal"
                dataSource={props.projects}
                renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                    
                    title={item.projectName}
                    description={item.createAt}
                    />
                </List.Item>
                )}
            ></List>
    </Card>
  );
};

export default AllProjects;

