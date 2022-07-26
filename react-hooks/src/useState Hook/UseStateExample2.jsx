import React, {useState} from 'react';

const UseStateExampleTwo = () =>
{
    let tableNum = 2;
    let initialNumValue = 1;
    const num = useState(initialNumValue);

    console.log(num);

    return(
        <>
            <h4>{`${tableNum} x ${num[0]} = ${tableNum*num[0]}`}</h4>
            <button onClick={ ()=>{num[1](num[0]+1)} }>
                A Table of Two
            </button>
        </>
    );
}

export default UseStateExampleTwo;