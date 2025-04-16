"use client"
import React, { createContext} from 'react'
export const MyContext = createContext()

const Context = ({ children }) => {
    const username = "John Doe"
    const age = 30
  return (
    <MyContext.Provider value={{ username, age }}>
        {children}
    </MyContext.Provider>
  )
}

export default Context