import React from "react";
import  {userLogin} from '../../store/usersAction';
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const loginHandler = () => {
        console.log('aaa')
        dispatch(userLogin());
    }

    return (
        <h2>
            Header
            <button onClick={loginHandler}>Login</button>
        </h2>
    )
}


export default Header