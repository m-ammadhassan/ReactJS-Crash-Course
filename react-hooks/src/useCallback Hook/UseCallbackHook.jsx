import React from 'react';
import UseCallbackExampleOne from './Example1/UseCallbackExample1';

const UseCallbackHook = () => 
{
    return(
        <>
            <h1>useCallback Hook</h1>

            <h3>Purpose</h3>
            <p>
                It is used when there is no need to re-render the components unless its props change.
                It prevents the function to be recreated on each render.
                It returns a memoized version of the callback function.
            </p>

            <h3>Syntax</h3>
            <code>
                const memoFunction = useCallback( {"()=>{ callbackFunction }"}, [dependencyArray] );
            </code>
            
            <h3>Description</h3>
            <p>
                When the single component is updated then all other components also Re-renders which can badly impact on the peroformance of the large and complex applications.

                And also a function is created each time when the Parent component Re-renders. When dealing with functions we always have to consider Refrence equality.

                This hook tells the React when the Parent component Re-renders then do not create the function again 

                This hook is useful when passing a callback function to the optimized Child components that rely on Reference equality to prevent Re-renders.

            </p>
            <dl>

                <dt>Memoization</dt>
                <dd>A technique that uses a previously stored results. It helps to improve the peroformance by making the computation fast. It means caching the return value on the basis of arguments</dd>

                <dt>React Memo</dt>
                <dd>
                    A method used to memoize the components. It stops the component to Re-render until its props or state changes.
                    <code> export default React.memo(ComponentName) </code>
                </dd>

                <dt>Optimized Components</dt>
                <dd>
                    Those components that are Optimized with the React.memo to prevent unnecessary re-renders.
                </dd>
                
                <dt>Reference Equality</dt>
                <dd>
                    A technique which checks that the two values are equal and points to one memory location.
                </dd>
            </dl>

            <p>This hook takes two arguments.</p>
            <ul>
                <li>Callback Function</li>

                <li>Dependency Array</li>
            </ul>

            <p>This hook returns.</p>
            <ol>
                <li>Memoized Function</li>
            </ol>
            
            <h3>Examples</h3>
            <UseCallbackExampleOne />
        </>
    );
}

export default UseCallbackHook;