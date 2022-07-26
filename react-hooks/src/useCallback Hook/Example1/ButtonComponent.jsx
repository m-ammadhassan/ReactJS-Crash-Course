import React from 'react'

const ButtonComponent = ({title, myFunction}) =>
{
    console.log(`Button Component Renders - ${title}`);
    return <button onClick={myFunction}>{title}</button>
}

export default React.memo(ButtonComponent);