import { addUsers } from "./type"

const initialState = {
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

const UsersReducer =(state = initialState, action)=>{
    switch (action.type) {
        case addUsers.CREATE_USER: {
    
          return {...state, firstName: action.payload}
        }
        case addUsers.DELETE_USER:{
            return {...state,  users: state.users.filter((item, i) => i !== action.payload)}
        }
        default: {console.log(state);
    return {...state}
    
  }
}}

export default UsersReducer
export const userList = (index) => {
    return {type: addUsers.DELETE_USER, payload: index}
  }
