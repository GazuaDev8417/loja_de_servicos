'use client'
import React, { createContext, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '@/constants/urls'


const Context = createContext<any>(null)


export interface Job{
    id:string
    title:string
    description:string
    phone:number
    period:string
    provider:string
}

interface GlobalStateProps{
    children:React.ReactNode
}



export const GlobalState:React.FC<GlobalStateProps> = (props)=>{
    const [services, setServices] = useState<Job[]>([])
    const [job, setJob] = useState<Job>()
    


    


    const states = { services, job }
    const setters = { setJob }
    const requests = {  }


    return(
        <Context.Provider value={{ states, setters, requests }}>
            { props.children }
        </Context.Provider>
    )
}

export default Context