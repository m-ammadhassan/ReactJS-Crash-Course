import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


const Count = () =>
{
    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    console.log(count);

    const incrementValue = () => dispatch({type: "INCREMENT", payload: count.countValue + 1});

    const decrementValue = () => dispatch({type: "DECREMENT", payload: count.countValue - 1})

    return(
        <>
            <h3>Current Count: {count.countValue}</h3>


            <button onClick={incrementValue}>Increment</button>
            <button onClick={decrementValue}>Decrement</button>
        </>
    )
}

export default Count;