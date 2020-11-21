import React, {useEffect, useReducer} from 'react';

import {ACTION_TYPES} from "./actions";


export const TodoContext = React.createContext([]);

const TodoContextProvider = ({children}) => {
    const initialState = JSON.parse(localStorage.getItem('state')) || []
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state))
    }, [state])

    function reducer(state, {type, payload}) {
        switch (type) {
            case ACTION_TYPES.SET_LISTS:
                return payload;
            case ACTION_TYPES.CREATE_LIST:
                return [
                    ...state,
                    {...payload, tasks: []}
                ]
            default:
                return state;
        }
    }

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
