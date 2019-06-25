import * as Types from '../type';

function askAction(data) {
    return {
        type: Types.REDUX_ACTION_ASK_K4,
        data
    }
}

export default function asyncAskAction(askData) {
    return function (dispatch, getState) {
        // TODO
        let ask = getState().ask4;
        ask.push(askData);
        dispatch(askAction(ask));
    }
}