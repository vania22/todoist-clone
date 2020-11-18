import React, { useReducer, useState } from 'react';

export const TodoContext = React.createContext([]);

const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {});

    function reducer(state, action) {
        switch (action.type) {
            default:
                return state;
        }
    }

    return (
        <TodoContext.Provider value={{ state, dispatch}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
