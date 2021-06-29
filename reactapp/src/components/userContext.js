import React from 'react'


//share state info across components
const UserContext = React.createContext('Deafault Value');

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}