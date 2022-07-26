import React from 'react'

const TitleComponent = ({title}) =>
{
    console.log("Title Component Renders");
    return <h4>Example No.{title}</h4>
}

export default React.memo(TitleComponent);