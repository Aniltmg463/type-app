'use client'

import { useContext, createContext } from "react"

const userData = {
    name: 'Tarun',
    email: 'tarun@abc.com',
    salaryy: '30LPS'
}

const DataContext = createContext(userData)

export const RootContext = ({children}:{children: React.ReactNode}) =>{
    return(
        <DataContext.Provider value={userData}>
            {children}
        </DataContext.Provider>
    )
}

export const useContextData = () => useContext(DataContext)