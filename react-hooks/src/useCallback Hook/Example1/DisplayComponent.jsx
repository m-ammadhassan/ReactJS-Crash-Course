import React from 'react'

const DisplayComponent = ({title, myValue}) =>
{
    console.log(`Display Component Renders - ${title}`);
    return <h4>{myValue}</h4>
}

export default React.memo(DisplayComponent);