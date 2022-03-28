

import { useDispatch, useSelector } from "react-redux";
import UpdateTask from '../../components/todos/updateTask';

const UpdateTaskPage = () => {
    const TaskForUpdate = useSelector((state) => state.todos.taskDetail);
    
    return (
        <UpdateTask taskForUpdate={TaskForUpdate}></UpdateTask>
    )
}

export default UpdateTaskPage