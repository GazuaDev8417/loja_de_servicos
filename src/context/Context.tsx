'use client'
import React, { Dispatch, SetStateAction, createContext, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '@/constants/urls'



export interface Job{
    id:string
    title:string
    description:string
    phone:string
    period:string
    provider:string
}


type States = {
    services:Job[]
    job:Job
}

type Setters = {
    setJob:Dispatch<SetStateAction<Job>>
    setServices:Dispatch<SetStateAction<Job[]>>
}

export interface ContextContent{
    states:States
    setters:Setters
}

const Context = createContext<ContextContent | null>(null)

interface GlobalStateProps{
    children:React.ReactNode
}



export const GlobalState:React.FC<GlobalStateProps> = (props)=>{
    const [services, setServices] = useState<Job[]>([])
    const [job, setJob] = useState<Job>({
        id:'',
        title:'',
        description:'',
        phone:'',
        period:'',
        provider:''
    })
    


    


    const states = { services, job }
    const setters = { setJob, setServices }


    return(
        <Context.Provider value={{ states, setters }}>
            { props.children }
        </Context.Provider>
    )
}

export default Context