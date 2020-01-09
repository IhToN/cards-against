import React, { createContext, useState, useContext } from 'react'

const Context = createContext()

export function GlobalStateProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [socket, setSocket] = useState(null)
  const context = { currentUser, setCurrentUser, socket, setSocket }
  return (
    <Context.Provider value={context}>{children}</Context.Provider>
  )
}

export function useGlobalState () {
  return useContext(Context)
}

