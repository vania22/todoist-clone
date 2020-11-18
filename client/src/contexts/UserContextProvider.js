import React, {useEffect, useState} from 'react';

export const UserContext = React.createContext([]);

const UserContextProvider = ({ children }) => {
    const initialValue = JSON.parse(localStorage.getItem('user')) || null
    const [user, setUser] = useState(initialValue);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
