import React, { Dispatch, SetStateAction, createContext, useState } from 'react'




export interface Job{
    id:string
    title:string
    description:string
    phone:number
    period:string
    provider:string
}

type States = {
    services:Job[]
    job:Job | undefined
}

type Setters = {
    setJob:Dispatch<SetStateAction<Job | undefined>>
    setServices:Dispatch<SetStateAction<Job[]>>
}

interface CreateContextContext{
    states:States
    setters:Setters    
}

const Context = createContext<CreateContextContext | null>(null)


interface GlobalStateProps{
    children:React.ReactNode
}



export const GlobalState:React.FC<GlobalStateProps> = (props)=>{
    const [services, setServices] = useState<Job[]>([])
    const [job, setJob] = useState<Job>()
    


    


    const states = { services, job }
    const setters = { setJob, setServices }


    return(
        <Context.Provider value={{ states, setters }}>
            { props.children }
        </Context.Provider>
    )
}

export default Context