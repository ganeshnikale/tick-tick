
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {getTaskDetails} from '../../store/todosAction';
import TaskCard from "../../components/TaskCard/TaskCard";
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
        <TaskCard taskMeta={taskDetails}></TaskCard>
    )
}

export default TaskDetailsPage;