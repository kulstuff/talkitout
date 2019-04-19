import React from 'react'

export default React.createContext({
    token: null,
    userType: null,
    client: null,
    setClientInfo: () => {},
    login: () => {},
    logout: () => {}
})