import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from '../../store/reducer/type';

import "./style.scss";
const UserList = () => {
    const [user, setUser] = useState(
        {
            users: [
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    gender: '',
                    phoneNumber: ''
                }
            ]
        }
    );

    let UserList = useSelector(state => state.UsersReducer.users.firstName)

    const dispatch = useDispatch()

    useEffect(() => {
    }, [user])
    const addUser = () => {
        dispatch({ type: "CREATE_USER", payload: user.users.firstName })
        console.log(user);
        setUser('')
    }
    const deleteList = (index) => {
        dispatch({ type: addUsers.DELETE_USER, payload: index })
    }
    const addUserList = () => {
        dispatch({ type: addUsers.CREATE_USER, payload: user })
        console.log(user.users.firstName)
    }
        ;

    return (
        <div className='userlist'>
            <div className='userbox'>
                <label>
                    <input type="text" value={user.users.firstName} onChange={(e) => dispatch({ type: 'CREATE_USER', payload: e.target.value })
                    } placeholder='FirstName' />
                </label>
                <label>
                    <input type="text" placeholder='LirstName' />
                </label>
                <label>
                    <input type="email" placeholder='e-maill' />
                </label>
                <label>
                    <input type="password" placeholder='password' />
                </label>
                <label>
                    <input type="text" placeholder='gender' />
                </label>
                <label>
                    <input type="number" placeholder='PhoneNumber' />
                </label>
                <button onClick={addUserList}>Add</button>

            </div>
            <div>
                <h3>
           ................................{user.users.firstName}..........................................</h3>
            </div>

        </div>
    )
}
export default UserList