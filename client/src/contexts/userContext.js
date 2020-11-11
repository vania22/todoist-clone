import React, { useReducer, useState } from 'react';

export const AppContext = React.createContext([]);

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [state, dispatch] = useReducer(reducer, {});

    function reducer(state, action) {
        switch (action.type) {
            default:
                return state;
        }
    }

    return (
        <AppContext.Provider value={{ state, dispatch, user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
