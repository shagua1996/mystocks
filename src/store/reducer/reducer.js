import { combineReducers } from 'redux';
import ask1 from "./askK1Reducer";
import ask4 from "./askK4Reducer";
// 继续导入其他的reducer
export default combineReducers({ ask1, ask4 });