import { Button } from 'antd';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {deleteTask, updateTask} from '../../store/todosAction';

const TaskActionBtn = (props) =>{
    const taskId = props.TaskId;
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const deleteTaskHandler = () =>{
        console.log('asbsbsb')
        dispatch(deleteTask(taskId));
        navigate("/");
        
    }
    const updateTaskHandler = () => {
        navigate("/updateTask");
    }
    return (
        <Fragment>
            <Button type="primary" onClick={()=> updateTaskHandler()}>Update Task</Button>
            <Button type="primary" onClick={() => deleteTaskHandler()}>Detele Task</Button>
        </Fragment>
    )
}
export default TaskActionBtn