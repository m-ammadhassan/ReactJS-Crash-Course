const initialState = {
    countValue: 0
}

const countReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case 'INCREMENT':
        return {
            ...state,
            countValue: action.payload
        };

        case 'DECREMENT':
        return {
            ...state, 
            countValue: action.payload
        };

        default:
        return state;
    }
}

export default countReducer;