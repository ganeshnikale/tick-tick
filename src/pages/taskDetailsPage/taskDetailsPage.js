
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import {getTaskDetails} from '../../store/todosAction';
import TaskCard from "../../components/TaskCard/TaskCard";
import TaskActionBtn from "../../components/taskActionBtn/taskActionBtn";
const TaskDetailsPage = () =>{
    let params = useParams();
    const dispatch = useDispatch();
    const {taskId} = params;

    const taskDetails = useSelector((state) => state.todos.taskDetail);
    console.log(taskDetails)
    useEffect(() => {
        dispatch(getTaskDetails(taskId))
    },[taskId])


    return (
        <Fragment>
            <TaskActionBtn TaskId={taskId}></TaskActionBtn>
            <TaskCard taskMeta={taskDetails}></TaskCard>
        </Fragment>
    )
}

export default TaskDetailsPage;