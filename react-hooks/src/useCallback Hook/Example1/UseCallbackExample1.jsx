import React, {useState, useCallback} from 'react';
import ButtonComponent from './ButtonComponent';
import DisplayComponent from './DisplayComponent';
import TitleComponent from './TitleComponent';

const UseCallbackExampleOne = () =>
{
    const[tableNum, setTableNum] = useState(1);
    const[num, setNum] = useState(1);

    const incrementTableNum = useCallback(() => {setTableNum(tableNum+1)}, [tableNum]);
    const incrementNum = useCallback(() => {setNum(num+1)}, [num]);

    console.log(incrementTableNum);
    return(
        <>
            <TitleComponent title="1" />
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div style={{textAlign: "center"}}>
                    <DisplayComponent title="Table Number" myValue={tableNum} />
                    <ButtonComponent title="Table Number" myFunction={incrementTableNum} />
                </div>
                <div style={{textAlign: "center"}}>
                    <DisplayComponent title="Number" myValue={num} />
                    <ButtonComponent title="Value Number" myFunction={incrementNum} />
                </div>
            </div>
            <div style={{textAlign: "center", marginTop: "2.5rem"}}>
                <h4>{`${tableNum} x ${num} = ${tableNum*num}`}</h4>
            </div>
        </>
    );
}

export default UseCallbackExampleOne;