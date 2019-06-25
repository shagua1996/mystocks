import * as Types from '../type';

function askAction(data) {
    return {
        type: Types.REDUX_ACTION_ASK_K1,
        data
    }
}

export default function asyncAskAction(askData) {
    return function (dispatch, getState) {
        // TODO
        let ask = getState().ask1;
        ask.push(askData);
        dispatch(askAction(ask));
    }
}