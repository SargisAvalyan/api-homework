import {createStore} from 'redux'
import rootReducer from "./redusers";

const store = createStore(rootReducer)


export default store




// import {createStore} from "redux";

// const store=createStore( function (state, action) {
//    return state; 
// },
// {
//     users: [
//         {
//             firstName: '',
//             lastName: '',
//             email: '',
//             password: '',
//             gender: '',
//             phoneNumber: ''
//         }
//     ]


// });
// export default store