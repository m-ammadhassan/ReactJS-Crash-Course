import React, {useReducer} from 'react';
import countReducer from './reducers/countReducer';

const ExampleOne = () =>
{
    let initialState = { countValue: 0 };
    const [state, dispatch] = useReducer(countReducer, initialState);

    console.log(state.countValue);
    
    const increaseValue = () => dispatch({type: 'INCREMENT'});

    const decreaseValue = () => dispatch({type: 'DECREMENT'});

    return(
        <>
            <h3>Count: {state.countValue}</h3>

            <button onClick={increaseValue}>Increase</button>
            <button onClick={decreaseValue}>Decrease</button>
        </>
    );
}

export default ExampleOne;