import {combineReducers} from "redux";
import localForcast from "./localForcast";
import cityForcast from "./cityForcast";

export default combineReducers({
        localForcast, cityForcast
})


// import {combineReducers} from "redux";
// import contacts from "./contacts";
//
// export default combineReducers({
//         contacts
// })
