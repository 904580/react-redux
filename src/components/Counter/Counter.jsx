import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementAction, incrementAction, resetAction, addCounterAction } from '../../actions/counterActions';

const Counter = () => {
    
    const [number, setNumber] = useState(0);

    // Read the value from state
    const counter = useSelector(state => state.counterReducer.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(incrementAction);
    };

    const decrementHandler = () => {
        dispatch(decrementAction);
    };

    const resetHandler = () => {
        dispatch(resetAction);
    };

    const changeNumberHandler = (e) => {
        const value = e.target.value;
        setNumber(value);
    };

    const addCounterClickHandler = () => {
        dispatch({
            ...addCounterAction,
            payload: parseInt(number)
        });
        setNumber(0);
    }

    return (
        <div>
            <h1>Counter : {counter} </h1>
            <div>
                <button onClick={incrementHandler}>Increment +1 </button>
                <button onClick={decrementHandler}>Decrement -1 </button>
            </div>
            <div>
                <button onClick={resetHandler}>Reset Counter</button>
            </div>
            <div>
                <input type="text" onChange={changeNumberHandler} value={number}/>
                <button onClick={addCounterClickHandler}>Update Counter</button>
            </div>
        </div>
    );
};

export default Counter;