import * as Types from '../type';
export default function askReducer(state = [], action) {
    switch (action.type) {
        case Types.REDUX_ACTION_ASK_K4:
            return action.data;
        default:
            return state;
    }
}