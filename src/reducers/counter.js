import { actions } from './../actions/actionsContaints';
const initialState = {
    counter: 0
};

export const counterReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action?.type){
        case actions.INCREMENT : return { counter: state.counter + 1 };
        case actions.DECREMENT : return { counter: state.counter - 1 };
        case actions.ADDCOUNTER: return { counter: state.counter + action.payload };
        case actions.RESET: return { counter: 0 };
        default: return state;
    };
};