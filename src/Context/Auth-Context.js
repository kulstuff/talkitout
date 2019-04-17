import React from 'react'

export default React.createContext({
    token: null,
    userTpye: null,
    login: () => {},
    logout: () => {}
})