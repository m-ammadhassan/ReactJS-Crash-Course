const countReducer = (state, action) =>
{
    switch(action.type)
    {
        case 'INCREMENT':
        return {countValue: state.countValue+1};

        case 'DECREMENT':
        return {countValue: state.countValue-1};

        default:
        return state;
    }
}

export default countReducer