import React, {useState} from 'react';

const UseStateExampleOne = () =>
{
    let initialCountValue = 0;

    const [count, setCount] = useState(initialCountValue);
    
    console.log(count);
    
    return(
        <>
            <h4>Count: {count}</h4>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <br/>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    );
}

export default UseStateExampleOne;