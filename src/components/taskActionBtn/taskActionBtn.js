import { Button } from 'antd';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {deleteTask} from '../../store/todosAction';

const TaskActionBtn = (props) =>{
    const taskId = props.TaskId;
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const deleteTaskHandler = () =>{
        console.log('asbsbsb')
        dispatch(deleteTask(taskId));
        navigate("/");
        
    }
    return (
        <Fragment>
            <Button type="primary" >Update Task</Button>
            <Button type="primary" onClick={() => deleteTaskHandler()}>Detele Task</Button>
        </Fragment>
    )
}
export default TaskActionBtn