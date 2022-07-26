import React from 'react';
import UseStateExampleOne from './UseStateExample1';
import UseStateExampleTwo from './UseStateExample2';

const UseStateHook = () => 
{
    return(
        <>
            <h1>useState Hook</h1>

            <h3>Purpose</h3>
            <p>
                It is used to add the state in a functional component.
                It creates, update and manipulate the state of the functional component.
            </p>

            <h3>Syntax</h3>
            <code>
                const [state, setState] = useState(initialValue);
            </code>
            
            <h3>Description</h3>
            <p>
                The state of the component can be changed at some point according to the data contains by the component. To show that changes in the DOM it is required to use a React useState hook.
            </p>
            <dl>
                <dt>What is State?</dt>
                <dd>A state is a</dd>
            </dl>

            <p>This hook takes only a single argument.</p>
            <ul>
                <li>Initial Value</li>
                It can be a Number, String, Boolean, Array or Object.
            </ul>

            <p>This hook returns the array of two values.</p>
            <ol>
                <li>A variable</li>
                It contains the current value of the state.

                <li>A function</li>
                It is used to update the state.
            </ol>
            
            <h3>Examples</h3>
            <UseStateExampleOne />
            <UseStateExampleTwo />
        </>
    );
}

export default UseStateHook